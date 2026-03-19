import { nanoid } from 'nanoid';
import { func } from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMovie({ buttonName, getMovies, id }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movieToEdit, setMovieToEdit] = useState({})

    function handleCreateEditMovies(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        let currentMovies = JSON.parse(localStorage.getItem('movies'));
        if (id) {
            const editMovies = currentMovies.map((movie) => {
                if (movie.id === id) {
                    return {
                        ...movie,
                        ...data
                    };
                }
                return movie;
            });
            localStorage.setItem('movies', JSON.stringify(editMovies));
        } else {
            data.id = nanoid().slice(0, 6);
            currentMovies.push(data);
            localStorage.setItem('movies', JSON.stringify(currentMovies));
        }
        form.reset();
        getMovies();
        handleClose();
    }

    function handleEditMovie(idToEdit) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const movieFound = movies.find((movie) => movie.id === idToEdit);
        setMovieToEdit(movieFound);
    }

    useEffect(() => {
        if (id) {
            handleEditMovie(id);
        }
    }, [id])

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {buttonName}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{id ? 'Modificar' : 'Agregar nueva'} película{id && `: ${movieToEdit.name}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => handleCreateEditMovies(e)}>
                        {/* <label>Codigo</label>
                <input type="number" name='id' required/> */}
                        <label>Nombre:</label>
                        <input type="text" name='name' defaultValue={movieToEdit?.name} required />
                        <label>Categoria:</label>
                        <input type="text" name='category' defaultValue={movieToEdit?.category} required />
                        <label>Descripcion breve:</label>
                        <input type="text" name='description' defaultValue={movieToEdit?.description} required />
                        <label>Disponible en el sitio</label>
                        <input type="checkbox" name='published' defaultValue={movieToEdit?.published} required />
                        <button>{id ? 'Modificar' : 'Agregar nueva'} película</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalMovie;