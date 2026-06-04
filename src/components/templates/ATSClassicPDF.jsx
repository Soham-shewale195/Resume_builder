import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Times-Roman',
    fontSize: 10,
    lineHeight: 1.3,
    color: '#000000',
  },
  header: {
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 12,
    marginBottom: 4,
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: 9,
    color: '#333333',
  },
  contactItem: {
    marginHorizontal: 3,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
    marginBottom: 6,
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  itemSubtitle: {
    fontStyle: 'italic',
    fontSize: 10,
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 10,
  },
  bulletList: {
    paddingLeft: 10,
  },
  bulletItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
  },
  summary: {
    marginBottom: 12,
  },
  skillRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
  skillLabel: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
  }
});

const ATSClassicPDF = ({ personal, summary, experience, education, skills, projects, certifications, achievements }) => {
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
          <Text style={styles.name}>{personal?.fullName || 'Full Name'}</Text>
          {personal?.jobTitle && <Text style={styles.jobTitle}>{personal.jobTitle}</Text>}
          
          <View style={styles.contactInfo}>
            {personal?.email && <Text style={styles.contactItem}>{personal.email}</Text>}
            {personal?.phone && <Text style={styles.contactItem}>• {personal.phone}</Text>}
            {personal?.location && <Text style={styles.contactItem}>• {personal.location}</Text>}
            {personal?.linkedin && <Text style={styles.contactItem}>• {personal.linkedin.replace(/^https?:\/\//, '')}</Text>}
            {personal?.github && <Text style={styles.contactItem}>• {personal.github.replace(/^https?:\/\//, '')}</Text>}
            {personal?.portfolio && <Text style={styles.contactItem}>• {personal.portfolio.replace(/^https?:\/\//, '')}</Text>}
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
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 6 }}>
                <View style={styles.itemRow}>
                  <Text style={styles.itemTitle}>{exp.company} {exp.location && <Text style={{fontWeight: 'normal'}}>| {exp.location}</Text>}</Text>
                  <Text style={styles.itemDate}>
                    {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                  </Text>
                </View>
                <Text style={styles.itemSubtitle}>{exp.role}</Text>
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

        {/* Education */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 4 }}>
                <View style={styles.itemRow}>
                  <View>
                    <Text style={styles.itemTitle}>{edu.institution}</Text>
                    <Text>{edu.degree} {edu.field && `in ${edu.field}`}</Text>
                  </View>
                  <Text style={styles.itemDate}>
                    {edu.startYear} — {edu.endYear}
                  </Text>
                </View>
                {edu.cgpa && <Text style={{ fontSize: 9, color: '#333' }}>CGPA: {edu.cgpa}</Text>}
                {edu.achievements && <Text style={{ fontSize: 9, color: '#333' }}>{edu.achievements}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 6 }}>
                <View style={styles.itemRow}>
                  <Text style={styles.itemTitle}>
                    {proj.name} {proj.liveUrl && <Text style={{ fontWeight: 'normal', color: '#555' }}>| {proj.liveUrl}</Text>} {proj.githubUrl && <Text style={{ fontWeight: 'normal', color: '#555' }}>| GitHub</Text>}
                  </Text>
                  <Text style={styles.itemSubtitle}>{proj.techStack}</Text>
                </View>
                {proj.description && (
                  <View style={styles.bulletList}>
                    <View style={styles.bulletItem}>
                      <Text style={styles.bulletPoint}>-</Text>
                      <Text style={styles.bulletText}>{proj.description}</Text>
                    </View>
                  </View>
                )}
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
                <Text style={styles.skillLabel}>Technical Skills:</Text>
                <Text>{skills.technical.join(', ')}</Text>
              </View>
            )}
            {skills.tools?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Tools:</Text>
                <Text>{skills.tools.join(', ')}</Text>
              </View>
            )}
            {skills.soft?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Soft Skills:</Text>
                <Text>{skills.soft.join(', ')}</Text>
              </View>
            )}
            {skills.languages?.length > 0 && (
              <View style={styles.skillRow}>
                <Text style={styles.skillLabel}>Languages:</Text>
                <Text>{skills.languages.join(', ')}</Text>
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
                  <View key={cert.id} style={{ marginBottom: 4 }}>
                    <Text style={styles.itemTitle}>{cert.name}</Text>
                    <Text>{cert.issuer} {cert.date && `(${formatMonthYear(cert.date)})`}</Text>
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
                        <Text style={styles.bulletPoint}>-</Text>
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

export default ATSClassicPDF;
