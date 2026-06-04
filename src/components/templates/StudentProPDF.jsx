import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#1e293b', // slate-800
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#059669', // emerald-600
    paddingBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a', // slate-900
    textTransform: 'uppercase',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  jobTitle: {
    fontSize: 13,
    color: '#475569', // slate-600
    marginBottom: 8,
  },
  fresherBadge: {
    backgroundColor: '#ecfdf5', // emerald-50
    color: '#059669',
    fontSize: 9,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  contactItem: {
    fontSize: 9,
    color: '#475569',
  },
  contactIcon: {
    color: '#059669',
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 10,
    color: '#334155', // slate-700
    marginBottom: 20,
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#059669',
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#d1fae5', // emerald-100
    paddingBottom: 4,
    marginBottom: 12,
  },
  eduBlock: {
    marginBottom: 12,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#a7f3d0', // emerald-200
    position: 'relative',
  },
  eduDot: {
    position: 'absolute',
    left: -4,
    top: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#059669',
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  eduDegree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  eduField: {
    color: '#059669',
  },
  eduInst: {
    fontSize: 10,
    color: '#334155',
  },
  itemDate: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#64748b', // slate-500
    backgroundColor: '#f1f5f9', // slate-100
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  eduCgpa: {
    fontSize: 9,
    color: '#059669',
    backgroundColor: '#ecfdf5',
    borderWidth: 1,
    borderColor: '#d1fae5',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    marginTop: 4,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  eduAch: {
    fontSize: 9,
    color: '#475569',
    fontStyle: 'italic',
    marginTop: 4,
  },
  skillSection: {
    marginBottom: 15,
  },
  skillRow: {
    marginBottom: 6,
  },
  skillLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 2,
  },
  skillPillContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillPill: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0', // slate-200
    color: '#334155',
    fontSize: 9,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
    marginRight: 4,
  },
  projBlock: {
    backgroundColor: '#f8fafc', // slate-50
    borderWidth: 1,
    borderColor: '#f1f5f9', // slate-100
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  projTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  projLinks: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
  },
  projLinkLive: {
    backgroundColor: '#059669',
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  projLinkGithub: {
    backgroundColor: '#e2e8f0',
    color: '#334155',
    fontSize: 8,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  projTech: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#059669',
    marginTop: 4,
    marginBottom: 4,
  },
  projDesc: {
    fontSize: 9,
    color: '#475569',
    lineHeight: 1.4,
  },
  expBlock: {
    marginBottom: 12,
  },
  expTitleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  expRole: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  expComp: {
    fontSize: 11,
    color: '#64748b',
  },
  expLoc: {
    fontSize: 9,
    color: '#64748b',
    marginBottom: 4,
  },
  bulletList: {
    marginTop: 2,
  },
  bulletItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  bulletPoint: {
    width: 12,
    fontSize: 10,
    color: '#0f172a',
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: '#334155',
  },
  certTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  certIssuer: {
    fontSize: 9,
    color: '#475569',
  }
});

