import { useState } from 'react';
import logo from '../assets/img/LOGO.jpg';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const userAuth = JSON.parse(localStorage.getItem("auth"));

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/login");
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
              <li className="nav-item">
                {!mostrarLogin ? (
                  <span 
                    className="nav-link text-white" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setMostrarLogin(true)}
                  >
                    Administrar
                  </span>
                ) : (
                  <form className="d-flex align-items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="form-control form-control-sm" 
                    />
                    <input 
                      type="password" 
                      placeholder="Contraseña" 
                      className="form-control form-control-sm" 
                    />
                    <button type="submit" className="btn btn-outline-light btn-sm text-nowrap">
                      Iniciar sesión
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-sm text-white" 
                      onClick={() => setMostrarLogin(false)}
                      style={{ padding: '0 5px' }}
                    >
                      ✖
                    </button>
                  </form>
                )}
              </li>
            ) : (          
              <li className="nav-item">
                <button 
                  className="btn btn-outline-danger btn-sm ms-lg-2" 
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