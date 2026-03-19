import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalDeleteMovie({ id }) {

    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleDelete(id) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const newMovies = movies.filter((movie) => movie.id !== id); 
        localStorage.setItem('movies', JSON.stringify(newMovies));
        handleShow();
    }

    useEffect(() => {
        function getMoviesToDelete() {
            const movies = JSON.parse(localStorage.getItem('movies'));
            const movieFound = movies.find((movie) => movie.id === id);
            setMovie(movieFound)
        }
        getMoviesToDelete();
    }, [])


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                B
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar Pelicula: {movie.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button onClick={handleDelete}>SI</button>
                    <button onClick={handleClose}>NO</button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalDeleteMovie;