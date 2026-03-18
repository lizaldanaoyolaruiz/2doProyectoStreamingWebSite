import { useEffect, useState } from "react";
import "../styles/home.css";


const featuredMovies = [

  {
    id: 2,
    title: "AVENGERS: ENDGAME",
    description:
      "Después de los eventos devastadores causados por Thanos, los Vengadores restantes deben reunirse para restaurar el equilibrio del universo.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "BATMAN",
    description:
      "Bruce Wayne regresa para proteger Gotham de una nueva amenaza que pone en riesgo a toda la ciudad.",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "INTERSTELLAR",
    description:
      "Un grupo de exploradores viaja más allá de nuestra galaxia en busca de un nuevo hogar para la humanidad.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
  },
];

const movies = [
  
  {
    id: 1,
    title: "Batman",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 2,
    title: "Avatar",
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 3,
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 4,
    title: "Dune",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    id: 5,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 6,
    title: "Spider-Man",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    
  },
];

export default function Home() {
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeMovie = featuredMovies[currentMovie];

  return (
    <div className="home">
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${activeMovie.image})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">Película destacada</span>

            <h1>{activeMovie.title}</h1>

            <p>{activeMovie.description}</p>

            <div className="hero-buttons">
              <button className="btn-primary">▶ Ver ahora</button>
              <button className="btn-secondary">ℹ Más información</button>
            </div>

            <div className="hero-dots">
              {featuredMovies.map((movie, index) => (
                <span
                  key={movie.id}
                  className={currentMovie === index ? "dot active" : "dot"}
                  onClick={() => setCurrentMovie(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PELÍCULAS POPULARES */}
      
      <section className="movie-section">
        <div className="section-header">
          <h2>Películas populares</h2>
        </div>

        <div className="movies">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <div className="movie-image">
                <img src={movie.image} alt={movie.title} />
              </div>

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <button>Ver más</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}