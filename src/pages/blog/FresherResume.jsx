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

const FresherResume = () => {
  const title = 'How to Make a Resume for Freshers in 2025 (Step-by-Step Guide)';
  const description = 'Learn how to create a professional resume as a fresher with no work experience. Step-by-step guide covering education, projects, skills, and formatting for 2025.';
  const canonical = 'https://resumeforge.com/blog/how-to-make-resume-for-freshers';
  const datePublished = '2025-01-15';
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
      { '@type': 'Question', name: 'What should a fresher put on a resume with no experience?', acceptedAnswer: { '@type': 'Answer', text: 'Freshers should focus on academic projects, internships, technical skills, certifications, volunteer work, and extracurricular achievements. Quantify results wherever possible and tailor each resume to the specific job description.' } },
      { '@type': 'Question', name: 'How long should a fresher resume be?', acceptedAnswer: { '@type': 'Answer', text: 'A fresher resume should strictly be one page. Recruiters spend an average of six to seven seconds on an initial scan, so conciseness is critical. Remove anything that does not directly support the role you are applying for.' } },
      { '@type': 'Question', name: 'Which resume format is best for freshers?', acceptedAnswer: { '@type': 'Answer', text: 'The reverse-chronological format is the safest choice because ATS software and recruiters are most familiar with it. List your education first (since it is your strongest section), followed by projects, skills, and any internships or volunteer work.' } }
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary-600">Blog</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Fresher Resume Guide</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
            <span>Updated: June 2025</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              Writing your first resume can feel overwhelming, especially when every job posting seems to demand years of experience you simply do not have yet. The good news is that thousands of freshers land excellent jobs every year with well-crafted resumes that strategically highlight education, projects, and transferable skills instead of professional experience. This guide walks you through every section of a fresher resume, explains exactly what recruiters are looking for, and gives you actionable formatting tips you can apply right now using ResumeForge's free builder.
            </p>

            {/* AdSense after first paragraph */}
            <div className="not-prose my-6 flex justify-center">
              <AdSlot slotId="BLOG_FRESHER_TOP" size="leaderboard" className="hidden md:flex" />
              <AdSlot slotId="BLOG_FRESHER_TOP_M" size="mobile-banner" className="flex md:hidden" />
            </div>

            <h2>Why Your Resume Matters Even Without Experience</h2>
            <p>
              Recruiters at large companies like TCS, Infosys, Wipro, and hundreds of startups review thousands of fresher resumes during campus placement season. The average recruiter spends between six and ten seconds on each resume during the initial screening pass. That means your resume has to communicate your value proposition instantly: who you are, what you can do, and why you are worth interviewing. A poorly formatted resume with vague descriptions gets discarded in seconds, while a clean, structured resume with quantified achievements makes the shortlist even without formal work experience.
            </p>

            <p>
              The key insight that most freshers miss is that recruiters are not looking for experienced professionals when they hire for entry-level positions. They are looking for potential — evidence that you can learn quickly, solve problems, and contribute to a team. Your resume needs to provide that evidence through the sections described below.
            </p>

            <h2>Choosing the Right Resume Format</h2>
            <p>
              For freshers, the reverse-chronological format is almost always the best choice. This means listing your most recent education first, followed by projects, skills, and any internships or part-time work. Functional resumes (which organize by skills rather than timeline) can raise red flags with recruiters because they suggest the candidate is trying to hide gaps. Combination formats work for mid-career professionals but are unnecessarily complex for entry-level candidates. Stick with reverse-chronological, keep it to one page, and use a clean, professional template like ResumeForge's Student Pro or ATS Classic.
            </p>

            <CTA />

            <h2>Section 1: Contact Information</h2>
            <p>
              Your contact section should be simple and professional. Include your full name, phone number, professional email address, city and state (not full home address), and links to your LinkedIn profile and GitHub if applicable. Avoid using casual email addresses like coolguy99@gmail.com — create a professional one using your name. If you have a personal portfolio website, include that as well. ResumeForge's builder automatically formats this section so it is ATS-readable and visually balanced.
            </p>

            <h2>Section 2: Professional Summary or Objective</h2>
            <p>
              Even as a fresher, you should include a two-to-three sentence summary at the top of your resume. This is your elevator pitch. A strong fresher summary follows this formula: mention your degree, highlight one or two key technical skills, reference a notable project or achievement, and state the type of role you are seeking. For example: "BCA graduate with hands-on experience in Java, Spring Boot, and MySQL through three academic projects including a full-stack inventory management system. Seeking an entry-level software developer role to apply strong problem-solving skills in a collaborative engineering environment."
            </p>

            <p>
              Avoid generic statements like "hardworking individual seeking a challenging position." Every fresher writes that, and it communicates nothing specific about your capabilities. Use ResumeForge's AI summary generator to create a tailored, impactful summary in seconds.
            </p>

            <h2>Section 3: Education</h2>
            <p>
              For freshers, education is typically the strongest section and should appear immediately after the summary. Include your degree name, field of study, university or college name, graduation year, and CGPA or percentage if it is above 7.0 (or 70%). If your CGPA is below 7.0, it is generally better to omit it entirely. You can also include relevant coursework, especially if it directly relates to the job you are applying for. For example, a computer science graduate applying for a data science role might list "Machine Learning, Statistical Analysis, Data Structures and Algorithms" as relevant coursework.
            </p>

            <CTA />

            <h2>Section 4: Projects — Your Secret Weapon</h2>
            <p>
              Projects are the most important section on a fresher resume. They serve as proof that you can actually build things, not just study theory. Include two to four of your strongest projects. For each project, provide the project name, the tech stack you used, and a brief description of what the project does and what you specifically contributed. Quantify your results whenever possible: "Built a real-time chat application using React and Socket.io that supports up to 50 concurrent users with an average latency of 120ms." That is dramatically more impressive than "Built a chat application using React."
            </p>

            <p>
              If your projects are hosted on GitHub, include the repository link. If you have deployed versions, include the live URL. Recruiters frequently check GitHub profiles for freshers, and having well-documented repositories with README files demonstrates professionalism and technical communication skills that set you apart from other candidates.
            </p>

            <h2>Section 5: Technical Skills</h2>
            <p>
              List your technical skills in categories: programming languages, frameworks and libraries, databases, tools, and platforms. Be honest and specific. If you have written one Python script, do not list Python as a skill — recruiters may test you on anything you claim. A strong fresher skills section might look like: "Languages: Java, JavaScript, SQL | Frameworks: Spring Boot, React.js | Databases: MySQL, MongoDB | Tools: Git, VS Code, Postman | Platforms: Linux, AWS (basic)." Avoid listing Microsoft Word or basic computer skills — these are assumed and waste valuable resume space.
            </p>

            <p>
              Carefully read each job description and mirror the keywords it uses. If a job posting asks for "REST API development," make sure your resume uses the phrase "REST API" rather than just "API." This keyword matching is critical for passing ATS filters.
            </p>

            <h2>Section 6: Internships and Volunteer Work</h2>
            <p>
              If you have completed any internships, even short ones, include them with bullet points describing what you did and what you accomplished. Use action verbs like "developed," "implemented," "designed," "optimized," and "collaborated." Volunteer work, hackathon participation, open-source contributions, and leadership roles in college clubs also belong here. These demonstrate initiative, teamwork, and time management — all qualities that hiring managers value in entry-level candidates.
            </p>

            <CTA />

            <h2>Section 7: Certifications and Achievements</h2>
            <p>
              Relevant certifications from platforms like Coursera, Udemy, NPTEL, or AWS can strengthen a fresher resume significantly. Include the certification name, issuing organization, and completion date. Academic achievements such as dean's list recognition, competition wins, or scholarships should also be listed. Even achievements outside of academics — such as organizing a college fest or winning a sports championship — can demonstrate leadership and organizational skills that are transferable to a professional environment.
            </p>

            <h2>Common Fresher Resume Mistakes to Avoid</h2>
            <p>
              The most common mistakes freshers make include using generic objectives instead of specific summaries, listing every skill they have ever heard of rather than skills they can actually demonstrate, ignoring ATS formatting requirements by using complex layouts with tables and graphics, and extending their resume to two pages when they have less than a year of experience. Other frequent errors include inconsistent date formats, spelling and grammatical mistakes, and failing to tailor the resume for each job application. Proofread your resume at least three times, ask a friend or mentor to review it, and use tools like ResumeForge's ATS Classic template to ensure your formatting passes automated screening systems.
            </p>

            <h2>Final Tips</h2>
            <p>
              Save your resume as a PDF to preserve formatting. Name the file professionally: "FirstName_LastName_Resume.pdf" instead of "resume_final_v3.pdf." Keep white space balanced — a cluttered resume is as bad as an empty one. And remember, your resume is a living document. Update it after every new project, internship, or certification. The best time to start building your resume is today, even if you are still in college. Use ResumeForge's free builder to create a polished, ATS-friendly resume in minutes.
            </p>

            {/* FAQ Section */}
            <h2>Frequently Asked Questions</h2>

            <h3>What should a fresher put on a resume with no experience?</h3>
            <p>
              Freshers should focus on academic projects, internships, technical skills, certifications, volunteer work, and extracurricular achievements. Quantify results wherever possible and tailor each resume to the specific job description. Even college coursework and hackathon participation can serve as evidence of your capabilities.
            </p>

            <h3>How long should a fresher resume be?</h3>
            <p>
              A fresher resume should strictly be one page. Recruiters spend an average of six to seven seconds on an initial scan, so conciseness is critical. Remove anything that does not directly support the role you are applying for. If your resume spills onto a second page, cut the weakest items first.
            </p>

            <h3>Which resume format is best for freshers?</h3>
            <p>
              The reverse-chronological format is the safest choice because ATS software and recruiters are most familiar with it. List your education first (since it is your strongest section), followed by projects, skills, and any internships or volunteer work. Avoid functional or creative formats unless you are applying specifically to design roles.
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

export default FresherResume;
