import { useEffect, useState, useRef } from 'react';
import { ShieldAlert, Image as ImageIcon } from 'lucide-react';

const SIZES = {
  leaderboard: { width: '728px', height: '90px' },
  rectangle: { width: '300px', height: '250px' },
  banner: { width: '468px', height: '60px' },
  'mobile-banner': { width: '320px', height: '50px' },
  auto: { width: '100%', height: 'auto', minHeight: '100px' }
};

const AdSlot = ({ slotId, size = 'auto', className = '' }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, loaded, failed
  const containerRef = useRef(null);
  const adRef = useRef(null);

  const dimensions = SIZES[size] || SIZES.auto;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && status === 'idle') {
          setStatus('loading');
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load slightly before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [status]);

  useEffect(() => {
    if (status !== 'loading') return;

    let timeoutId;
    try {
      // Basic check if adblocker blocked the script entirely
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        
        // Wait a bit to see if ad fills. If ins remains empty, it might be blocked or unfilled
        timeoutId = setTimeout(() => {
          if (adRef.current && (adRef.current.innerHTML === '' || adRef.current.getAttribute('data-ad-status') === 'unfilled')) {
             setStatus('failed');
          } else {
             setStatus('loaded');
          }
        }, 2000);
      } else {
        // If adsbygoogle doesn't exist after a timeout, it's likely blocked
        timeoutId = setTimeout(() => {
          setStatus('failed');
        }, 1500);
      }
    } catch (err) {
      console.error('AdSense error:', err);
      setStatus('failed');
    }

    return () => clearTimeout(timeoutId);
  }, [status]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden flex justify-center items-center ${className}`}
      style={{ 
        width: dimensions.width, 
        height: dimensions.height,
        minHeight: dimensions.minHeight 
      }}
    >
      {/* Fallback / Error State */}
      {status === 'failed' && (
        <div className="absolute inset-0 bg-slate-100 border border-slate-200 rounded flex flex-col items-center justify-center p-4 text-center">
          <ShieldAlert className="text-slate-400 mb-2" size={24} />
          <p className="text-xs text-slate-500 font-medium">Please disable adblock to support this free tool</p>
        </div>
      )}

      {/* Loading Skeleton */}
      {status === 'loading' && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse border border-slate-200 rounded flex items-center justify-center">
          <ImageIcon className="text-slate-300" size={32} />
        </div>
      )}

      {/* The AdSense ins element (only render when we try to load) */}
      {(status === 'loading' || status === 'loaded') && (
        <ins 
          ref={adRef}
          className="adsbygoogle w-full h-full"
          style={{ display: 'block' }}
          data-ad-client={import.meta.env.VITE_ADSENSE_PUB_ID || 'ca-pub-dummy'}
          data-ad-slot={slotId}
          data-ad-format={size === 'auto' ? 'auto' : undefined}
          data-full-width-responsive={size === 'auto' ? "true" : "false"}
        ></ins>
      )}
    </div>
  );
};

export default AdSlot;
