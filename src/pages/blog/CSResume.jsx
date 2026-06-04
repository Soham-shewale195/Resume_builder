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

const CSResume = () => {
  const title = 'Computer Science Resume: Format, Examples & Tips (2025)';
  const description = 'Build a strong CS resume that showcases your programming skills, GitHub projects, internships, and academic achievements. Ideal for students and new graduates.';
  const canonical = 'https://resumeforge.com/blog/computer-science-resume';
  const datePublished = '2025-03-01';
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
      { '@type': 'Question', name: 'Should I include my GitHub profile on a CS resume?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, absolutely. A GitHub profile with clean, documented repositories is one of the strongest assets on a computer science resume. Pin your best projects, include README files with screenshots and setup instructions, and maintain a consistent contribution history. Recruiters and technical interviewers frequently check GitHub profiles.' } },
      { '@type': 'Question', name: 'How many projects should a CS student include on their resume?', acceptedAnswer: { '@type': 'Answer', text: 'Include two to four of your strongest, most relevant projects. Quality matters more than quantity. Each project should demonstrate different skills — for example, one full-stack web app, one systems-level project, and one data science or machine learning project. Include the tech stack, your specific contributions, and measurable outcomes.' } },
      { '@type': 'Question', name: 'What is the best resume format for a computer science student?', acceptedAnswer: { '@type': 'Answer', text: 'Use a reverse-chronological, single-column format. Place education first if you are still in school or recently graduated. Follow with projects, technical skills, internships, and certifications. Keep it to one page. Use an ATS-friendly template with standard fonts and clear section headings.' } }
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
            <span className="text-slate-700 font-medium">Computer Science Resume</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
            <span>Updated: June 2025</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              A computer science degree is one of the most versatile and in-demand qualifications in the global job market, opening doors to careers in software engineering, data science, cybersecurity, artificial intelligence, cloud computing, and dozens of other specialized fields. But the competition is fierce — a single software engineering opening at a top-tier company can receive hundreds or even thousands of applications. Your resume is the document that determines whether you get an interview or get filtered out. This guide provides a detailed, section-by-section framework for building a CS resume that showcases your technical depth, project experience, and problem-solving abilities in a format that both ATS systems and human recruiters can appreciate.
            </p>

            <div className="not-prose my-6 flex justify-center">
              <AdSlot slotId="BLOG_CS_TOP" size="leaderboard" className="hidden md:flex" />
              <AdSlot slotId="BLOG_CS_TOP_M" size="mobile-banner" className="flex md:hidden" />
            </div>

            <h2>The Ideal Section Order for CS Students and Graduates</h2>
            <p>
              If you are currently a student or a recent graduate with less than two years of full-time experience, use this section order: Contact Information, Professional Summary, Education, Technical Skills, Projects, Internships or Work Experience, Certifications, and Achievements. This order places your strongest credentials — your degree and technical skills — at the top. If you are an experienced software engineer with more than two years of professional experience, move Work Experience above Education and Projects, as your professional track record becomes your strongest selling point.
            </p>

            <p>
              Regardless of experience level, keep your resume to one page if you have fewer than five years of experience. Two pages are acceptable only for senior engineers with extensive professional contributions. Use a clean, single-column, ATS-compatible layout. ResumeForge's ATS Classic and Student Pro templates are both specifically designed for computer science professionals.
            </p>

            <h2>Crafting a Technical Professional Summary</h2>
            <p>
              Your professional summary is the first block of text a recruiter reads, and it needs to immediately establish your technical identity. A strong CS student summary follows this pattern: degree and specialization, primary programming languages or technical focus, a standout project or achievement, and the type of role you are targeting. For example: "Computer science senior at State University with a 3.8 GPA, specializing in full-stack web development with React, Node.js, and PostgreSQL. Built and deployed a collaborative code editor used by 300 students in the university's CS program. Seeking a software engineering internship focused on frontend or full-stack development."
            </p>

            <CTA />

            <h2>Education: More Than Just Your Degree</h2>
            <p>
              List your degree name (B.S. in Computer Science, B.Tech in CSE, etc.), your university, expected graduation date or graduation year, and your GPA if it is 3.0 or above (or the equivalent on your local scale). Below the basics, include two to three additional lines of information that differentiate you: relevant coursework that aligns with the roles you are targeting (for example, "Machine Learning, Distributed Systems, Computer Networks, Operating Systems"), any honors or dean's list recognition, and your thesis or capstone project title if applicable.
            </p>

            <p>
              For CS students, relevant coursework serves a specific ATS purpose: it introduces additional technical keywords that match job descriptions. A job posting for a backend developer role might mention "distributed systems" and "databases," and listing these as coursework creates a keyword match even if you do not have professional experience in those areas.
            </p>

            <h2>Technical Skills: Organized for Impact</h2>
            <p>
              The skills section on a CS resume should be comprehensive but honest. Organize your skills into clear categories. Programming Languages: list your strongest languages first (e.g., Python, Java, C++, JavaScript, TypeScript, Go, Rust). Frameworks and Libraries: React, Node.js, Django, Flask, Spring Boot, TensorFlow, PyTorch. Databases: PostgreSQL, MySQL, MongoDB, Redis. DevOps and Cloud: Docker, Kubernetes, Jenkins, AWS, GCP, Azure, Terraform. Tools: Git, Linux, VS Code, Vim, Postman, Jira. Each skill you list should be something you can confidently discuss in a technical interview. If you wrote one Python script two years ago, do not list Python as a skill.
            </p>

            <h2>Projects: The Core of a CS Resume</h2>
            <p>
              For students and recent graduates, the projects section is arguably the most important part of your resume. This is where you demonstrate that you can actually build software, not just study theory. Include two to four projects, each with the project name, a one-line summary, the complete tech stack, and two to three bullet points describing your contributions and results. Choose projects that showcase different skills: one full-stack web application, one systems-level or algorithmic project, and one machine learning or data project creates a well-rounded profile.
            </p>

            <p>
              Strong CS project examples include a full-stack web application with user authentication, CRUD operations, and deployment; a command-line tool or developer utility that solves a real problem; a machine learning model that classifies, predicts, or generates content with measurable accuracy; an operating system component like a custom shell, memory allocator, or thread scheduler; or a mobile application with real users. For each project, quantify results: "Serves 500 daily active users," "Processes 10,000 records in under 2 seconds," "Achieves 92% classification accuracy on the test set."
            </p>

            <CTA />

            <h2>The GitHub Advantage</h2>
            <p>
              For computer science professionals, a well-maintained GitHub profile is as important as the resume itself. Pin your three to six best repositories. Each should have a comprehensive README file that includes a project description, screenshots or GIFs demonstrating the UI, installation and setup instructions, the tech stack with badges, and a section on what you learned or what you would improve. Clean code with consistent formatting, meaningful variable names, and modular architecture demonstrates professional coding standards. A GitHub contribution graph showing consistent activity — even a few commits per week — signals that you are actively coding outside of work or class.
            </p>

            <h2>Internships and Work Experience</h2>
            <p>
              If you have completed software engineering internships, these deserve detailed treatment. For each internship, include the company name, your title, dates, and three to five bullet points describing what you built and what impact it had. Use the formula: action verb plus technical detail plus measurable result. For example: "Developed an internal monitoring dashboard using React and Grafana that reduced incident detection time from 15 minutes to under 2 minutes, adopted by the entire SRE team of 12 engineers." Even non-technical work experience can be valuable if framed correctly — leadership, time management, and communication skills are all transferable.
            </p>

            <h2>Certifications and Competitive Programming</h2>
            <p>
              Include relevant certifications from platforms like AWS, Google Cloud, Coursera, or LeetCode. Competitive programming achievements are particularly valued in the CS job market: mention your ratings on Codeforces, LeetCode, or HackerRank, the number of problems solved, or any competition placements. These demonstrate algorithmic thinking and problem-solving speed — core skills that technical interviewers evaluate. An "Expert" rating on Codeforces or solving 500-plus LeetCode problems with a consistent streak is a powerful resume addition that immediately signals strong technical fundamentals.
            </p>

            <CTA />

            <h2>Tailoring Your Resume for Different CS Roles</h2>
            <p>
              Computer science is a broad field, and your resume should be tailored to the specific role you are targeting. For frontend engineering roles, emphasize React, CSS, accessibility, performance optimization, and user experience. For backend roles, highlight API design, databases, system design, and cloud infrastructure. For data science positions, focus on Python, pandas, scikit-learn, TensorFlow, and statistical analysis. For DevOps roles, emphasize Docker, Kubernetes, CI/CD pipelines, and cloud platforms. Review each job description carefully and adjust the order and emphasis of your skills and projects to match.
            </p>

            <h2>Common Mistakes CS Students Make</h2>
            <p>
              The most common mistakes include listing too many languages superficially instead of demonstrating depth in a few, using vague project descriptions without quantified outcomes, neglecting to deploy projects (a GitHub link without a live demo is far less impressive), omitting a GitHub or portfolio link entirely, using two-column or graphically complex templates that fail ATS parsing, and not tailoring the resume for each application. Another critical mistake is including irrelevant coursework or padding the skills section with technologies you cannot discuss in an interview. Honesty and specificity always beat breadth and exaggeration.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>Should I include my GitHub profile on a CS resume?</h3>
            <p>
              Yes, absolutely. A GitHub profile with clean, documented repositories is one of the strongest assets on a computer science resume. Pin your best projects, include README files with screenshots and setup instructions, and maintain a consistent contribution history. Recruiters and technical interviewers frequently check GitHub profiles to assess code quality and coding consistency.
            </p>

            <h3>How many projects should a CS student include on their resume?</h3>
            <p>
              Include two to four of your strongest, most relevant projects. Quality matters significantly more than quantity. Each project should demonstrate different skills — for example, one full-stack web app, one systems-level project, and one data science or machine learning project. Include the tech stack, your specific contributions, and measurable outcomes for each.
            </p>

            <h3>What is the best resume format for a computer science student?</h3>
            <p>
              Use a reverse-chronological, single-column format. Place education first if you are still in school or recently graduated. Follow with projects, technical skills, internships, and certifications. Keep it to one page. Use an ATS-friendly template with standard fonts and clear section headings. Avoid multi-column layouts, tables, and graphics that can confuse ATS parsers.
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

export default CSResume;
