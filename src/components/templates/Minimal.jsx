import useResumeStore from '../../store/resumeStore';

const Minimal = () => {
  const { personal, summary, experience, education, skills, projects, certifications, achievements } = useResumeStore();

  const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-white text-gray-900 font-sans min-h-[1056px] w-full max-w-[816px] mx-auto shadow-sm p-12" style={{ fontFamily: 'Helvetica, Arial, sans-serif', lineHeight: 1.6 }}>
      
      {/* Header */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-light text-left tracking-tight mb-2">
          {personal.fullName || 'Full Name'}
        </h1>
        {personal.jobTitle && <h2 className="text-xl text-gray-500 font-light mb-4">{personal.jobTitle}</h2>}
        
        <div className="flex flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2 mt-4 font-light tracking-wide">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <a href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`} className="hover:text-gray-900 transition-colors">{personal.linkedin.replace(/^https?:\/\//, '')}</a>}
          {personal.github && <a href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`} className="hover:text-gray-900 transition-colors">{personal.github.replace(/^https?:\/\//, '')}</a>}
          {personal.portfolio && <a href={personal.portfolio.startsWith('http') ? personal.portfolio : `https://${personal.portfolio}`} className="hover:text-gray-900 transition-colors">{personal.portfolio.replace(/^https?:\/\//, '')}</a>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-10">
          <p className="text-sm text-gray-600 font-light max-w-3xl">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-10">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h4 className="font-medium text-base text-gray-900">{exp.role} <span className="text-gray-400 font-light ml-1">at {exp.company}</span></h4>
                  <span className="text-sm text-gray-400 font-light mt-1 sm:mt-0">
                    {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                  </span>
                </div>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="text-sm text-gray-600 font-light space-y-2 mt-3">
                    {exp.bullets.map((bullet, i) => {
                      if (!bullet || !bullet.trim()) return null;
                      return <li key={i} className="flex"><span className="text-gray-300 mr-3">-</span><span>{bullet.trim()}</span></li>;
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-10">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Projects</h3>
          <div className="space-y-6">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-medium text-base text-gray-900">
                    {proj.name}
                  </h4>
                  <div className="text-xs text-gray-400 font-light flex gap-3">
                    {proj.liveUrl && <a href={proj.liveUrl} className="hover:text-gray-900 transition-colors">Live</a>}
                    {proj.githubUrl && <a href={proj.githubUrl} className="hover:text-gray-900 transition-colors">GitHub</a>}
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-2">{proj.techStack}</div>
                {proj.description && (
                  <p className="text-sm text-gray-600 font-light">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-10">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <div>
                  <h4 className="font-medium text-base text-gray-900">{edu.degree} {edu.field && <span className="font-light">in {edu.field}</span>}</h4>
                  <div className="text-sm text-gray-500 font-light mt-1">{edu.institution}</div>
                  {edu.cgpa && <div className="text-sm text-gray-500 font-light">CGPA: {edu.cgpa}</div>}
                  {edu.achievements && <div className="text-sm text-gray-500 font-light mt-1">{edu.achievements}</div>}
                </div>
                <span className="text-sm text-gray-400 font-light mt-2 sm:mt-0">
                  {edu.startYear} — {edu.endYear}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills && (skills.technical?.length > 0 || skills.soft?.length > 0 || skills.languages?.length > 0 || skills.tools?.length > 0) && (
        <section className="mb-10">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Skills</h3>
          <div className="text-sm font-light text-gray-600 space-y-3">
            {skills.technical?.length > 0 && (
              <div className="flex"><span className="w-32 text-gray-400 shrink-0">Technical</span> <span>{skills.technical.join(', ')}</span></div>
            )}
            {skills.tools?.length > 0 && (
              <div className="flex"><span className="w-32 text-gray-400 shrink-0">Tools</span> <span>{skills.tools.join(', ')}</span></div>
            )}
            {skills.soft?.length > 0 && (
              <div className="flex"><span className="w-32 text-gray-400 shrink-0">Soft Skills</span> <span>{skills.soft.join(', ')}</span></div>
            )}
            {skills.languages?.length > 0 && (
              <div className="flex"><span className="w-32 text-gray-400 shrink-0">Languages</span> <span>{skills.languages.join(', ')}</span></div>
            )}
          </div>
        </section>
      )}

      {/* Certifications & Achievements */}
      {((certifications && certifications.length > 0) || (achievements && achievements.length > 0)) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {certifications && certifications.length > 0 && (
            <section>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-sm font-light">
                    <div className="text-gray-900 font-medium">
                      {cert.url ? <a href={cert.url} className="hover:text-gray-600 transition-colors">{cert.name}</a> : cert.name}
                    </div>
                    <div className="text-gray-500 mt-1">{cert.issuer} {cert.date && <span className="text-gray-400 ml-1">({formatMonthYear(cert.date)})</span>}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {achievements && achievements.length > 0 && (
            <section>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((ach, idx) => {
                  let text = typeof ach === 'string' ? ach : ach.title || ach.description;
                  if (!text) return null;
                  return (
                    <div key={idx} className="text-sm font-light text-gray-600 flex">
                      <span className="text-gray-300 mr-3">-</span><span>{text}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

    </div>
  );
};

export default Minimal;
