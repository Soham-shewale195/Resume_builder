import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('./pages/Home'));
const Builder = lazy(() => import('./pages/Builder'));
const Templates = lazy(() => import('./pages/Templates'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const FresherResume = lazy(() => import('./pages/blog/FresherResume'));
const JavaDeveloperResume = lazy(() => import('./pages/blog/JavaDeveloperResume'));
const ReactDeveloperResume = lazy(() => import('./pages/blog/ReactDeveloperResume'));
const BCAResume = lazy(() => import('./pages/blog/BCAResume'));
const ATSTips = lazy(() => import('./pages/blog/ATSTips'));
const CSResume = lazy(() => import('./pages/blog/CSResume'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div className="flex h-screen items-center justify-center text-primary-600"><span className="animate-pulse">Loading...</span></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/templates" element={<Templates />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/how-to-make-resume-for-freshers" element={<FresherResume />} />
            <Route path="/blog/java-developer-resume" element={<JavaDeveloperResume />} />
            <Route path="/blog/react-developer-resume" element={<ReactDeveloperResume />} />
            <Route path="/blog/bca-resume-format" element={<BCAResume />} />
            <Route path="/blog/ats-friendly-resume-tips" element={<ATSTips />} />
            <Route path="/blog/computer-science-resume" element={<CSResume />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          success: {
            style: { background: '#059669', color: '#fff' },
            duration: 2000,
          },
          error: {
            style: { background: '#DC2626', color: '#fff' },
            duration: 3000,
          },
          custom: {
            duration: 2000,
          }
        }}
      />
    </HelmetProvider>
  );
}

export default App;
