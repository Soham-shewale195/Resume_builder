import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FileText, ShieldCheck, Download, CheckCircle2, Eye, LayoutGrid, UserX, ChevronRight, ChevronDown, Pencil, Palette, ArrowDownToLine } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AdSlot from '../components/ads/AdSlot';

const faqs = [
  { q: 'Is ResumeForge free?', a: 'Yes, ResumeForge is 100% free. There are no hidden charges, premium tiers, or paywalls. You can create, edit, and download unlimited resumes as PDF files without paying anything. We sustain the platform through non-intrusive advertisements.' },
  { q: 'Is my data safe?', a: 'Absolutely. ResumeForge runs entirely in your browser. Your resume data is stored in your browser\'s local storage and never uploaded to any server. We do not have a backend database, which means your personal information stays on your device at all times.' },
  { q: 'Can I download as PDF?', a: 'Yes. ResumeForge generates pixel-perfect PDF files directly in your browser using a client-side rendering engine. The PDF preserves your chosen template layout, fonts, and formatting exactly as shown in the live preview.' },
  { q: 'Is it ATS friendly?', a: 'Yes. All four templates are designed to be parsed correctly by Applicant Tracking Systems (ATS). The ATS Classic template, in particular, uses a single-column layout with standard headings and no complex formatting, achieving excellent ATS readability scores.' },
  { q: 'Do I need to sign up?', a: 'No sign-up or registration is required. Simply visit the site, start filling in your details, and download your resume. There are no accounts, emails, or passwords involved.' },
  { q: 'Can I use it on mobile?', a: 'Yes. ResumeForge is fully responsive and works on smartphones, tablets, and desktops. The builder interface adapts to your screen size with a tabbed view on mobile devices, letting you switch between editing and previewing your resume.' },
  { q: 'How many templates are available?', a: 'ResumeForge currently offers four professionally designed templates: ATS Classic (single-column, no-frills), Modern Blue (two-column with photo), Minimal (clean whitespace-focused), and Student Pro (optimized for freshers and students with limited experience).' }
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Helmet>
        <title>Free Resume Builder Online | ATS Resume Maker — ResumeForge</title>
        <meta name="description" content="Create a professional ATS-friendly resume in minutes. Free online resume builder with PDF download, live preview, and AI-powered suggestions. No sign-up needed." />
        <link rel="canonical" href="https://resumeforge.com" />
        <meta property="og:title" content="Free Resume Builder Online | ATS Resume Maker — ResumeForge" />
        <meta property="og:description" content="Create a professional ATS-friendly resume in minutes. Free online resume builder with PDF download, live preview, and AI-powered suggestions. No sign-up needed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://resumeforge.com" />
        <meta property="og:image" content="https://resumeforge.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* ═══════════════════ Section 1: Hero ═══════════════════ */}
        <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Build Your Resume in Minutes <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-300">
                — Free
              </span>
            </h1>
            
            <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
              No sign-up. No paywalls. 100% private. Create a professional, ATS-friendly resume and download it as a pixel-perfect PDF — all for free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/builder" 
                id="hero-cta"
                className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)] hover:scale-105"
              >
                Start Building
              </Link>
              <Link 
                to="/templates" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white text-lg px-8 py-4 rounded-xl font-bold transition-all border border-white/20"
              >
                View Templates
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════ Section 2: AdSense Leaderboard ═══════════════════ */}
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <AdSlot slotId="hero-bottom-ad" size="leaderboard" className="mt-8 mb-4 hidden md:flex" />
          <AdSlot slotId="hero-bottom-ad-mobile" size="mobile-banner" className="mt-8 mb-4 flex md:hidden" />
        </div>

        {/* ═══════════════════ Section 3: Features Grid (6 cards) ═══════════════════ */}
        <section className="py-20 bg-white" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need to Land the Interview</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Six powerful features that make ResumeForge the best free resume builder online.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Eye, color: 'blue', title: 'Live Preview', desc: 'See every change reflected instantly on a pixel-perfect A4 preview. No need to download to check your formatting.' },
                { icon: FileText, color: 'amber', title: 'Professional Resume Builder', desc: 'Create a job-winning resume in minutes with our intuitive, easy-to-use interface. No formatting struggles, just pure content creation.' },
                { icon: ShieldCheck, color: 'green', title: 'ATS Friendly', desc: 'Templates designed to pass Applicant Tracking Systems. Standard fonts, clean layouts, and parseable section headers.' },
                { icon: Download, color: 'purple', title: 'Free PDF Download', desc: 'Download unlimited, pixel-perfect PDF resumes. No watermarks on the PDF, no "premium" traps, no hidden charges.' },
                { icon: LayoutGrid, color: 'rose', title: '4 Professional Templates', desc: 'Choose from ATS Classic, Modern Blue, Minimal, and Student Pro — each optimized for different career stages.' },
                { icon: UserX, color: 'cyan', title: 'No Sign-up Required', desc: 'Start building immediately. No accounts, no emails, no passwords. Your data stays in your browser.' }
              ].map((f, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                  <div className={`w-14 h-14 bg-${f.color}-100 text-${f.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <f.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ Section 4: Template Showcase ═══════════════════ */}
        <section className="py-20 bg-slate-50 border-t border-slate-200" id="templates">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">4 Professionally Designed Templates</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Each template is ATS-optimized and designed for a different career stage. Pick the one that fits you best.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'ATS Classic', desc: 'Clean, single-column layout designed for maximum ATS compatibility. Best for experienced professionals.' },
                { name: 'Modern Blue', desc: 'Two-column design with a navy sidebar. Supports a profile photo. Great for creative and tech roles.' },
                { name: 'Minimal', desc: 'Generous whitespace and refined typography. Perfect for designers and senior professionals.' },
                { name: 'Student Pro', desc: 'Education-first layout with project showcase. Ideal for freshers, interns, and recent graduates.' }
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="h-48 bg-slate-100 flex items-center justify-center p-4">
                    {/* Stylized resume placeholder */}
                    <div className="w-full h-full bg-white rounded shadow-sm p-3 overflow-hidden border border-slate-200">
                      <div className={`w-3/4 h-3 ${i === 1 ? 'bg-blue-800' : i === 3 ? 'bg-emerald-600' : 'bg-slate-800'} rounded mb-1.5`}></div>
                      <div className="w-1/2 h-2 bg-slate-300 rounded mb-3"></div>
                      <div className="w-full h-1.5 bg-slate-200 rounded mb-1"></div>
                      <div className="w-5/6 h-1.5 bg-slate-200 rounded mb-1"></div>
                      <div className="w-full h-1.5 bg-slate-200 rounded mb-3"></div>
                      <div className={`w-1/3 h-2 ${i === 1 ? 'bg-blue-700' : i === 3 ? 'bg-emerald-500' : 'bg-slate-700'} rounded mb-1.5`}></div>
                      <div className="w-full h-1.5 bg-slate-200 rounded mb-1"></div>
                      <div className="w-4/5 h-1.5 bg-slate-200 rounded mb-1"></div>
                      <div className="w-full h-1.5 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-1">{t.name}</h3>
                    <p className="text-sm text-slate-500">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/templates" className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center gap-1">
                Explore All Templates <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════ Section 5: How It Works ═══════════════════ */}
        <section className="py-20 bg-white border-t border-slate-200" id="how-it-works">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Build Your Resume in 3 Easy Steps</h2>
              <p className="text-lg text-slate-600">No complicated setup. No learning curve. Just results.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: Pencil, step: '1', title: 'Fill in Your Details', desc: 'Enter your personal information, experience, education, skills, and projects using our guided form with real-time validation.' },
                { icon: Palette, step: '2', title: 'Choose a Template', desc: 'Pick from four ATS-optimized templates. Preview your resume in real time as you make changes. Switch templates anytime.' },
                { icon: ArrowDownToLine, step: '3', title: 'Download Your PDF', desc: 'Hit the download button and get a pixel-perfect PDF file instantly. No watermarks, no sign-up walls, no charges.' }
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="relative mx-auto w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                    <s.icon size={32} className="text-primary-600" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary-600 text-white rounded-full text-sm font-bold flex items-center justify-center">{s.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/builder" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:scale-105 inline-block">
                Start Building Now
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════ Section 6: Resume Tips (SEO Content) ═══════════════════ */}
        <section className="py-20 bg-slate-50 border-t border-slate-200" id="resume-tips">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Expert Resume Writing Tips</h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base">
              <p>
                Writing a strong resume is one of the most important steps in any job search. Whether you are a fresher applying for your first role or an experienced professional targeting senior positions, your resume is the first impression a recruiter or hiring manager will have of you. A well-structured resume highlights your skills, experience, and achievements in a way that is easy to scan and relevant to the position you are applying for.
              </p>
              <p className="mt-4">
                One of the biggest challenges job seekers face in 2025 is getting past Applicant Tracking Systems, commonly known as ATS. These software tools automatically scan and rank resumes before a human ever sees them. To beat the ATS, your resume should use standard section headings like "Experience," "Education," and "Skills." Avoid using images, tables, or multi-column layouts that can confuse the parser. Stick to clean fonts like Arial, Calibri, or Times New Roman, and always submit your resume as a PDF unless the job posting specifically requests a Word document.
              </p>
              <p className="mt-4">
                Focus on quantifiable achievements rather than generic job descriptions. Instead of writing "Responsible for managing a team," write "Led a cross-functional team of 8 engineers, delivering 3 major product releases ahead of schedule." Numbers and metrics catch a recruiter's eye and demonstrate real impact. Tailor your resume for each application by incorporating keywords directly from the job description — this also improves your ATS score. Finally, keep your resume concise: one page for freshers and early-career professionals, and no more than two pages for experienced candidates. Use our free resume builder to apply all of these tips instantly with professionally designed, ATS-friendly templates.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════ Section 7: FAQ ═══════════════════ */}
        <section className="py-20 bg-white border-t border-slate-200" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 text-center mb-12">Everything you need to know about ResumeForge.</p>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown size={20} className={`text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ Section 8: Footer (rendered by Footer component) ═══════════════════ */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
