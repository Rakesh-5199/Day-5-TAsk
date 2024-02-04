const resume = {
    "name": "Rakesh.k",
    "contact": {
      "email": "Kr65921@gmail.com.com",
      "phone": "8072502391",
      "address": "32 vel nagar 5th street kosakulam madurai-2."
    },
    "summary": "Experienced and results-driven professional with a strong background in software development. Adept at collaborating with cross-functional teams to deliver high-quality solutions. Proven track record of successful project management and excellent problem-solving skills.",
    "education": [
      {
        "degree": "Bachelor of commerce",
        "college": "Yadava college",
        "year": 2018
      },
      {
        "degree": "Master of Bussiness Administration",
        "college": "Alagppa university",
        "year": 2021
      }
    ],
    "experience": [
      {
        "title": "nil",
        
        "responsibilities": [
          "Develop and maintain web applications using modern technologies.",
          "Collaborate with cross-functional teams to design and implement software solutions.",
          "Conduct code reviews and provide mentorship to junior team members.",
          "Participate in agile development processes to ensure timely project delivery."
        ]
      },
      {
        "title": "Junior Software Developer",
       
        "responsibilities": [
          "Assisted in the development of software applications.",
          "Troubleshooted and resolved software defects.",
          "Collaborated with senior developers to enhance coding skills."
        ]
      }
    ],
    "skills": [
      "Programming Languages: JavaScript, Python, Java",
      "Web Technologies: HTML, CSS, React, Node.js",
      "Database: MySQL, MongoDB",
      "Version Control: Git",
      "Project Management: Agile, Scrum",
      "Problem Solving: Analytical thinking, Troubleshooting"
    ],
    "certifications": [
      {
        "title": "Full Stack Developer",
       
        "year": 20224
      },
     
    ]
  };
console.log(resume);

  // Using for loop
console.log("Using for loop:");
for (let i = 0; i < Object.keys(resume).length; i++) {
  const key = Object.keys(resume)[i];
  const value = resume[key];
  console.log(${key}: ${JSON.stringify(value)});
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (const key in resume) {
  const value = resume[key];
  console.log(${key}: ${JSON.stringify(value)});
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (const [key, value] of Object.entries(resume)) {
  console.log(${key}: ${JSON.stringify(value)});
}

// Using forEach loop 
console.log("\nUsing forEach loop for arrays:");
resume.skills.forEach(skill => {
  console.log(Skill: ${skill});
});