const StudentProPDF = ({ personal, summary, experience, education, skills, projects, certifications, achievements }) => {
  const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const hasNoExperience = !experience || experience.length === 0;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personal.fullName || 'Full Name'}</Text>
          
          {personal.jobTitle && <Text style={styles.jobTitle}>{personal.jobTitle}</Text>}
          {hasNoExperience && !personal.jobTitle && (
            <Text style={styles.fresherBadge}>Entry Level / Fresher</Text>
          )}
          
          <View style={styles.contactInfo}>
            {personal.email && <Text style={styles.contactItem}>{personal.email}</Text>}
            {personal.phone && <Text style={styles.contactItem}><Text style={styles.contactIcon}> • </Text>{personal.phone}</Text>}
            {personal.location && <Text style={styles.contactItem}><Text style={styles.contactIcon}> • </Text>{personal.location}</Text>}
            {personal.linkedin && <Text style={styles.contactItem}><Text style={styles.contactIcon}> • </Text>{personal.linkedin.replace(/^https?:\/\//, '')}</Text>}
            {personal.github && <Text style={styles.contactItem}><Text style={styles.contactIcon}> • </Text>{personal.github.replace(/^https?:\/\//, '')}</Text>}
            {personal.portfolio && <Text style={styles.contactItem}><Text style={styles.contactIcon}> • </Text>{personal.portfolio.replace(/^https?:\/\//, '')}</Text>}
          </View>
        </View>

        {/* Summary */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            
            {education.map((edu) => (
              <View key={edu.id} style={styles.eduBlock}>
                <View style={styles.eduDot} />
                
                <View style={styles.itemHeader}>
                  <View style={{ width: '70%' }}>
                    <Text style={styles.eduDegree}>{edu.degree} {edu.field && <Text style={styles.eduField}>in {edu.field}</Text>}</Text>
                    <Text style={styles.eduInst}>{edu.institution}</Text>
                  </View>
                  <Text style={styles.itemDate}>
                    {edu.startYear} — {edu.endYear}
                  </Text>
                </View>
                
                {edu.cgpa && <Text style={styles.eduCgpa}>CGPA: {edu.cgpa}</Text>}
                {edu.achievements && <Text style={styles.eduAch}>"{edu.achievements}"</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills && (skills.technical?.length > 0 || skills.soft?.length > 0 || skills.languages?.length > 0 || skills.tools?.length > 0) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills & Tools</Text>
            
            {skills.technical?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Technical:</Text>
                <View style={styles.skillPillContainer}>
                  {skills.technical.map((s, i) => <Text key={i} style={styles.skillPill}>{s}</Text>)}
                </View>
              </View>
            )}
            
            {skills.tools?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Tools:</Text>
                <View style={styles.skillPillContainer}>
                  {skills.tools.map((s, i) => <Text key={i} style={styles.skillPill}>{s}</Text>)}
                </View>
              </View>
            )}
            
            {skills.soft?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Soft Skills:</Text>
                <View style={styles.skillPillContainer}>
                  {skills.soft.map((s, i) => <Text key={i} style={styles.skillPill}>{s}</Text>)}
                </View>
              </View>
            )}
            
            {skills.languages?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Languages:</Text>
                <View style={styles.skillPillContainer}>
                  {skills.languages.map((s, i) => <Text key={i} style={styles.skillPill}>{s}</Text>)}
                </View>
              </View>
            )}
          </View>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Academic & Personal Projects</Text>
            
            {projects.map((proj) => (
              <View key={proj.id} style={styles.projBlock}>
                <View style={styles.itemHeader}>
                  <Text style={styles.projTitle}>{proj.name}</Text>
                  <View style={styles.projLinks}>
                    {proj.liveUrl && <Link src={proj.liveUrl} style={styles.projLinkLive}>Live</Link>}
                    {proj.githubUrl && <Link src={proj.githubUrl} style={styles.projLinkGithub}>GitHub</Link>}
                  </View>
                </View>
                
                {proj.techStack && <Text style={styles.projTech}>{proj.techStack}</Text>}
                
                {proj.description && <Text style={styles.projDesc}>{proj.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience / Internships</Text>
            
            {experience.map((exp) => (
              <View key={exp.id} style={styles.expBlock}>
                <View style={styles.expTitleRow}>
                  <Text style={styles.expRole}>{exp.role} <Text style={styles.expComp}>| {exp.company}</Text></Text>
                  <Text style={styles.itemDate}>
                    {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                  </Text>
                </View>
                
                {exp.location && <Text style={styles.expLoc}>{exp.location}</Text>}
                
                {exp.bullets && exp.bullets.length > 0 && (
                  <View style={styles.bulletList}>
                    {exp.bullets.map((bullet, i) => {
                      if (!bullet || !bullet.trim()) return null;
                      return (
                        <View key={i} style={styles.bulletItem}>
                          <Text style={styles.bulletPoint}>•</Text>
                          <Text style={styles.bulletText}>{bullet.trim()}</Text>
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Certifications & Achievements */}
        {((certifications && certifications.length > 0) || (achievements && achievements.length > 0)) && (
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            
            {certifications && certifications.length > 0 && (
              <View style={{ width: achievements && achievements.length > 0 ? '48%' : '100%' }}>
                <Text style={styles.sectionTitle}>Certifications</Text>
                {certifications.map(cert => (
                  <View key={cert.id} style={{ marginBottom: 8 }}>
                    <Text style={styles.certTitle}>{cert.name}</Text>
                    <Text style={styles.certIssuer}>{cert.issuer} {cert.date && `| ${formatMonthYear(cert.date)}`}</Text>
                  </View>
                ))}
              </View>
            )}

            {achievements && achievements.length > 0 && (
              <View style={{ width: certifications && certifications.length > 0 ? '48%' : '100%' }}>
                <Text style={styles.sectionTitle}>Achievements</Text>
                <View style={styles.bulletList}>
                  {achievements.map((ach, idx) => {
                    let text = typeof ach === 'string' ? ach : ach.title || ach.description;
                    if (!text) return null;
                    return (
                      <View key={idx} style={styles.bulletItem}>
                        <Text style={styles.bulletPoint}>•</Text>
                        <Text style={styles.bulletText}>{text}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            )}

          </View>
        )}

      </Page>
    </Document>
  );
};

export default StudentProPDF;
