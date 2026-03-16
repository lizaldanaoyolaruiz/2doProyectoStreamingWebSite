import './destacada.css'
import { useNavigate } from 'react-router-dom'
import imagenConjuro from '../assets/conjuro.jpg'

function Destacada() {
  const navigate = useNavigate()

  const pelicula = {
    nombre: 'El Conjuro',
    descripcion:
      'Los investigadores paranormales Ed y Lorraine Warren ayudan a una familia aterrorizada por una presencia oscura en su casa.',
    imagen: imagenConjuro,
  }

  return (
    <section
      className="destacada"
      style={{ backgroundImage: `url(${pelicula.imagen})` }}
    >
      <div className="overlay">
        <div className="contenido">

          <h1>{pelicula.nombre}</h1>

          <p>{pelicula.descripcion}</p>

          <button 
                className="btn btn-danger btn-lg"
                onClick={() => navigate('/reproducir')}
          >Reproducir</button>

        </div>
      </div>
    </section>
  )
}

export default Destacada