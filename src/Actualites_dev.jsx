import "./Actualites_dev.css";

function CarteActualités({ titre, description, image, date, category, readTime }) {
  return (
    <div className="article-card">
      <div className="card-image">
        <img src={image} alt={titre} />
        <div className="card-category">{category}</div>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="card-date">{date}</span>
          <span className="card-read-time">{readTime} min</span>
        </div>
        <h3 className="card-title">{titre}</h3>
        <p className="card-description">{description}</p>
        <button className="read-more-btn">Lire la suite</button>
      </div>
    </div>
  )
}

function Actualites_dev() {
  const articles = [
    {
      titre: "React 18 : Les nouvelles fonctionnalités révolutionnaires",
      description: "Découvrez les dernières innovations de React 18 incluant le Concurrent Rendering, Suspense amélioré et les nouvelles hooks qui transforment le développement frontend.",
      image: "./public/Evolution.jpeg",
      date: "15 Mars 2024",
      category: "Frontend",
      readTime: 5
    },
    {
      titre: "Intelligence Artificielle et Développement Web",
      description: "Comment l'IA transforme le développement web avec GitHub Copilot, ChatGPT et les nouveaux outils d'assistance au code qui révolutionnent notre façon de programmer.",
      image: "./public/Creme.jpg",
      date: "12 Mars 2024",
      category: "IA",
      readTime: 8
    },
    {
      titre: "TypeScript 5.0 : Performance et nouvelles syntaxes",
      description: "Explorez les améliorations majeures de TypeScript 5.0 avec de meilleures performances, de nouvelles syntaxes et une meilleure intégration avec les frameworks modernes.",
      image: "./public/Developeurs.png",
      date: "10 Mars 2024",
      category: "Backend",
      readTime: 6
    },
    {
      titre: "Next.js 14 et l'App Router : Guide complet",
      description: "Maîtrisez le nouvel App Router de Next.js 14 avec Server Components, streaming et les meilleures pratiques pour des applications ultra-performantes.",
      image: "./public/Evolution.jpeg",
      date: "8 Mars 2024",
      category: "Framework",
      readTime: 10
    },
    {
      titre: "DevOps 2024 : Docker, Kubernetes et CI/CD",
      description: "Les tendances DevOps incontournables : containerisation avancée, orchestration Kubernetes et pipelines CI/CD pour des déploiements automatisés.",
      image: "./public/Creme.jpg",
      date: "5 Mars 2024",
      category: "DevOps",
      readTime: 12
    },
    {
      titre: "Sécurité Web : Protéger vos applications en 2024",
      description: "Guide complet sur les vulnérabilités web actuelles, les meilleures pratiques de sécurité et les outils essentiels pour sécuriser vos applications.",
      image: "./public/Developeurs.png",
      date: "3 Mars 2024",
      category: "Sécurité",
      readTime: 7
    },
    {
      titre: "Progressive Web Apps : L'avenir du mobile",
      description: "Créez des PWA performantes avec Service Workers, Web App Manifest et les dernières APIs pour une expérience native sur tous les appareils.",
      image: "./public/Evolution.jpeg",
      date: "1 Mars 2024",
      category: "Mobile",
      readTime: 9
    },
    {
      titre: "GraphQL vs REST : Quelle API choisir en 2024 ?",
      description: "Comparaison détaillée entre GraphQL et REST API, leurs avantages, inconvénients et cas d'usage pour faire le bon choix architectural.",
      image: "./public/Creme.jpg",
      date: "28 Février 2024",
      category: "API",
      readTime: 8
    },
    {
      titre: "Micro-frontends : Architecture modulaire moderne",
      description: "Implémentez une architecture micro-frontends avec Module Federation, Single-SPA et les meilleures pratiques pour des applications scalables.",
      image: "./public/Developeurs.png",
      date: "25 Février 2024",
      category: "Architecture",
      readTime: 11
    }
  ];

  const featuredArticles = articles.slice(0, 3);
  const regularArticles = articles.slice(3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <img src="./public/Evolution.jpeg" alt="Tech News" className="hero-bg-image" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">🚀 Actualités Tech</span>
            <h1 className="hero-title">
              Restez à la pointe de la <span className="gradient-text">technologie</span>
            </h1>
            <p className="hero-description">
              Découvrez les dernières tendances, frameworks, outils et innovations 
              qui façonnent l'avenir du développement web et mobile.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50k+</span>
                <span className="stat-label">Lecteurs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Daily</span>
                <span className="stat-label">Updates</span>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="floating-card card-1">
              <img src="./public/Creme.jpg" alt="Tech 1" />
            </div>
            <div className="floating-card card-2">
              <img src="./public/Developeurs.png" alt="Tech 2" />
            </div>
            <div className="floating-card card-3">
              <img src="./public/Evolution.jpeg" alt="Tech 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Articles à la une</h2>
            <p className="section-subtitle">Les sujets les plus populaires cette semaine</p>
          </div>
          <div className="featured-grid">
            {featuredArticles.map((article, index) => (
              <div key={index} className="featured-card">
                <div className="featured-image">
                  <img src={article.image} alt={article.titre} />
                  <div className="featured-overlay">
                    <span className="featured-category">{article.category}</span>
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-meta">
                    <span>{article.date}</span>
                    <span>{article.readTime} min</span>
                  </div>
                  <h3>{article.titre}</h3>
                  <p>{article.description}</p>
                  <button className="featured-btn">Lire maintenant</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles Grid */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tous les articles</h2>
            <div className="filter-tabs">
              <button className="filter-tab active">Tous</button>
              <button className="filter-tab">Frontend</button>
              <button className="filter-tab">Backend</button>
              <button className="filter-tab">DevOps</button>
              <button className="filter-tab">IA</button>
            </div>
          </div>
          <div className="articles-grid">
            {regularArticles.map((article, index) => (
              <CarteActualités
                key={index}
                titre={article.titre}
                description={article.description}
                image={article.image}
                date={article.date}
                category={article.category}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Restez informé des dernières actualités</h2>
              <p>Recevez chaque semaine notre sélection d'articles tech directement dans votre boîte mail.</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Votre adresse email" />
              <button type="submit">S'abonner</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Actualites_dev;
