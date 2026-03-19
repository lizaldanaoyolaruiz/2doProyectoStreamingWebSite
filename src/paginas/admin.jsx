import { useEffectEvent, useState } from "react";
import ModalProduct from "../components/Modal";

function AdminPage() {

    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        function getMovies() {
            const movies = JSON.parse(localStorage.getItem('movies'));
            if (!movies) {
                return;
            }
            setMovies(movies);
        }
        getMovies();
    }, [show]);

    return (
        <>
            <ModalProduct
                buttonName='Agregar película'
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    )
}


export default AdminPage;