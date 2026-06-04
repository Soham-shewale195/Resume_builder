import useResumeStore from '../../store/resumeStore';

const StudentPro = () => {
  const { personal, summary, experience, education, skills, projects, certifications, achievements } = useResumeStore();

  const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const hasNoExperience = !experience || experience.length === 0;

  return (
    <div className="bg-white text-slate-800 font-sans min-h-[1056px] w-full max-w-[816px] mx-auto shadow-sm p-10" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Header */}
      <header className="mb-8 border-b-[3px] border-[#059669] pb-6 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-1 uppercase tracking-tight">
          {personal.fullName || 'Full Name'}
        </h1>
        
        {personal.jobTitle && <h2 className="text-lg font-medium text-slate-600 mb-2">{personal.jobTitle}</h2>}
        {hasNoExperience && !personal.jobTitle && (
          <div className="text-sm font-bold text-[#059669] bg-emerald-50 px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Entry Level / Fresher
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-600 font-medium">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.location && <span>• {personal.location}</span>}
          {personal.linkedin && <span>• <a href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`} className="text-[#059669] hover:underline">{personal.linkedin.replace(/^https?:\/\//, '')}</a></span>}
          {personal.github && <span>• <a href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`} className="text-[#059669] hover:underline">{personal.github.replace(/^https?:\/\//, '')}</a></span>}
          {personal.portfolio && <span>• <a href={personal.portfolio.startsWith('http') ? personal.portfolio : `https://${personal.portfolio}`} className="text-[#059669] hover:underline">{personal.portfolio.replace(/^https?:\/\//, '')}</a></span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-[#059669] uppercase tracking-wider mb-2">Profile</h3>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">{summary}</p>
        </section>
      )}

      {/* Education (Prominent for Student) */}
      {education && education.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-[#059669] uppercase tracking-wider mb-4 border-b border-emerald-100 pb-1">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-4 border-l-2 border-emerald-200">
                <div className="absolute w-2 h-2 bg-[#059669] rounded-full -left-[5px] top-1.5"></div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{edu.degree} {edu.field && <span className="text-[#059669]">in {edu.field}</span>}</h4>
                    <div className="text-slate-700 font-semibold">{edu.institution}</div>
                  </div>
                  <span className="text-sm font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                {edu.cgpa && (
                  <div className="text-sm mt-1 bg-emerald-50 text-[#059669] inline-block px-2 py-0.5 rounded font-bold border border-emerald-100">
                    CGPA: {edu.cgpa}
                  </div>
                )}
                {edu.achievements && <div className="text-sm text-slate-600 mt-2 italic">"{edu.achievements}"</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills (Grouped Pills) */}
      {skills && (skills.technical?.length > 0 || skills.soft?.length > 0 || skills.languages?.length > 0 || skills.tools?.length > 0) && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-[#059669] uppercase tracking-wider mb-4 border-b border-emerald-100 pb-1">Skills & Tools</h3>
          <div className="space-y-3 text-sm">
            {skills.technical?.length > 0 && (
              <div>
                <span className="font-bold text-slate-700 block mb-1">Technical:</span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.technical.map((skill, i) => (
                    <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.tools?.length > 0 && (
              <div>
                <span className="font-bold text-slate-700 block mb-1">Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft?.length > 0 && (
              <div>
                <span className="font-bold text-slate-700 block mb-1">Soft Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.soft.map((skill, i) => (
                    <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {skills.languages?.length > 0 && (
              <div>
                <span className="font-bold text-slate-700 block mb-1">Languages:</span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.languages.map((skill, i) => (
                    <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Projects (Before Experience) */}
      {projects && projects.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-[#059669] uppercase tracking-wider mb-4 border-b border-emerald-100 pb-1">Academic & Personal Projects</h3>
          <div className="space-y-6">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-900 text-base">
                    {proj.name}
                  </h4>
                  <div className="flex gap-2 text-xs font-bold uppercase">
                    {proj.liveUrl && <a href={proj.liveUrl} className="text-white bg-[#059669] px-2 py-1 rounded hover:bg-emerald-700 transition-colors">Live</a>}
                    {proj.githubUrl && <a href={proj.githubUrl} className="text-slate-700 bg-slate-200 px-2 py-1 rounded hover:bg-slate-300 transition-colors">GitHub</a>}
                  </div>
                </div>
                <div className="text-xs font-bold text-[#059669] mb-2">{proj.techStack}</div>
                {proj.description && (
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-[#059669] uppercase tracking-wider mb-4 border-b border-emerald-100 pb-1">Work Experience / Internships</h3>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-900 text-base">{exp.role} <span className="text-slate-500 font-medium">| {exp.company}</span></h4>
                  <span className="text-sm font-bold text-slate-500">
                    {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                  </span>
                </div>
                {exp.location && <div className="text-xs text-slate-500 mb-2 font-medium">{exp.location}</div>}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {exp.bullets.map((bullet, i) => {
                      if (!bullet || !bullet.trim()) return null;
                      return <li key={i}>{bullet.trim()}</li>;
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Achievements */}
      {((certifications && certifications.length > 0) || (achievements && achievements.length > 0)) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          {certifications && certifications.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-[#059669] uppercase tracking-wider mb-3 border-b border-emerald-100 pb-1">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <div className="font-bold text-slate-800">
                      {cert.url ? <a href={cert.url} className="text-[#059669] hover:underline">{cert.name}</a> : cert.name}
                    </div>
                    <div className="text-slate-600 font-medium">{cert.issuer} {cert.date && <span className="text-slate-400">| {formatMonthYear(cert.date)}</span>}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {achievements && achievements.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-[#059669] uppercase tracking-wider mb-3 border-b border-emerald-100 pb-1">Achievements</h3>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-2 font-medium">
                {achievements.map((ach, idx) => {
                  let text = typeof ach === 'string' ? ach : ach.title || ach.description;
                  if (!text) return null;
                  return <li key={idx}>{text}</li>;
                })}
              </ul>
            </section>
          )}
        </div>
      )}

    </div>
  );
};

export default StudentPro;
