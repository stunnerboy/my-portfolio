/**
 * Portfolio Data — Rahul Kumar
 * LinkedIn: https://linkedin.com/in/stunner-boy
 * GitHub:   https://github.com/stunnerboy
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "Rahul Kumar",
    tagline: "AIML Student · AI Developer · Web Designer",
    bio: "Passionate developer from India, enthusiastic about HTML, CSS, JavaScript, and SQL. Currently exploring machine learning and full-stack development with a focus on AI-powered applications.",
    photo: "assets/profile1.jpeg",
    email: "stunnerboy489@gmail.com",
    linkedin: "https://linkedin.com/in/stunner-boy",
    github: "https://github.com/stunnerboy",
    location: "India",
    stats: {
      projects: "12",
      certificates: "15+",
      technologies: "8+",
      experience: "1+"
    }
  },

  about: {
    aiml: "AIML student at Rabindranath Tagore University, actively exploring machine learning and TensorFlow. Building AI-oriented web projects like numora.ai while strengthening foundations in Python and data-driven development.",
    robotics: "Built an Automatic Gate Control System using Arduino Mega, IR sensors, a servo motor, and BTS7960 motor driver. The prototype detects objects, opens a gate, controls DC motor movement, and closes automatically after a delay.",
    web: "Developed multiple responsive websites including The-DEFENDER (cybersecurity), Drone-view, and interactive JavaScript apps. Currently learning React through hands-on projects and modern full-stack development."
  },

  projects: [
    {
      id: 1,
      title: "Automatic Gate Control System",
      description: "Robotics prototype using Arduino Mega, IR sensor, servo motor, and BTS7960 motor driver. Detects objects, opens the gate, activates a DC motor, and auto-closes after a fixed delay.",
      category: "robotics",
      tags: ["Arduino", "IR Sensor", "Servo"],
      image: "assets/projects/robot-nav.jpg",
      github: "https://github.com/stunnerboy/BCCDM-mini-code",
      demo: null
    },
    {
      id: 2,
      title: "numora.ai",
      description: "AI-focused web project exploring intelligent applications and modern front-end development. Built with HTML and web technologies as part of my machine learning learning journey.",
      category: "aiml",
      tags: ["AI", "HTML", "Web App"],
      image: "assets/projects/cnn-classifier.jpg",
      github: "https://github.com/stunnerboy/numora.ai",
      demo: null
    },
    {
      id: 3,
      title: "The DEFENDER",
      description: "A cybersecure website designed with modern CSS and web best practices. Focused on security-conscious UI and clean, professional front-end architecture.",
      category: "web",
      tags: ["CSS", "Security", "HTML"],
      image: "assets/projects/web-dashboard.jpg",
      github: "https://github.com/stunnerboy/The-DEFENDER",
      demo: null
    },
    {
      id: 4,
      title: "Drone View Website",
      description: "A showcase website for drone enthusiasts to share and appreciate aerial photography and videography. Responsive layout built with HTML, CSS, and JavaScript.",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "assets/projects/drone-planner.jpg",
      github: "https://github.com/stunnerboy/Drone-view-website",
      demo: null
    },
    {
      id: 5,
      title: "Tic-Tac-Toe Game",
      description: "Interactive browser game built with HTML, CSS, and JavaScript to practice DOM manipulation, event handling, and core JavaScript concepts.",
      category: "web",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "assets/projects/ecommerce-ui.jpg",
      github: "https://github.com/stunnerboy/Tic-Tac-Toe-Game",
      demo: null
    },
    {
      id: 6,
      title: "Chai aur React",
      description: "React learning project following modern component-based development. Part of my journey into full-stack development and AI-integrated web applications.",
      category: "web",
      tags: ["React", "JavaScript", "Frontend"],
      image: "assets/projects/nlp-sentiment.jpg",
      github: "https://github.com/stunnerboy/chai-aur-react",
      demo: null
    },
    {
      id: 7,
      title: "CII Project",
      description: "Web development project built with HTML showcasing structured front-end design and practical implementation of modern web layout techniques.",
      category: "web",
      tags: ["HTML", "CSS", "Web Design"],
      image: "assets/projects/robot-arm.jpg",
      github: "https://github.com/stunnerboy/cii",
      demo: null
    },
    {
      id: 8,
      title: "IndiaSkills Platform",
      description: "Web project aligned with IndiaSkills initiatives, demonstrating responsive design and interactive user experience for skills-based competitions and events.",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "assets/projects/gan-art.jpg",
      github: "https://github.com/stunnerboy/indiaskills",
      demo: null
    }
  ],

  skills: [
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "TensorFlow", icon: "fas fa-brain", color: "#FF6F00" },
    { name: "Arduino", icon: "fas fa-microchip", color: "#00979D" },
    { name: "C++", icon: "fas fa-code", color: "#00599C" },
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "React JS", icon:"fa-brands fa-react", color: "#61DBFB" }
  ],

  skillCategories: {
    ml: ["Machine Learning", "TensorFlow", "Python", "AI Applications", "Data Analysis", "SQL"],
    robotics: ["Arduino Mega", "IR Sensors", "Servo Motors", "Motor Drivers", "Microcontrollers", "Gate Automation"],
    web: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Git & GitHub"]
  },

  experience: [
    {
      title: "AIML Student",
      organization: "Rabindranath Tagore University",
      date: "2026 – Present",
      description: "Pursuing Artificial Intelligence & Machine Learning. Coursework in ML fundamentals, web technologies, Python programming, and practical project development."
    },
    {
      title: "Robotics Project Developer",
      organization: "Personal Project · BCCDM Mini Code",
      date: "2025 – Present",
      description: "Designed and built an Automatic Gate Control System with Arduino Mega, IR sensing, servo actuation, and BTS7960 motor driver integration."
    },
    {
      title: "Web Developer",
      organization: "Self-Directed Projects",
      date: "2024 – Present",
      description: "Created 12+ repositories including The-DEFENDER, Drone-view-website, numora.ai, and React learning projects. Focus on clean UI and modern front-end practices."
    }
  ],

  education: [
    {
      title: "B.E. in Artificial Intelligence & Machine Learning",
      organization: "Rabindranath Tagore University",
      date: "2024 – 2028",
      description: "Relevant coursework: Machine Learning, Python, Web Technologies, Data Structures, Robotics Applications, and Software Development."
    },
    {
      title: "Intermediate in Science(Mathematics)",
      organization: "Mahesh Prashad Sinha Science College",
      date: "2022 – 2024",
      description: "Passed with 1st rank, gotted 390 marks."
    },
  ],

  certificates: [
    {
      title: "Data Science For Everyone",
      issuer: "NSDC",
      image: "assets/certs/DSFE cert.png",
      verifyUrl: "https://drive.google.com/file/d/1zxWH_XtX8cOe6PriN1EzuwWAgDKWFHfz/view?usp=drive_link",
      verified: true
    },
     {
      title: "Basics of Python",
      issuer: " Cambridge International Qualifications, UK",
      image: "assets/certs/python.png",
      verifyUrl: "https://drive.google.com/file/d/1wChA6vkwd8qm1wAJ5jzAG-LCVVBsxHgl/view?usp=drive_link",
      verified: false
    },
    {
      title: "Deloitte Cyber Job Simulation",
      issuer: "Deloitte · Forage",
      image: "assets/certs/Deloitte Cyber.png",
      verifyUrl: "https://drive.google.com/file/d/1wwl_LyhUUZrRh1-x3nU1Dpw6xRCFGFA-/view?usp=drive_link",
      verified: true
    },
    {
      title: "Generative AI Mastermind",
      issuer: "Outskill · moneycontrol",
      image: "assets/certs/generative Ai.png",
      verifyUrl: "https://drive.google.com/file/d/1jRADGkQIxGOc9H2ztr0-oAhCJXw6NozU/view?usp=drive_link",
      verified: true
    },
    {
      title: "# Shields Up: Cybersecurity Job Simulation",
      issuer: "AIG, New York Jobs CEO Council",
      image: "assets/certs/forage cybersecurity.png",
      verifyUrl: "https://drive.google.com/file/d/147_4kacl59_VkffEqFg4BQO6C1-LTfmv/view?usp=sharing",
      verified: true
    },
  ]
};
