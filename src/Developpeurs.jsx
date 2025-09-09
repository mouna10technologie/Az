import React, { useState, useEffect } from "react";
import "./Developpeurs.css";

function SkillCard({ skill, level, icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-name">{skill}</h3>
      <div className="skill-level">
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${level}%` }}></div>
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
    </div>
  );
}

function JobCard({ title, company, location, salary, type, skills, logo }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="company-logo">{logo}</div>
        <div className="job-info">
          <h3 className="job-title">{title}</h3>
          <p className="company-name">{company}</p>
          <div className="job-meta">
            <span className="job-location"> {location}</span>
            <span className="job-type"> {type}</span>
          </div>
        </div>
      </div>
      <div className="job-salary">{salary}</div>
      <div className="job-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
      <button className="apply-btn">Postuler</button>
    </div>
  );
}

function TechCarousel() {
  const [rotation, setRotation] = useState(0);

  const techLogos = [
    { name: "React", icon: "" },
    { name: "JavaScript", icon: "" },
    { name: "Python", icon: "" },
    { name: "Node.js", icon: "" },
    { name: "Vue.js", icon: "" },
    { name: "Angular", icon: "" },
    { name: "TypeScript", icon: "" },
    { name: "Docker", icon: "" },
    { name: "AWS", icon: "" },
    { name: "MongoDB", icon: "" },
    { name: "PostgreSQL", icon: "" },
    { name: "Git", icon: "" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tech-carousel-container">
      <div className="developer-avatars">
        <div className="dev-avatar male-dev">
          <img src="./public/Developeurs.png" alt="Male Developer" />
        </div>
        <div className="dev-avatar female-dev">
          <img src="./public/Creme.jpg" alt="Female Developer" />
        </div>
      </div>
      
      <div className="tech-carousel" style={{ transform: `rotateY(${rotation}deg)` }}>
        {techLogos.map((tech, index) => (
          <div
            key={index}
            className="tech-item"
            style={{
              transform: `rotateY(${(360 / techLogos.length) * index}deg) translateZ(200px)`
            }}
          >
            <div className="tech-logo">{tech.icon}</div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Developpeurs() {
  const skills = [
    { skill: "JavaScript", level: 95, icon: "" },
    { skill: "React", level: 90, icon: "" },
    { skill: "Python", level: 85, icon: "" },
    { skill: "Node.js", level: 88, icon: "" },
    { skill: "SQL", level: 82, icon: "" },
    { skill: "Git", level: 92, icon: "" },
    { skill: "Docker", level: 75, icon: "" },
    { skill: "AWS", level: 70, icon: "" }
  ];

  const jobs = [
    {
      title: "Développeur Full Stack Senior",
      company: "TechCorp",
      location: "Paris",
      salary: "55k - 70k €",
      type: "CDI",
      skills: ["React", "Node.js", "MongoDB"],
      logo: ""
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Lyon",
      salary: "40k - 50k €",
      type: "CDI",
      skills: ["Vue.js", "TypeScript", "CSS"],
      logo: ""
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Remote",
      salary: "60k - 80k €",
      type: "CDI",
      skills: ["Docker", "AWS", "Kubernetes"],
      logo: ""
    },
    {
      title: "Backend Developer",
      company: "DataFlow",
      location: "Marseille",
      salary: "45k - 60k €",
      type: "CDI",
      skills: ["Python", "Django", "PostgreSQL"],
      logo: ""
    },
    {
      title: "Mobile Developer",
      company: "AppMakers",
      location: "Toulouse",
      salary: "50k - 65k €",
      type: "CDI",
      skills: ["React Native", "Flutter", "Firebase"],
      logo: ""
    },
    {
      title: "Data Engineer",
      company: "BigData Inc",
      location: "Paris",
      salary: "65k - 85k €",
      type: "CDI",
      skills: ["Python", "Spark", "Kafka"],
      logo: ""
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="dev-hero-section">
        <div className="dev-hero-background">
          <div className="dev-hero-overlay"></div>
        </div>
        <div className="dev-hero-content">
          <div className="dev-hero-text">
            <span className="dev-hero-badge"> Développeurs</span>
            <h1 className="dev-hero-title">
              Rejoignez l'élite des <span className="gradient-text">développeurs</span>
            </h1>
            <p className="dev-hero-description">
              Découvrez les opportunités, compétences et outils essentiels pour exceller 
              dans le monde du développement logiciel moderne.
            </p>
            <div className="dev-hero-stats">
              <div className="dev-stat-item">
                <span className="dev-stat-number">1000+</span>
                <span className="dev-stat-label">Offres d'emploi</span>
              </div>
              <div className="dev-stat-item">
                <span className="dev-stat-number">50+</span>
                <span className="dev-stat-label">Technologies</span>
              </div>
              <div className="dev-stat-item">
                <span className="dev-stat-number">24/7</span>
                <span className="dev-stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="dev-hero-images">
            <div className="dev-floating-card dev-card-1">
              <img src="./public/Developeurs.png" alt="Developer 1" />
            </div>
            <div className="dev-floating-card dev-card-2">
              <img src="./public/Creme.jpg" alt="Developer 2" />
            </div>
            <div className="dev-floating-card dev-card-3">
              <img src="./public/Evolution.jpeg" alt="Tech" />
            </div>
          </div>
        </div>
      </section>

      {/* 3D Tech Carousel */}
      <section className="carousel-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technologies & Frameworks</h2>
            <p className="section-subtitle">Les outils qui façonnent l'avenir du développement</p>
          </div>
          <TechCarousel />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Compétences Essentielles</h2>
            <p className="section-subtitle">Les compétences que tout développeur doit maîtriser</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill.skill}
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Offres d'Emploi</h2>
            <p className="section-subtitle">Trouvez votre prochaine opportunité de carrière</p>
          </div>
          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                type={job.type}
                skills={job.skills}
                logo={job.logo}
              />
            ))}
          </div>
          <div className="jobs-cta">
            <button className="view-all-jobs">Voir toutes les offres</button>
          </div>
        </div>
      </section>

      {/* Developer Community */}
      <section className="community-section">
        <div className="container">
          <div className="community-content">
            <div className="community-text">
              <h2>Rejoignez notre communauté</h2>
              <p>Connectez-vous avec des milliers de développeurs, partagez vos projets et apprenez ensemble.</p>
              <div className="community-features">
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span>Forums de discussion</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span>Formations gratuites</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon"></span>
                  <span>Networking</span>
                </div>
              </div>
              <button className="join-community-btn">Rejoindre maintenant</button>
            </div>
            <div className="community-images">
              <div className="community-grid">
                <img src="./public/Developeurs.png" alt="Developer" className="community-img" />
                <img src="./public/Creme.jpg" alt="Developer" className="community-img" />
                <img src="./public/Evolution.jpeg" alt="Tech" className="community-img" />
                <img src="./public/Codeur-logo.png" alt="Logo" className="community-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Developpeurs;
