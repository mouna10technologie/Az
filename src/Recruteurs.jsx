import "./Recruteurs.css";
function CarteRecruteurs1({ image, lien }) {
  return (
    <div className="div_reruteurs1">
      <a href={lien} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt="image des sites freelance"
          width="150px"
          height="150px"
        />
      </a>
    </div>
  );
}

function CarteRecruteurs({ titre, description }) {
  return (
    <div className="div_recruteurs">
      <h2>{titre}</h2>
      <h4>{description}</h4>
    </div>
  );
}
function Recruteurs() {
  let box2 = [
    {
      titre: "Plateformes de sourcing et publication d’offres",
      description:
        "Les plateformes de sourcing et de publication d’offres incluent LinkedIn Recruiter pour contacter directement des développeurs, des sites d’annonces comme Indeed, Monster et Glassdoor, GitHub pour identifier et évaluer les contributions des développeurs, Stack Overflow Jobs pour les profils tech spécialisés, et AngelList pour recruter dans les startups.",
    },

    {
      titre:
        "Outils de gestion du recrutement (ATS - Applicant Tracking Systems)",
      description:
        "Les ATS (Applicant Tracking Systems) comme Greenhouse, Lever, SmartRecruiters, Workable et Breezy HR permettent de centraliser les candidatures, gérer le pipeline de recrutement et intégrer des tests techniques.",
    },

    {
      titre: "Tests techniques et évaluation des compétences",
      description:
        "Les outils de tests techniques comme Codility, HackerRank, LeetCode, DevSkiller et Kaggle permettent d’évaluer les compétences des développeurs et data scientists via des exercices de codage et projets réels.",
    },

    {
      titre: " Outils de vidéo conférence",
      description:
        "Les outils de vidéoconférence comme Zoom, Microsoft Teams, Google Meet et Whereby sont utilisés pour réaliser des entretiens à distance.",
    },
    {
      titre: "Outils de communication et collaboration interne",
      description:
        "Les outils comme Slack et Microsoft Teams facilitent la communication et la collaboration entre recruteurs et équipes techniques.",
    },
  ];

  let box6 = [
    { image: "./public/Codeur-logo.png", lien: "https://www.codeur.com/" },

    { image: "./public/Freelancer.webp", lien: "https://www.freelancer.com/" },

    {
      image: "./public/Fiverr.png",
      lien: "https://www.fiverr.com/?msockid=0bd7572cab456563326442e2aa3c6404",
    },

    { image: "./public/Guru.jpg", lien: "https://www.guru.com/" },

    {
      image: "./public/Euros5.webp",
      lien: "https://comeup.com/en/5euros-devient-comeup",
    },

    {
      image: "./public/Le-studio.webp",
      lien: "https://www.bing.com/search?q=Le+Studio+Tech&FORM=HDRSC1",
    },

    { image: "./public/LeHibou.png", lien: "https://www.lehibou.com/" },
    { image: "Linkedin.webp", lien: "https://fr.linkedin.com/" },

    { image: "./public/Malt.webp", lien: "https://www.malt.fr/" },

    { image: "./public/Toptal.png", lien: "https://www.toptal.com/" },
    { image: "./public/Upwork.webp", lien: "https://www.upwork.com/" },
    {
      image: "./public/PeoplePerHour-logo1.png",
      lien: "https://www.peopleperhour.com/",
    },
    {
      image: "./public/Creme.jpg",
      lien: "https://www.cremedelacreme.io/?utm_source=chatgpt.com",
    },
  ];

  return (
    <>
      <div className="les_recruteurs">
        <img src="./public/Recruteur.jpg" alt="image sur les recruteurs " />
        <h1 className="h1_recruteurs">Les recruteurs</h1>
        <h3 className="h3_recruteurs">
          Le recruteur est un professionnel qui identifie et sélectionne les
          meilleurs profils pour répondre aux besoins d’une entreprise,
          notamment dans le secteur tech.
        </h3>
      </div>
      <div className="div_recruter">
        <p className="p_recruteur">
          Les outils couramment utilisés par les recruteurs pour le recrutement
          des développeurs
        </p>
      </div>
      <div className="Recruteurs">
        {box2.map((valeur, index3) => (
          <CarteRecruteurs
            key={index3}
            titre={valeur.titre}
            description={valeur.description}
          />
        ))}
      </div>
      <div>
        <p className="p_recruteurs1">
          Découvrez une sélection des sites de recrutement pour développeurs,
          ainsi que des plateformes freelance pour trouver des missions ou
          recruter des talents tech.
        </p>
      </div>
      <div className="Recruteurs1">
        {box6.map((valeur1, index7) => (
          <CarteRecruteurs1
            key={index7}
            image={valeur1.image}
            lien={valeur1.lien}
          />
        ))}
      </div>
    </>
  );
}
export default Recruteurs;
