import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AdSlot from '../../components/ads/AdSlot';

const articles = [
  {
    slug: '/blog/how-to-make-resume-for-freshers',
    title: 'How to Make a Resume for Freshers in 2025 (Step-by-Step Guide)',
    description: 'Learn exactly what to include on your resume when you have no work experience. A complete guide covering education, projects, skills, and formatting tips for freshers.',
    readTime: '10 min read',
    category: 'Fresher Guide'
  },
  {
    slug: '/blog/java-developer-resume',
    title: 'Java Developer Resume: Examples, Tips & Format for 2025',
    description: 'Build a Java developer resume that highlights your technical skills, frameworks, and project experience. Includes formatting tips and keyword strategies for ATS.',
    readTime: '10 min read',
    category: 'Developer Resume'
  },
  {
    slug: '/blog/react-developer-resume',
    title: 'React Developer Resume Guide with Examples (2025)',
    description: 'Create a standout React developer resume with the right technical skills, project examples, and ATS-optimized keywords. Includes real-world examples and tips.',
    readTime: '10 min read',
    category: 'Developer Resume'
  },
  {
    slug: '/blog/bca-resume-format',
    title: 'BCA Resume Format: Best Templates & Examples for Freshers',
    description: 'The complete BCA graduate resume guide. Learn how to highlight academic projects, technical skills, and internships to land your first IT job.',
    readTime: '10 min read',
    category: 'Fresher Guide'
  },
  {
    slug: '/blog/ats-friendly-resume-tips',
    title: '15 ATS Resume Tips That Get Past the Bots in 2025',
    description: 'Master the Applicant Tracking System with 15 actionable tips. Learn which fonts, formats, and keywords help your resume get past automated screening.',
    readTime: '11 min read',
    category: 'ATS Guide'
  },
  {
    slug: '/blog/computer-science-resume',
    title: 'Computer Science Resume: Format, Examples & Tips (2025)',
    description: 'Build a strong CS resume that showcases your programming skills, GitHub projects, internships, and academic achievements. Ideal for students and new graduates.',
    readTime: '10 min read',
    category: 'Student Guide'
  }
];

const BlogIndex = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Helmet>
        <title>Resume Writing Guides, ATS Tips & Career Advice | ResumeForge</title>
        <meta name="description" content="Expert resume writing guides, ATS optimization tips, fresher resume examples, Java developer resumes, React developer resumes, and more." />
        <link rel="canonical" href="https://resumeforge.com/blog" />
        <meta property="og:title" content="Resume Writing Guides, ATS Tips & Career Advice | ResumeForge" />
        <meta property="og:description" content="Expert resume writing guides, ATS optimization tips, fresher resume examples, Java developer resumes, React developer resumes, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://resumeforge.com/blog" />
        <meta property="og:image" content="https://resumeforge.com/og-image.png" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Resume Guides & Career Resources</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Landing your dream job starts with a resume that gets noticed. Our in-depth guides cover everything from writing your very first resume as a fresher to optimizing for Applicant Tracking Systems, crafting role-specific developer resumes, and choosing the right format for your career stage. Each article is written by career experts and packed with actionable advice, real examples, and step-by-step instructions you can apply immediately using our free resume builder. Whether you are a BCA graduate, a Java developer with five years of experience, or a computer science student preparing for campus placements, you will find a guide tailored to your exact situation. Bookmark this page and come back whenever you need a refresher — we regularly update our content to reflect the latest hiring trends and recruiter expectations.
            </p>
          </div>
        </section>

        {/* AdSense after intro */}
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <AdSlot slotId="BLOG_INDEX_TOP" size="leaderboard" className="mt-8 mb-4 hidden md:flex" />
          <AdSlot slotId="BLOG_INDEX_TOP_MOBILE" size="mobile-banner" className="mt-8 mb-4 flex md:hidden" />
        </div>

        {/* Article Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <Link
                  key={i}
                  to={article.slug}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <BookOpen size={48} className="text-slate-300 group-hover:text-primary-400 transition-colors" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">{article.category}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{article.title}</h2>
                    <p className="text-sm text-slate-600 mb-4 flex-1">{article.description}</p>
                    <span className="text-primary-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Resume?</h2>
            <p className="text-slate-300 mb-8 text-lg">Apply what you have learned. Create a professional, ATS-friendly resume in minutes — completely free.</p>
            <Link to="/builder" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 inline-block">
              Build Your Resume Free →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
