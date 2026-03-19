import { useEffectEvent, useState } from "react";
import ModalMovie from "../components/Modal";
import Button from 'react-bootstrap/Button';
import ModalDeleteMovie from "../components/ModalDeleteMovie";

function AdminPage() {

    const [movies, setMovies] = useState([]);

    function getMovies() {
        const movies = JSON.parse(localStorage.getItem('movies'));
        if (!movies) {
            return;
        }
        setMovies(movies);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <ModalMovie
                buttonName='Agregar película'
                getMovies={getMovies}
            />

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Película</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Publicado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.name}</td>
                                <td>{movie.category}</td>
                                <td>{movie.description}</td>
                                <td>{movie.published}</td>
                                <td>
                                    <ModalMovie
                                        buttonName='E'
                                        getMovies={getMovies}
                                        id={movie.id}
                                    />
                                    <ModalDeleteMovie
                                        id={movie.id}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    )
}


export default AdminPage;