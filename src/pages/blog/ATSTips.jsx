import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AdSlot from '../../components/ads/AdSlot';

const CTA = () => (
  <div className="my-8 p-6 bg-primary-50 border border-primary-200 rounded-xl text-center">
    <p className="text-primary-800 font-semibold mb-2">Ready to apply these tips?</p>
    <Link to="/builder" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
      Build Your Resume Free →
    </Link>
  </div>
);

const ATSTips = () => {
  const title = '15 ATS Resume Tips That Get Past the Bots in 2025';
  const description = 'Master the Applicant Tracking System with 15 actionable tips. Learn which fonts, formats, and keywords help your resume get past automated screening.';
  const canonical = 'https://resumeforge.com/blog/ats-friendly-resume-tips';
  const datePublished = '2025-02-15';
  const dateModified = '2025-06-01';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    author: { '@type': 'Organization', name: 'ResumeForge' },
    publisher: { '@type': 'Organization', name: 'ResumeForge', logo: { '@type': 'ImageObject', url: 'https://resumeforge.com/og-image.png' } },
    mainEntityOfPage: canonical
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://resumeforge.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://resumeforge.com/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: canonical }
    ]
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is an Applicant Tracking System (ATS)?', acceptedAnswer: { '@type': 'Answer', text: 'An ATS is software that companies use to collect, sort, scan, and rank job applications. It parses your resume into structured data, searches for relevant keywords, and assigns a compatibility score. Resumes that score below a threshold are automatically rejected before a human ever sees them.' } },
      { '@type': 'Question', name: 'Which file format is best for ATS?', acceptedAnswer: { '@type': 'Answer', text: 'PDF is the safest format for most ATS systems in 2025. Modern ATS software like Workday, Greenhouse, and Lever all parse PDFs correctly. Only use a Word document (.docx) if the job posting specifically requests it. Avoid image-based PDFs, scanned documents, and non-standard formats.' } },
      { '@type': 'Question', name: 'Can a well-designed resume still be ATS friendly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but with constraints. You can use professional fonts, subtle section borders, and clean layouts. Avoid multi-column layouts, text inside images, headers and footers (some ATS ignore content in header/footer regions), tables, and icons. ResumeForge templates are designed to be visually appealing while maintaining full ATS compatibility.' } }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://resumeforge.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header />

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary-600">Blog</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">ATS Resume Tips</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
            <span>Updated: June 2025</span>
            <span>·</span>
            <span>11 min read</span>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              More than 98% of Fortune 500 companies and a growing majority of mid-sized businesses use Applicant Tracking Systems to manage their hiring pipelines. These software tools automatically parse, scan, and rank every resume submitted for a position — often rejecting up to 75% of applicants before a human recruiter ever sees their resume. Understanding how ATS works and formatting your resume accordingly is no longer optional; it is a fundamental requirement for any job search in 2025. This article provides 15 specific, actionable tips that will help your resume pass through automated screening and reach the interview stage.
            </p>

            <div className="not-prose my-6 flex justify-center">
              <AdSlot slotId="BLOG_ATS_TOP" size="leaderboard" className="hidden md:flex" />
              <AdSlot slotId="BLOG_ATS_TOP_M" size="mobile-banner" className="flex md:hidden" />
            </div>

            <h2>1. Use a Single-Column Layout</h2>
            <p>
              Multi-column layouts are one of the most common reasons resumes fail ATS parsing. When an ATS encounters two columns, it often reads across both columns as a single line, jumbling your content into nonsense. A clean, single-column layout ensures the ATS reads your resume in the correct top-to-bottom order. This does not mean your resume has to look boring — you can still use professional fonts, subtle borders, and clean spacing within a single-column structure.
            </p>

            <h2>2. Use Standard Section Headings</h2>
            <p>
              ATS software looks for specific section headers to categorize your information. Use standard, recognizable headings: "Professional Summary" or "Summary," "Work Experience" or "Experience," "Education," "Skills," "Projects," and "Certifications." Creative headings like "My Journey," "What I Bring," or "Career Narrative" may confuse the parser and cause it to miscategorize or skip your content entirely.
            </p>

            <h2>3. Choose ATS-Safe Fonts</h2>
            <p>
              Stick to universally supported fonts: Arial, Calibri, Helvetica, Times New Roman, Georgia, or Verdana. These fonts are embedded in all operating systems and are reliably parsed by every major ATS. Avoid decorative fonts, handwriting fonts, or any font that requires a custom file to render. Use 10 to 12 point font size for body text and 12 to 14 points for section headings.
            </p>

            <CTA />

            <h2>4. Submit as PDF (Usually)</h2>
            <p>
              In 2025, the vast majority of ATS systems — including Workday, Greenhouse, Lever, Taleo, and iCIMS — parse PDFs accurately. PDF preserves your formatting perfectly across all devices and operating systems. Only submit a Word document (.docx) if the job posting explicitly requests it. Never submit a resume as a JPEG, PNG, or scanned image — these cannot be parsed at all.
            </p>

            <h2>5. Mirror Keywords from the Job Description</h2>
            <p>
              This is the single most important ATS optimization technique. ATS systems work by matching keywords in your resume against keywords in the job description. If a job description mentions "project management," "Agile methodology," and "stakeholder communication," those exact phrases should appear in your resume. Do not paraphrase — if the job says "data analysis," write "data analysis," not "analyzing data sets." Read each job description carefully and naturally incorporate its key terms into your skills section, summary, and experience bullet points.
            </p>

            <h2>6. Spell Out Acronyms (and Include the Acronym)</h2>
            <p>
              Different ATS systems search for different variations. Some look for "Search Engine Optimization" while others look for "SEO." The safest approach is to include both on first use: "Search Engine Optimization (SEO)." Do this for all technical acronyms: "Continuous Integration/Continuous Deployment (CI/CD)," "Application Programming Interface (API)," "Content Management System (CMS)," and so on. This doubles your chances of matching the keyword the ATS is searching for.
            </p>

            <CTA />

            <h2>7. Avoid Headers and Footers</h2>
            <p>
              Some ATS systems ignore or cannot read content placed in the header and footer sections of a document. Critical information like your name, phone number, and email address should be in the main body of the document, not in a header or footer region. If you are using a template, verify that your contact information is part of the regular document flow.
            </p>

            <h2>8. Do Not Use Tables for Layout</h2>
            <p>
              Tables are another common ATS failure point. Some parsers read table content in unexpected orders or skip it entirely. If you are using tables to align dates with job titles or to create columns, switch to simple text with tab stops or consistent spacing instead. Your content should flow naturally as a single text stream when all formatting is stripped away.
            </p>

            <h2>9. Avoid Images, Icons, and Graphics</h2>
            <p>
              ATS cannot read text that is embedded within images. This includes infographic-style skill bars, icon-based contact information, and decorative graphics. If your email address is represented as an icon followed by text, the ATS might miss it. Use plain text for all information. The only acceptable graphic might be a photograph if the job is in a country or industry where photos are expected, but even then, include your name and contact details as text.
            </p>

            <CTA />

            <h2>10. Use Standard Bullet Points</h2>
            <p>
              Use standard round bullets (•) or hyphens (-) for your bullet point lists. Avoid fancy symbols like arrows, checkmarks, diamonds, or custom characters. Some ATS systems cannot render these and will either skip the bullet or replace it with garbled characters, making your resume look broken when a recruiter finally does see it.
            </p>

            <h2>11. Include a Dedicated Skills Section</h2>
            <p>
              While keywords should appear naturally throughout your resume, a dedicated "Skills" section gives the ATS a concentrated block of relevant terms to match against the job description. List your skills as comma-separated text or simple bullet points. Organize them into categories like "Programming Languages," "Frameworks," "Tools," and "Soft Skills" for additional clarity. This section acts as a keyword-dense anchor that significantly boosts your ATS compatibility score.
            </p>

            <h2>12. Use Consistent Date Formatting</h2>
            <p>
              Pick one date format and use it consistently throughout your resume. "Jan 2023 – Present," "January 2023 – Present," and "01/2023 – Present" are all acceptable, but do not mix formats within the same resume. Inconsistent formatting can confuse the ATS parser and cause it to misread your employment timeline, potentially flagging employment gaps that do not actually exist.
            </p>

            <h2>13. Name Your File Properly</h2>
            <p>
              Some ATS systems use the filename for internal reference. Name your file professionally: "FirstName_LastName_Resume.pdf" rather than "resume_final_v3.pdf" or "document1.pdf." This small detail demonstrates professionalism and makes it easy for recruiters to identify your file in their system.
            </p>

            <h2>14. Keep Formatting Simple</h2>
            <p>
              Bold and italic are generally safe and can help emphasize section headings and job titles. Underlines are acceptable but use them sparingly. Avoid text boxes, WordArt, colored backgrounds, shading, and watermarks. The more complex your formatting, the higher the risk that something will break during ATS parsing. When in doubt, simpler is always safer.
            </p>

            <h2>15. Test Your Resume Before Submitting</h2>
            <p>
              Before submitting your resume, test it by copying all the text and pasting it into a plain text editor like Notepad. If the pasted text reads in the correct order with all your information intact, your resume is likely ATS-compatible. If sections are jumbled, contact information is missing, or text from different columns is merged together, you need to restructure your layout. ResumeForge's ATS Classic template is pre-tested for ATS compatibility, so using it eliminates the need for manual testing.
            </p>

            <CTA />

            <h2>The Bottom Line</h2>
            <p>
              Optimizing your resume for ATS is not about gaming the system — it is about ensuring that your qualifications are accurately represented and correctly parsed by the software that stands between you and the hiring manager. Every tip in this guide can be implemented in under an hour using ResumeForge's free builder and ATS-optimized templates. The investment of time pays for itself with the very first application that makes it past the automated screening and into a recruiter's hands.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>What is an Applicant Tracking System (ATS)?</h3>
            <p>
              An ATS is software that companies use to collect, sort, scan, and rank job applications. It parses your resume into structured data, searches for relevant keywords, and assigns a compatibility score. Resumes that score below a threshold are automatically rejected before a human ever sees them. Popular ATS systems include Workday, Greenhouse, Lever, Taleo, and iCIMS.
            </p>

            <h3>Which file format is best for ATS?</h3>
            <p>
              PDF is the safest format for most ATS systems in 2025. Modern ATS software like Workday, Greenhouse, and Lever all parse PDFs correctly. Only use a Word document (.docx) if the job posting specifically requests it. Avoid image-based PDFs, scanned documents, and non-standard formats like Pages or OpenDocument.
            </p>

            <h3>Can a well-designed resume still be ATS friendly?</h3>
            <p>
              Yes, but with constraints. You can use professional fonts, subtle section borders, and clean layouts. Avoid multi-column layouts, text inside images, headers and footers (some ATS ignore content in header/footer regions), tables, and icons. ResumeForge templates are designed to be visually appealing while maintaining full ATS compatibility, giving you the best of both worlds.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
              <ArrowLeft size={18} /> Back to All Articles
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ATSTips;
