export const skillSuggestions = {
  "React Developer": ["React", "JavaScript", "TypeScript", "Redux", "Tailwind CSS", "Next.js", "HTML", "CSS", "Git", "REST APIs"],
  "Frontend Developer": ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "SASS", "Webpack", "Responsive Design", "Git", "Figma"],
  "Backend Developer": ["Node.js", "Python", "Java", "SQL", "MongoDB", "Express", "Docker", "REST APIs", "AWS", "Git"],
  "Full Stack Developer": ["JavaScript", "React", "Node.js", "Python", "SQL", "MongoDB", "Docker", "AWS", "Git", "TypeScript"],
  "Software Engineer": ["Python", "Java", "C++", "JavaScript", "SQL", "Git", "Data Structures", "Algorithms", "Docker", "AWS"],
  "Data Scientist": ["Python", "SQL", "R", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "TensorFlow", "Tableau", "Statistics"],
  "UI/UX Designer": ["Figma", "Sketch", "Adobe XD", "Wireframing", "Prototyping", "User Research", "UI Design", "UX Design", "HTML", "CSS"],
  "Product Manager": ["Product Strategy", "Agile", "Scrum", "Roadmapping", "Jira", "User Interviews", "Data Analysis", "A/B Testing", "Communication", "Leadership"]
};

export const getSkillSuggestions = (jobTitle) => {
  if (!jobTitle) return [];

  // Find a matching key that is included in the job title (case insensitive)
  const normalizedTitle = jobTitle.toLowerCase();

  for (const [title, skills] of Object.entries(skillSuggestions)) {
    if (normalizedTitle.includes(title.toLowerCase())) {
      return skills;
    }
  }

  return [];
};
