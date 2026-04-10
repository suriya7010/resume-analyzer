function analyzeResume(text) {
  const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "MySQL"];
  
  let foundSkills = [];
  let missingSkills = [];

  skills.forEach(skill => {
    if (text.toLowerCase().includes(skill.toLowerCase())) {
      foundSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  // Simple ATS score
  const atsScore = Math.round((foundSkills.length / skills.length) * 100);

  return {
    atsScore,
    foundSkills,
    missingSkills,
    suggestions: [
      "Add more relevant skills",
      "Improve project descriptions",
      "Use proper formatting"
    ]
  };
}

module.exports = analyzeResume;