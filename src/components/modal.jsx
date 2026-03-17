import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalProduct({buttonName}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCreateMovies(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    let currentMovies = JSON.parse(localStorage.getItem('movies'));
    if (!currentMovies) {
        currentMovies = [];
    }
    currentMovies.push(data);
    localStorage.setItem('movies', JSON.stringify(currentMovies));
    form.reset();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nueva película</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={(e) => handleCreateMovies(e)}>
                {/* <label>Codigo</label>
                <input type="number" name='id' required/> */}
                <label>Nombre:</label>
                <input type="text" name='name' required/>
                <label>Categoria:</label>
                <input type="text" name='category' required/>
                <label>Descripcion breve:</label>
                <input type="text" name='description' required/>
                <label>Disponible en el sitio</label>
                <input type="checkbox" name='published' required/>
                <button>Agregar película</button>
            </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProduct;