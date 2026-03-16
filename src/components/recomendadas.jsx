function Recomendadas() {
  const peliculas = [
    {
      id: 1,
      titulo: 'El Conjuro',
      descripcion: 'Una familia es aterrorizada por una presencia oscura en su casa.',
      imagen: '',
    },
    {
      id: 2,
      titulo: 'Annabelle',
      descripcion: 'Una muñeca poseída desata una serie de sucesos paranormales.',
      imagen: '',
    },
    {
      id: 3,
      titulo: 'La Monja',
      descripcion: 'Un sacerdote investiga una presencia demoníaca en un convento.',
      imagen: '',
    },
    {
      id: 4,
      titulo: 'It',
      descripcion: 'Un grupo de chicos enfrenta a un ser maligno que toma forma de payaso.',
      imagen: '',
    },
    {
      id: 5,
      titulo: 'Insidious',
      descripcion: 'Una familia intenta salvar a su hijo de una dimensión oscura.',
      imagen: '',
    },
  ]

  return (
    <div className="container my-5">
      <h2 className="mb-4">Películas recomendadas</h2>

      <div id="carouselPeliculas" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded">

          {peliculas.map((pelicula, index) => (
            <div
              key={pelicula.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={pelicula.imagen}
                className="d-block w-100"
                alt={pelicula.titulo}
                style={{ height: '400px', objectFit: 'cover' }}
              />

              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h5>{pelicula.titulo}</h5>
                <p>{pelicula.descripcion}</p>
              </div>
            </div>
          ))}

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPeliculas"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPeliculas"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
}

export default Recomendadas