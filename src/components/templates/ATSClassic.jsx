import useResumeStore from '../../store/resumeStore';

const ATSClassic = () => {
  const { personal, summary, experience, education, skills, projects, certifications, achievements } = useResumeStore();

  const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-white text-black p-8 md:p-12 font-serif min-h-[1056px] w-full max-w-[816px] mx-auto shadow-sm" style={{ letterSpacing: '0.01em' }}>
      
      {/* Header */}
      <header className="text-center mb-6 border-b-2 border-black pb-4">
        <h1 className="text-3xl font-bold uppercase mb-1">
          {personal.fullName}
        </h1>
        {personal.jobTitle && <h2 className="text-lg mb-2">{personal.jobTitle}</h2>}
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-700">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && (
            <>
              <span className="hidden sm:inline">•</span>
              <span>{personal.phone}</span>
            </>
          )}
          {personal.location && (
            <>
              <span className="hidden sm:inline">•</span>
              <span>{personal.location}</span>
            </>
          )}
          {personal.linkedin && (
            <>
              <span className="hidden sm:inline">•</span>
              <a href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`} className="hover:underline">{personal.linkedin.replace(/^https?:\/\//, '')}</a>
            </>
          )}
          {personal.github && (
            <>
              <span className="hidden sm:inline">•</span>
              <a href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`} className="hover:underline">{personal.github.replace(/^https?:\/\//, '')}</a>
            </>
          )}
          {personal.portfolio && (
            <>
              <span className="hidden sm:inline">•</span>
              <a href={personal.portfolio.startsWith('http') ? personal.portfolio : `https://${personal.portfolio}`} className="hover:underline">{personal.portfolio.replace(/^https?:\/\//, '')}</a>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-6">
          <h3 className="text-md font-bold uppercase border-b border-black mb-3">Professional Experience</h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-sm">{exp.company} {exp.location && <span className="font-normal">| {exp.location}</span>}</h4>
                  <span className="text-sm">
                    {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                  </span>
                </div>
                <div className="italic text-sm mb-1">{exp.role}</div>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc pl-5 text-sm space-y-1">
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

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-6">
          <h3 className="text-md font-bold uppercase border-b border-black mb-3">Education</h3>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-sm">{edu.institution}</h4>
                  <div className="text-sm">{edu.degree} {edu.field && `in ${edu.field}`}</div>
                  {edu.cgpa && <div className="text-sm">CGPA: {edu.cgpa}</div>}
                  {edu.achievements && <div className="text-xs mt-1 text-gray-700">{edu.achievements}</div>}
                </div>
                <span className="text-sm whitespace-nowrap ml-4">
                  {edu.startYear} — {edu.endYear}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h3 className="text-md font-bold uppercase border-b border-black mb-3">Projects</h3>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-sm">
                    {proj.name} 
                    {proj.liveUrl && <span className="font-normal text-gray-600"> | <a href={proj.liveUrl} className="hover:underline">{proj.liveUrl}</a></span>}
                    {proj.githubUrl && <span className="font-normal text-gray-600"> | <a href={proj.githubUrl} className="hover:underline">GitHub</a></span>}
                  </h4>
                  <span className="italic text-sm text-gray-600">{proj.techStack}</span>
                </div>
                {proj.description && (
                  <p className="text-sm mt-1">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills && (skills.technical?.length > 0 || skills.soft?.length > 0 || skills.languages?.length > 0 || skills.tools?.length > 0) && (
        <section className="mb-6">
          <h3 className="text-md font-bold uppercase border-b border-black mb-3">Skills</h3>
          <div className="text-sm space-y-1">
            {skills.technical?.length > 0 && (
              <div><span className="font-bold">Technical Skills:</span> {skills.technical.join(', ')}</div>
            )}
            {skills.tools?.length > 0 && (
              <div><span className="font-bold">Tools:</span> {skills.tools.join(', ')}</div>
            )}
            {skills.soft?.length > 0 && (
              <div><span className="font-bold">Soft Skills:</span> {skills.soft.join(', ')}</div>
            )}
            {skills.languages?.length > 0 && (
              <div><span className="font-bold">Languages:</span> {skills.languages.join(', ')}</div>
            )}
          </div>
        </section>
      )}

      {/* Certifications & Achievements */}
      {((certifications && certifications.length > 0) || (achievements && achievements.length > 0)) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {certifications && certifications.length > 0 && (
            <section>
              <h3 className="text-md font-bold uppercase border-b border-black mb-3">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <div className="font-bold">
                      {cert.url ? <a href={cert.url} className="hover:underline">{cert.name}</a> : cert.name}
                    </div>
                    <div>{cert.issuer} {cert.date && `(${formatMonthYear(cert.date)})`}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {achievements && achievements.length > 0 && (
            <section>
              <h3 className="text-md font-bold uppercase border-b border-black mb-3">Achievements</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {achievements.map((ach, idx) => {
                  if (typeof ach === 'string') {
                    return <li key={idx}>{ach}</li>;
                  }
                  return <li key={idx}>{ach.title || ach.description || JSON.stringify(ach)}</li>;
                })}
              </ul>
            </section>
          )}
        </div>
      )}

    </div>
  );
};

export default ATSClassic;
