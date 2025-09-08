import "./IA.css";
function CarteAi({ titre1, description1 }) {
  return (
    <div className="div_ai">
      <h2>{titre1}</h2>
      <p>{description1}</p>
    </div>
  );
}

function CarteIa({ titre }) {
  return (
    <div className="div_ia">
      <h2>{titre}</h2>
    </div>
  );
}
function IA() {
  let box4 = [
    {
      titre: "Analyse rapide et ciblée des candidatures",
    },

    {
      titre: "Identification des meilleurs profils",
    },

    {
      titre: "Automatisation des étapes répétitives",
    },
  ];

  let box5 = [
    {
      titre1: "IA générative (Generative AI)",
      description1:
        "L’IA générative assiste les développeurs en automatisant la création, la complétion et la traduction de code.",
    },

    {
      titre1: "IA pour l’analyse statique et le débogage",
      description1:
        "L’IA pour l’analyse statique et le débogage détecte automatiquement les erreurs, vulnérabilités et inefficacités dans le code, tout en proposant des améliorations.",
    },

    {
      titre1: "IA pour l’optimisation et la performance",
      description1:
        "L’IA pour l’optimisation améliore les performances du code et de l’infrastructure, tandis que l’IA conversationnelle assiste les développeurs en répondant à leurs questions et en expliquant le code en temps réel.",
    },
    {
      titre1: "IA conversationnelle (chatbots et assistants intelligents)",
      description1:
        "L’IA conversationnelle aide les développeurs en répondant à leurs questions, en expliquant du code et en facilitant l’accès à la documentation.",
    },
    {
      titre1: "IA pour les tests automatisés",
      description1:
        "L’IA pour les tests automatisés génère et exécute des tests logiciels afin de détecter bugs, régressions et erreurs en production.",
    },
    {
      titre1: "IA pour la gestion de projet et DevOps",
      description1:
        "L’IA pour la gestion de projet et le DevOps automatise la planification, le suivi des tâches et l’exécution intelligente des workflows CI/CD.",
    },
    {
      titre1: "IA pour l’apprentissage des développeurs",
      description1:
        "Plateformes comme LeetCode avec IA, Exercism AI mentor, ou Kaggle Notebooks avec assistant AI peuvent accélérer l’apprentissage des concepts de programmation.",
    },
  ];

  return (
    <>
      <div className="intelligenceArtificielle">
        <img
          className="image_ai"
          alt="image sur l'intelligence artificielle"
          src="./public/ia.jpeg"
        />
        <h1 className="h1_ia">L’intelligence artificielle</h1>
        <h3 className="h3_ai">
          L’intelligence artificielle facilite le recrutement en analysant
          rapidement les CV, en identifiant les meilleurs profils et en
          automatisant certaines étapes, ce qui rend le processus plus rapide et
          efficace. Cependant, elle pose aussi des enjeux éthiques, notamment
          sur la transparence et la protection des données des candidats.
        </h3>
      </div>
      <div className="div_ai1">
        <p className="p_ia">
          le rôle de l’intelligence artificielle dans le recrutement
        </p>
      </div>
      <div className="Ia">
        {box4.map((valeur, index5) => (
          <CarteIa key={index5} titre={valeur.titre} />
        ))}
      </div>
      <div>
        <p className="p_ia1">
          Les types d’IA qui peuvent faciliter le travail des développeurs
        </p>
      </div>
      <div className="Ia1">
        {box5.map((valeur1, index6) => (
          <CarteAi
            key={index6}
            titre1={valeur1.titre1}
            description1={valeur1.description1}
          />
        ))}
      </div>
    </>
  );
}
export default IA;
