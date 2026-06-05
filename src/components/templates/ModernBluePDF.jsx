import { Document, Page, Text, View, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';

// Note: React-PDF requires absolute or remote URLs for Images, or base64.
// If personal.photo is a base64 string or remote URL, it will work.



const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#FFFFFF',
  },
  leftColumn: {
    width: '35%',
    backgroundColor: '#1E3A5F',
    color: '#FFFFFF',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
  },
  rightColumn: {
    width: '65%',
    padding: 30,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#2563EB',
    objectFit: 'cover',
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#2563EB',
    backgroundColor: '#334155',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoPlaceholderText: {
    fontSize: 30,
    color: '#94a3b8',
    marginTop: 35,
  },
  leftSectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#64748b',
    paddingBottom: 4,
    marginBottom: 10,
  },
  contactItem: {
    marginBottom: 8,
  },
  contactLabel: {
    fontWeight: 'bold',
    fontSize: 9,
    marginBottom: 2,
  },
  contactText: {
    fontSize: 9,
    color: '#cbd5e1',
  },
  skillGroup: {
    marginBottom: 10,
  },
  skillLabel: {
    fontWeight: 'bold',
    fontSize: 9,
    marginBottom: 2,
  },
  skillText: {
    fontSize: 9,
    color: '#cbd5e1',
    lineHeight: 1.4,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: 'normal',
    marginBottom: 20,
  },
  sectionHeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionHeadingAccent: {
    width: 4,
    height: 16,
    backgroundColor: '#2563EB',
    marginRight: 8,
    borderRadius: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summaryText: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 1.5,
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  itemBlock: {
    marginBottom: 12,
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#2563EB',
    fontWeight: 'bold',
  },
  itemLocation: {
    fontSize: 10,
    color: '#64748b',
    fontWeight: 'normal',
  },
  itemDateContainer: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  itemDate: {
    fontSize: 8,
    color: '#64748b',
    fontWeight: 'bold',
  },
  bulletList: {
    marginTop: 4,
  },
  bulletItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
    color: '#64748b',
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: '#475569',
    lineHeight: 1.4,
  },
  projectLinkRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
  },
  projectLinkWrapper: {
    marginRight: 10,
  },
  projectLink: {
    fontSize: 8,
    color: '#2563EB',
    textDecoration: 'none',
  },
  techStack: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  achievementText: {
    fontSize: 9,
    color: '#475569',
  }
});

