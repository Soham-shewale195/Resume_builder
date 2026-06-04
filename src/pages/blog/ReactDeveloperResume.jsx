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

const ReactDeveloperResume = () => {
  const title = 'React Developer Resume Guide with Examples (2025)';
  const description = 'Create a standout React developer resume with the right technical skills, project examples, and ATS-optimized keywords. Includes real-world examples and tips.';
  const canonical = 'https://resumeforge.com/blog/react-developer-resume';
  const datePublished = '2025-02-01';
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
      { '@type': 'Question', name: 'What skills should a React developer list on their resume?', acceptedAnswer: { '@type': 'Answer', text: 'Core skills include React.js, React Hooks, Redux or Zustand for state management, React Router, REST API integration, HTML5, CSS3, JavaScript ES6+, TypeScript, Git, and testing with Jest and React Testing Library. Include experience with build tools like Vite or Webpack and deployment platforms like Vercel or Netlify.' } },
      { '@type': 'Question', name: 'Should I include portfolio projects on a React developer resume?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Portfolio projects are essential, especially for junior developers. Include two to four projects with live deployment URLs and GitHub links. Describe the project purpose, your role, the tech stack, and measurable outcomes like user count, performance metrics, or features shipped.' } },
      { '@type': 'Question', name: 'How important is TypeScript for a React developer resume in 2025?', acceptedAnswer: { '@type': 'Answer', text: 'Very important. The majority of React job postings in 2025 either require or strongly prefer TypeScript experience. If you have used TypeScript in any project, make sure it appears in your skills section and is mentioned in your project descriptions.' } }
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
            <span className="text-slate-700 font-medium">React Developer Resume</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
            <span>Updated: June 2025</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              React.js has dominated the frontend development landscape for nearly a decade, and its position in 2025 is stronger than ever. Companies from early-stage startups to tech giants like Meta, Netflix, Airbnb, and Shopify rely on React to power their user interfaces, and the demand for skilled React developers continues to outpace supply. But a competitive job market means your resume needs to do more than just list "React" under skills — it needs to demonstrate depth of expertise, real project outcomes, and alignment with modern frontend engineering practices. This comprehensive guide walks you through every section of a React developer resume, from choosing the right skills to writing bullet points that pass both ATS filters and human scrutiny.
            </p>

            <div className="not-prose my-6 flex justify-center">
              <AdSlot slotId="BLOG_REACT_TOP" size="leaderboard" className="hidden md:flex" />
              <AdSlot slotId="BLOG_REACT_TOP_M" size="mobile-banner" className="flex md:hidden" />
            </div>

            <h2>Core Technical Skills Every React Developer Needs</h2>
            <p>
              Your technical skills section is the make-or-break area on a React developer resume. At a minimum, you need to demonstrate proficiency in React.js (including React Hooks, functional components, and the component lifecycle), JavaScript ES6+ (destructuring, async/await, modules, closures), and state management using Redux, Context API, or modern alternatives like Zustand or Jotai. Include React Router for navigation, and REST API or GraphQL integration for data fetching. On the styling side, mention CSS3, Tailwind CSS, styled-components, or CSS Modules — whichever you use most frequently.
            </p>

            <p>
              Beyond the core, modern React development in 2025 increasingly requires TypeScript, and you should include it prominently if you have any experience. Mention testing tools like Jest, React Testing Library, and Cypress for end-to-end testing. Under build tools, list Vite (the current standard), Webpack, or Next.js if you have worked with server-side rendering. Under DevOps and deployment, include Git, GitHub Actions, Vercel, Netlify, Docker, and AWS if applicable. Organize these into clear categories: Languages, Frameworks, State Management, Testing, Build Tools, and Deployment.
            </p>

            <h2>Writing a Professional Summary That Stands Out</h2>
            <p>
              Your summary should instantly communicate your React expertise level and a headline achievement. For an experienced developer: "Frontend engineer with 3 years of experience building performant, accessible React applications. Led the development of a customer-facing dashboard used by 50,000 monthly active users, achieving a 95 Lighthouse performance score and reducing page load time by 40% through code splitting and lazy loading. Proficient in TypeScript, Redux, and modern testing practices." For a junior or fresher: "Computer science graduate with strong React.js fundamentals demonstrated through four deployed portfolio projects, including a real-time collaborative task management app with 200 active users. Experienced in React Hooks, Zustand state management, and responsive design with Tailwind CSS."
            </p>

            <CTA />

            <h2>Structuring Your Work Experience</h2>
            <p>
              Each experience entry should follow the pattern: Job Title, Company Name, Location, and Date Range. Below that, write three to five bullet points using action verbs and measurable results. Here are strong examples of React developer bullet points that would impress hiring managers:
            </p>
            <p>
              "Architected and built a React-based analytics dashboard with TypeScript and D3.js, visualizing real-time data for 200+ enterprise clients and reducing report generation time from 15 minutes to under 10 seconds." "Implemented lazy loading and code splitting across a 150-component React application, reducing initial bundle size by 62% and improving First Contentful Paint from 3.8 seconds to 1.2 seconds." "Developed a shared component library using React, Storybook, and Tailwind CSS, adopted by three product teams and reducing UI development time across the organization by 30%."
            </p>

            <p>
              Each of these bullets tells a story: what you built, what technology you used, who benefited, and what the measurable impact was. Avoid generic bullets like "Developed frontend features using React" — they tell the recruiter nothing specific about your capabilities.
            </p>

            <h2>Showcasing Portfolio Projects</h2>
            <p>
              For React developers — especially those with less than two years of experience — portfolio projects can be more impactful than work experience. The key is choosing projects that demonstrate real-world complexity, not tutorial clones. Strong React portfolio projects include: a full-stack task management application with authentication, real-time updates, and drag-and-drop functionality; an e-commerce storefront with product filtering, cart management, and payment integration; a data visualization dashboard that fetches from an external API and renders interactive charts; or a developer tool like a Markdown editor, color palette generator, or code snippet manager.
            </p>

            <p>
              For each project, include the project name, a one-line description, the complete tech stack, a link to the deployed version, and a link to the GitHub repository. Write two to three bullet points describing your specific contributions. Always deploy your projects — a live URL is dramatically more impressive than just a GitHub link. Use platforms like Vercel or Netlify for free, instant deployment of React applications.
            </p>

            <CTA />

            <h2>ATS Keywords for React Developer Positions</h2>
            <p>
              Applicant Tracking Systems scan your resume for specific keywords before a human recruiter ever sees it. For React developer roles, the most important keywords include: React.js, React Hooks, Redux, Context API, TypeScript, JavaScript, ES6, JSX, Virtual DOM, Component Lifecycle, REST API, GraphQL, Next.js, Gatsby, CSS-in-JS, Tailwind CSS, Responsive Design, Accessibility, WCAG, Jest, React Testing Library, Cypress, Webpack, Vite, Babel, NPM, Yarn, Git, GitHub, CI/CD, Agile, Scrum, Code Review, Performance Optimization, Lighthouse, Web Vitals, PWA, and Service Workers.
            </p>

            <p>
              Do not simply dump these keywords into your resume. Instead, weave them naturally into your skills section, summary, and experience bullet points. For example, instead of just listing "Performance Optimization," write a bullet point that says "Improved Core Web Vitals scores by 40% through image optimization, code splitting, and implementing React.lazy for route-based loading." This naturally includes multiple keywords while demonstrating real expertise.
            </p>

            <h2>Education and Continuous Learning</h2>
            <p>
              List your degree, university, and graduation year. For React development, formal education is less important than demonstrated skills, but a computer science or related degree still provides a foundation. More importantly, include relevant certifications and courses: Meta's React certification on Coursera, freeCodeCamp's frontend certification, or any TypeScript or testing courses that demonstrate continuous learning. React evolves rapidly — showing that you actively learn new features and best practices signals that you will stay current in the role.
            </p>

            <h2>The Importance of a GitHub Profile</h2>
            <p>
              For frontend developers, your GitHub profile functions as an extended resume. Recruiters frequently visit the GitHub profiles listed on React developer resumes to assess code quality, consistency, and collaboration skills. Pin your best three to six repositories. Each pinned repository should have a detailed README with a project description, screenshots, setup instructions, and a link to the live deployment. Write clean, well-organized code with meaningful variable names, consistent formatting, and proper component structure. A GitHub contribution graph that shows consistent activity — even just a few commits per week — signals dedication and continuous improvement.
            </p>

            <CTA />

            <h2>Formatting Your React Developer Resume</h2>
            <p>
              Use a clean, ATS-friendly layout with clear section headings. ResumeForge's ATS Classic and Minimal templates are both excellent choices for developer resumes. Keep your resume to one page if you have less than five years of experience, and two pages maximum for senior developers. Use a professional font at 10 to 11 points. Include clickable hyperlinks for your GitHub profile, LinkedIn, portfolio website, and project deployment URLs. Save your resume as a PDF and name the file professionally: "FirstName_LastName_React_Developer_Resume.pdf."
            </p>

            <h2>Mistakes to Avoid</h2>
            <p>
              Do not list every npm package you have ever installed. Focus on frameworks and tools that represent real expertise. Do not claim proficiency in technologies you have only used in tutorials — technical interviews will expose this quickly. Do not ignore responsive design and accessibility in your project descriptions, as these are increasingly important hiring criteria. Do not submit the same generic resume to every company — tailor your keywords and project emphasis to match each specific job description. Finally, do not leave your portfolio projects undeployed. A broken or missing deployment link is worse than no link at all.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>What skills should a React developer list on their resume?</h3>
            <p>
              Core skills include React.js, React Hooks, Redux or Zustand for state management, React Router, REST API integration, HTML5, CSS3, JavaScript ES6+, TypeScript, Git, and testing with Jest and React Testing Library. Include experience with build tools like Vite or Webpack and deployment platforms like Vercel or Netlify.
            </p>

            <h3>Should I include portfolio projects on a React developer resume?</h3>
            <p>
              Absolutely. Portfolio projects are essential, especially for junior developers. Include two to four projects with live deployment URLs and GitHub links. Describe the project purpose, your role, the tech stack, and measurable outcomes like user count, performance metrics, or features shipped.
            </p>

            <h3>How important is TypeScript for a React developer resume in 2025?</h3>
            <p>
              Very important. The majority of React job postings in 2025 either require or strongly prefer TypeScript experience. If you have used TypeScript in any project, make sure it appears in your skills section and is mentioned in your project descriptions. Consider adding TypeScript to your existing projects if you have not already.
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

export default ReactDeveloperResume;
