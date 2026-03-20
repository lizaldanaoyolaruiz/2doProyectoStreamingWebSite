import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function getMovies() {
            const movies = JSON.parse(localStorage.getItem('movies'));
            if (movies) {
                setMovies(movies);
                return;
            }
        }
        getMovies();
    }, []);

    return (
            movies.length === 0 ? 
            <p>No hay películas</p> :
            //CATEGORIA, ya enlazada con el CRUD
            (
                movies.map((movie) => (
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>{movie.name}</Card.Title>
                        <Card.Text>
                          {movie.description}
                          <span>{movie.category}</span>
                        </Card.Text>
                        <Button variant="primary" onClick={ () => navigate(`/movie/${movie.id}`)}>Ver pelicula</Button>
                      </Card.Body>
                    </Card>
                ))
            )
    )
}

export default HomePage;