const ModernBluePDF = ({ personal, summary, experience, education, skills, projects, certifications, achievements }) => {
  const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Left Column */}
        <View style={styles.leftColumn}>
          
          <View style={styles.photoContainer}>
            {personal.photo ? (
              <Image src={personal.photo} style={styles.photo} />
            ) : (
              <View style={styles.photoPlaceholder}>
                <Text style={styles.photoPlaceholderText}>{personal.fullName?.charAt(0) || 'U'}</Text>
              </View>
            )}
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.leftSectionTitle}>Contact</Text>
            {personal.email && (
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactText}>{personal.email}</Text>
              </View>
            )}
            {personal.phone && (
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Phone</Text>
                <Text style={styles.contactText}>{personal.phone}</Text>
              </View>
            )}
            {personal.location && (
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Location</Text>
                <Text style={styles.contactText}>{personal.location}</Text>
              </View>
            )}
            {personal.linkedin && (
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>LinkedIn</Text>
                <Text style={styles.contactText}>{personal.linkedin.replace(/^https?:\/\//, '')}</Text>
              </View>
            )}
            {personal.github && (
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>GitHub</Text>
                <Text style={styles.contactText}>{personal.github.replace(/^https?:\/\//, '')}</Text>
              </View>
            )}
            {personal.portfolio && (
              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Portfolio</Text>
                <Text style={styles.contactText}>{personal.portfolio.replace(/^https?:\/\//, '')}</Text>
              </View>
            )}
          </View>

          {skills && (skills.technical?.length > 0 || skills.tools?.length > 0 || skills.soft?.length > 0) && (
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.leftSectionTitle}>Skills</Text>
              {skills.technical?.length > 0 && (
                <View style={styles.skillGroup}>
                  <Text style={styles.skillLabel}>Technical</Text>
                  <Text style={styles.skillText}>{skills.technical.join(', ')}</Text>
                </View>
              )}
              {skills.tools?.length > 0 && (
                <View style={styles.skillGroup}>
                  <Text style={styles.skillLabel}>Tools</Text>
                  <Text style={styles.skillText}>{skills.tools.join(', ')}</Text>
                </View>
              )}
              {skills.soft?.length > 0 && (
                <View style={styles.skillGroup}>
                  <Text style={styles.skillLabel}>Soft Skills</Text>
                  <Text style={styles.skillText}>{skills.soft.join(', ')}</Text>
                </View>
              )}
            </View>
          )}

          {skills && skills.languages?.length > 0 && (
            <View>
              <Text style={styles.leftSectionTitle}>Languages</Text>
              <Text style={styles.skillText}>{skills.languages.join(', ')}</Text>
            </View>
          )}

        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.name}>{personal.fullName || 'Full Name'}</Text>
            {personal.jobTitle && <Text style={styles.jobTitle}>{personal.jobTitle}</Text>}
          </View>

          {summary && (
            <View>
              <View style={styles.sectionHeadingContainer}>
                <View style={styles.sectionHeadingAccent} />
                <Text style={styles.sectionTitle}>Profile</Text>
              </View>
              <Text style={styles.summaryText}>{summary}</Text>
            </View>
          )}

          {experience && experience.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeadingContainer}>
                <View style={styles.sectionHeadingAccent} />
                <Text style={styles.sectionTitle}>Experience</Text>
              </View>
              
              {experience.map((exp) => (
                <View key={exp.id} style={styles.itemBlock}>
                  <View style={styles.itemHeader}>
                    <View style={{ width: '70%' }}>
                      <Text style={styles.itemTitle}>{exp.role}</Text>
                      <Text style={styles.itemSubtitle}>{exp.company} {exp.location && <Text style={styles.itemLocation}>| {exp.location}</Text>}</Text>
                    </View>
                    <View style={styles.itemDateContainer}>
                      <Text style={styles.itemDate}>
                        {formatMonthYear(exp.startDate)} — {exp.isPresent ? 'Present' : formatMonthYear(exp.endDate)}
                      </Text>
                    </View>
                  </View>
                  
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

          {education && education.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeadingContainer}>
                <View style={styles.sectionHeadingAccent} />
                <Text style={styles.sectionTitle}>Education</Text>
              </View>
              
              {education.map((edu) => (
                <View key={edu.id} style={styles.itemBlock}>
                  <View style={styles.itemHeader}>
                    <View style={{ width: '70%' }}>
                      <Text style={styles.itemTitle}>{edu.degree} {edu.field && `in ${edu.field}`}</Text>
                      <Text style={styles.itemSubtitle}>{edu.institution}</Text>
                    </View>
                    <View style={styles.itemDateContainer}>
                      <Text style={styles.itemDate}>
                        {edu.startYear} — {edu.endYear}
                      </Text>
                    </View>
                  </View>
                  {edu.cgpa && <Text style={{ fontSize: 9, color: '#475569', marginTop: 2 }}>CGPA: <Text style={{ fontWeight: 'bold', color: '#1e293b' }}>{edu.cgpa}</Text></Text>}
                  {edu.achievements && <Text style={{ fontSize: 9, color: '#475569', marginTop: 2 }}>{edu.achievements}</Text>}
                </View>
              ))}
            </View>
          )}

          {projects && projects.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeadingContainer}>
                <View style={styles.sectionHeadingAccent} />
                <Text style={styles.sectionTitle}>Projects</Text>
              </View>
              
              {projects.map((proj) => (
                <View key={proj.id} style={styles.itemBlock}>
                  <Text style={styles.itemTitle}>{proj.name}</Text>
                  
                  {(proj.liveUrl || proj.githubUrl) && (
                    <View style={styles.projectLinkRow}>
                      {proj.liveUrl ? <View style={styles.projectLinkWrapper}><Link src={proj.liveUrl} style={styles.projectLink}>Live Link</Link></View> : null}
                      {proj.githubUrl ? <Link src={proj.githubUrl} style={styles.projectLink}>GitHub</Link> : null}
                    </View>
                  )}
                  
                  {proj.techStack && <Text style={styles.techStack}>{proj.techStack}</Text>}
                  
                  {proj.description && (
                    <Text style={{ fontSize: 9, color: '#475569', lineHeight: 1.4 }}>{proj.description}</Text>
                  )}
                </View>
              ))}
            </View>
          )}

          {((certifications && certifications.length > 0) || (achievements && achievements.length > 0)) && (
            <View style={styles.section}>
              <View style={styles.sectionHeadingContainer}>
                <View style={styles.sectionHeadingAccent} />
                <Text style={styles.sectionTitle}>Achievements</Text>
              </View>
              
              <View style={styles.bulletList}>
                {certifications && certifications.length > 0 && certifications.map(cert => (
                  <View key={cert.id} style={styles.bulletItem}>
                    <Text style={[styles.bulletPoint, { color: '#2563EB' }]}>•</Text>
                    <Text style={styles.achievementText}>
                      <Text style={{ fontWeight: 'bold', color: '#1e293b' }}>{cert.name}</Text> - {cert.issuer} {cert.date && `(${formatMonthYear(cert.date)})`}
                    </Text>
                  </View>
                ))}
                
                {achievements && achievements.length > 0 && achievements.map((ach, idx) => {
                  let text = typeof ach === 'string' ? ach : ach.title || ach.description;
                  if (!text) return null;
                  return (
                    <View key={`ach-${idx}`} style={styles.bulletItem}>
                      <Text style={[styles.bulletPoint, { color: '#2563EB' }]}>•</Text>
                      <Text style={styles.achievementText}>{text}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}

        </View>
      </Page>
    </Document>
  );
};

export default ModernBluePDF;
