import useResumeStore from '../../store/resumeStore';

const ModernBlue = () => {
  const { personal, summary, experience, education, skills, projects, certifications, achievements } = useResumeStore();

  const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="flex bg-white text-slate-800 font-sans min-h-[1056px] w-full max-w-[816px] mx-auto shadow-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      {/* Left Column */}
      <div className="w-[35%] bg-[#1E3A5F] text-white p-8 flex flex-col">
        {/* Photo */}
        <div className="flex justify-center mb-6">
          {personal.photo ? (
            <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-[#2563EB]" />
          ) : (
            <div className="w-32 h-32 rounded-full bg-slate-700 border-4 border-[#2563EB] flex items-center justify-center text-3xl font-bold text-slate-400">
              {personal.fullName?.charAt(0) || 'U'}
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b border-slate-500 pb-2 uppercase tracking-wider">Contact</h2>
          <div className="space-y-3 text-sm text-slate-300">
            {personal.email && <div><span className="block font-semibold text-white">Email</span> {personal.email}</div>}
            {personal.phone && <div><span className="block font-semibold text-white">Phone</span> {personal.phone}</div>}
            {personal.location && <div><span className="block font-semibold text-white">Location</span> {personal.location}</div>}
            {personal.linkedin && <div><span className="block font-semibold text-white">LinkedIn</span> <a href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`} className="hover:text-white transition-colors">{personal.linkedin.replace(/^https?:\/\//, '')}</a></div>}
            {personal.github && <div><span className="block font-semibold text-white">GitHub</span> <a href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`} className="hover:text-white transition-colors">{personal.github.replace(/^https?:\/\//, '')}</a></div>}
            {personal.portfolio && <div><span className="block font-semibold text-white">Portfolio</span> <a href={personal.portfolio.startsWith('http') ? personal.portfolio : `https://${personal.portfolio}`} className="hover:text-white transition-colors">{personal.portfolio.replace(/^https?:\/\//, '')}</a></div>}
          </div>
        </div>

        {/* Skills */}
        {skills && (skills.technical?.length > 0 || skills.tools?.length > 0 || skills.soft?.length > 0) && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-500 pb-2 uppercase tracking-wider">Skills</h2>
            <div className="space-y-4 text-sm">
              {skills.technical?.length > 0 && (
                <div>
                  <div className="font-semibold text-white mb-1">Technical</div>
                  <div className="text-slate-300">{skills.technical.join(', ')}</div>
                </div>
              )}
              {skills.tools?.length > 0 && (
                <div>
                  <div className="font-semibold text-white mb-1">Tools</div>
                  <div className="text-slate-300">{skills.tools.join(', ')}</div>
                </div>
              )}
              {skills.soft?.length > 0 && (
                <div>
                  <div className="font-semibold text-white mb-1">Soft Skills</div>
                  <div className="text-slate-300">{skills.soft.join(', ')}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Languages */}
        {skills && skills.languages?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-500 pb-2 uppercase tracking-wider">Languages</h2>
            <div className="text-sm text-slate-300">
              {skills.languages.join(', ')}
            </div>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="w-[65%] bg-white p-8">
        
        {/* Header Name & Title */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tight">
            {personal.fullName || 'Full Name'}
          </h1>
          {personal.jobTitle && <h2 className="text-xl text-[#2563EB] font-medium">{personal.jobTitle}</h2>}
        </header>

        {/* Summary */}
        {summary && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center">
              <span className="w-1.5 h-6 bg-[#2563EB] mr-3 rounded-sm"></span> Profile
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#2563EB] mr-3 rounded-sm"></span> Experience
            </h3>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{exp.role}</h4>
                      <div className="text-[#2563EB] font-medium text-sm">{exp.company} {exp.location && <span className="text-slate-500 font-normal">| {exp.location}</span>}</div>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded font-medium whitespace-nowrap">
                      {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                    </span>
                  </div>
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="list-disc pl-5 text-sm text-slate-600 mt-2 space-y-1">
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
          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#2563EB] mr-3 rounded-sm"></span> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{edu.degree} {edu.field && `in ${edu.field}`}</h4>
                      <div className="text-[#2563EB] font-medium text-sm">{edu.institution}</div>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded font-medium whitespace-nowrap">
                      {edu.startYear} — {edu.endYear}
                    </span>
                  </div>
                  {edu.cgpa && <div className="text-sm text-slate-600 mt-1">CGPA: <span className="font-medium text-slate-700">{edu.cgpa}</span></div>}
                  {edu.achievements && <div className="text-sm text-slate-600 mt-1">{edu.achievements}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#2563EB] mr-3 rounded-sm"></span> Projects
            </h3>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-800 text-base">
                      {proj.name}
                    </h4>
                    <div className="flex gap-2 text-xs">
                      {proj.liveUrl && <a href={proj.liveUrl} className="text-[#2563EB] hover:underline">Live Link</a>}
                      {proj.githubUrl && <a href={proj.githubUrl} className="text-[#2563EB] hover:underline">GitHub</a>}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">{proj.techStack}</div>
                  {proj.description && (
                    <p className="text-sm text-slate-600 mt-1">{proj.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications & Achievements */}
        {((certifications && certifications.length > 0) || (achievements && achievements.length > 0)) && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#2563EB] mr-3 rounded-sm"></span> Achievements
            </h3>
            <div className="space-y-3">
              {certifications && certifications.length > 0 && certifications.map((cert) => (
                <div key={cert.id} className="text-sm">
                  <span className="font-bold text-slate-800">{cert.name}</span> <span className="text-slate-400 mx-1">•</span> <span className="text-slate-600">{cert.issuer}</span>
                  {cert.date && <span className="text-slate-500 ml-2">({formatMonthYear(cert.date)})</span>}
                </div>
              ))}
              {achievements && achievements.length > 0 && achievements.map((ach, idx) => {
                let text = typeof ach === 'string' ? ach : ach.title || ach.description;
                if (!text) return null;
                return (
                  <div key={idx} className="text-sm text-slate-600 flex items-start">
                    <span className="text-[#2563EB] mr-2">•</span> {text}
                  </div>
                );
              })}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ModernBlue;
