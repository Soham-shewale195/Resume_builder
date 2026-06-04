import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.6,
    color: '#374151', // gray-700
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d1d5db', // gray-300
    paddingBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#111827', // gray-900
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  jobTitle: {
    fontSize: 12,
    color: '#6b7280', // gray-500
    marginBottom: 10,
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  contactItem: {
    fontSize: 9,
    color: '#6b7280',
    marginRight: 10,
  },
  summary: {
    fontSize: 9,
    color: '#4b5563', // gray-600
    marginBottom: 25,
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#9ca3af', // gray-400
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 15,
  },
  itemBlock: {
    marginBottom: 15,
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827', // gray-900
  },
  itemSubtitle: {
    fontSize: 11,
    color: '#9ca3af', // gray-400
    fontWeight: 'normal',
  },
  itemDate: {
    fontSize: 9,
    color: '#9ca3af',
  },
  bulletList: {
    marginTop: 4,
  },
  bulletItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
  },
  bulletPoint: {
    width: 12,
    fontSize: 9,
    color: '#d1d5db', // gray-300
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.5,
  },
  techStack: {
    fontSize: 8,
    color: '#9ca3af',
    marginBottom: 4,
  },
  projectLinkRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  projectLink: {
    fontSize: 8,
    color: '#6b7280',
    textDecoration: 'none',
    marginRight: 8,
  },
  skillRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 6,
  },
  skillLabel: {
    width: 80,
    fontSize: 9,
    color: '#9ca3af',
  },
  skillText: {
    flex: 1,
    fontSize: 9,
    color: '#4b5563',
  },
  achievementRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
  },
  certTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
  },
  certIssuer: {
    fontSize: 9,
    color: '#6b7280',
    marginTop: 2,
  }
});

const MinimalPDF = ({ personal, summary, experience, education, skills, projects, certifications, achievements }) => {
  const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personal.fullName || 'Full Name'}</Text>
          {personal.jobTitle && <Text style={styles.jobTitle}>{personal.jobTitle}</Text>}
          
          <View style={styles.contactInfo}>
            {personal.email && <Text style={styles.contactItem}>{personal.email}</Text>}
            {personal.phone && <Text style={styles.contactItem}>{personal.phone}</Text>}
            {personal.location && <Text style={styles.contactItem}>{personal.location}</Text>}
            {personal.linkedin && <Text style={styles.contactItem}>{personal.linkedin.replace(/^https?:\/\//, '')}</Text>}
            {personal.github && <Text style={styles.contactItem}>{personal.github.replace(/^https?:\/\//, '')}</Text>}
            {personal.portfolio && <Text style={styles.contactItem}>{personal.portfolio.replace(/^https?:\/\//, '')}</Text>}
          </View>
        </View>

        {/* Summary */}
        {summary && (
          <View style={styles.summary}>
            <Text>{summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            
            {experience.map((exp) => (
              <View key={exp.id} style={styles.itemBlock}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{exp.role} <Text style={styles.itemSubtitle}>at {exp.company}</Text></Text>
                  <Text style={styles.itemDate}>
                    {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                  </Text>
                </View>
                
                {exp.bullets && exp.bullets.length > 0 && (
                  <View style={styles.bulletList}>
                    {exp.bullets.map((bullet, i) => {
                      if (!bullet || !bullet.trim()) return null;
                      return (
                        <View key={i} style={styles.bulletItem}>
                          <Text style={styles.bulletPoint}>-</Text>
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

        {/* Projects */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            
            {projects.map((proj) => (
              <View key={proj.id} style={styles.itemBlock}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{proj.name}</Text>
                  <View style={styles.projectLinkRow}>
                    {proj.liveUrl && <Link src={proj.liveUrl} style={styles.projectLink}>Live</Link>}
                    {proj.githubUrl && <Link src={proj.githubUrl} style={styles.projectLink}>GitHub</Link>}
                  </View>
                </View>
                
                {proj.techStack && <Text style={styles.techStack}>{proj.techStack}</Text>}
                
                {proj.description && (
                  <Text style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.5, marginTop: 2 }}>{proj.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            
            {education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 12 }}>
                <View style={styles.itemHeader}>
                  <View>
                    <Text style={styles.itemTitle}>{edu.degree} {edu.field && <Text style={styles.itemSubtitle}>in {edu.field}</Text>}</Text>
                    <Text style={{ fontSize: 9, color: '#6b7280', marginTop: 2 }}>{edu.institution}</Text>
                  </View>
                  <Text style={styles.itemDate}>
                    {edu.startYear} — {edu.endYear}
                  </Text>
                </View>
                {edu.cgpa && <Text style={{ fontSize: 9, color: '#6b7280', marginTop: 2 }}>CGPA: {edu.cgpa}</Text>}
                {edu.achievements && <Text style={{ fontSize: 9, color: '#6b7280', marginTop: 2 }}>{edu.achievements}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills && (skills.technical?.length > 0 || skills.soft?.length > 0 || skills.languages?.length > 0 || skills.tools?.length > 0) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            
            {skills.technical?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Technical</Text>
                <Text style={styles.skillText}>{skills.technical.join(', ')}</Text>
              </View>
            )}
            {skills.tools?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Tools</Text>
                <Text style={styles.skillText}>{skills.tools.join(', ')}</Text>
              </View>
            )}
            {skills.soft?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Soft Skills</Text>
                <Text style={styles.skillText}>{skills.soft.join(', ')}</Text>
              </View>
            )}
            {skills.languages?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Languages</Text>
                <Text style={styles.skillText}>{skills.languages.join(', ')}</Text>
              </View>
            )}
          </View>
        )}

        {/* Certifications & Achievements */}
        {((certifications && certifications.length > 0) || (achievements && achievements.length > 0)) && (
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            
            {certifications && certifications.length > 0 && (
              <View style={{ width: achievements && achievements.length > 0 ? '48%' : '100%' }}>
                <Text style={styles.sectionTitle}>Certifications</Text>
                {certifications.map(cert => (
                  <View key={cert.id} style={{ marginBottom: 10 }}>
                    <Text style={styles.certTitle}>{cert.name}</Text>
                    <Text style={styles.certIssuer}>{cert.issuer} {cert.date && `(${formatMonthYear(cert.date)})`}</Text>
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
                      <View key={idx} style={styles.achievementRow}>
                        <Text style={styles.bulletPoint}>-</Text>
                        <Text style={styles.skillText}>{text}</Text>
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

export default MinimalPDF;
