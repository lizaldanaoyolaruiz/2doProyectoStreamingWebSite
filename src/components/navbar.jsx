import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();


  const userAuth = JSON.parse(localStorage.getItem("auth"));

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        
        <Link className="navbar-brand fw-bold" to="/">
          RollZine
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
                <Link className="nav-link text-white" to="/login">
                  Administrar
                </Link>
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