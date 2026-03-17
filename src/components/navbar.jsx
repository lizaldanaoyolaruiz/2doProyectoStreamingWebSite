import { useState } from 'react';
import logo from '../assets/img/LOGO.jpg';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();
  
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMensaje, setErrorMensaje] = useState(''); 

  const userAuth = JSON.parse(localStorage.getItem("auth"));

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/");
    window.location.reload();
  }

  function handleLogin(e) {
    e.preventDefault(); 
    setErrorMensaje(''); 
    
    // USUARIOS DE NOSOTROS
    const usuariosValidos = [
      { email: 'octaviofernandez@10.com', password: 'octavio', nombre: 'Octavio Fernandez' },
      { email: 'santibrizuela@11.com', password: 'santiago', nombre: 'Santiago Brizuela' },
      { email: 'aldanaruiz@12.com', password: 'aldana', nombre: 'Aldana Ruiz' },
      { email: 'mauroseu@13.com', password: 'mauro', nombre: 'Mauro Seu' },
      { email: 'alejojose@14.com', password: 'alejo', nombre: 'Alejo Jose' }
    ];

    const usuarioEncontrado = usuariosValidos.find(
      (user) => user.email === email && user.password === password
    );

    if (usuarioEncontrado) {
      // Ahora guardamos el email y también el nombre del usuario encontrado
      localStorage.setItem("auth", JSON.stringify({ email: email, nombre: usuarioEncontrado.nombre }));
      window.location.reload(); 
    } else {
      setErrorMensaje("Email o contraseña incorrectos.");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img 
            src={logo} 
            alt="Logo de RollZine" 
            className="d-inline-block align-top logo-navbar"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContenido"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContenido">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Inicio
              </Link>
            </li>

            {!userAuth ? (
              <li className="nav-item position-relative">
                {!mostrarLogin ? (
                  <span 
                    className="nav-link text-white" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setMostrarLogin(true)}
                  >
                    Administrar
                  </span>
                ) : (
                  <div>
                    <form className="d-flex flex-column flex-lg-row align-items-center gap-2 mt-2 mt-lg-0" onSubmit={handleLogin}>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="form-control form-control-sm" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength={35} 
                        required
                      />
                      <input 
                        type="password" 
                        placeholder="Contraseña" 
                        className="form-control form-control-sm" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={20} 
                        required
                      />
                      <button type="submit" className="btn btn-outline-light btn-sm text-nowrap">
                        Iniciar sesión
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-sm text-white" 
                        onClick={() => {
                          setMostrarLogin(false);
                          setErrorMensaje(''); 
                        }}
                        style={{ padding: '0 5px' }}
                      >
                        ✖
                      </button>
                    </form>
                    {errorMensaje && (
                      <small className="text-danger position-absolute" style={{ bottom: '-20px', right: '0' }}>
                        {errorMensaje}
                      </small>
                    )}
                  </div>
                )}
              </li>
            ) : (          
              <li className="nav-item d-flex align-items-center gap-3">
                {/* Ahora lee el nombre en lugar del email */}
                <span className="text-white small d-none d-lg-block">
                  Hola, {userAuth.nombre}
                </span>
                <button 
                  className="btn btn-outline-danger btn-sm" 
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;