import { useState } from 'react';
import '../styles/layoutComponent.css'

export const NavBarComponent = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          {/* Logo y eslogan */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="../resources/logo1.png"
              alt="Logo"
              className="navbar-logo me-2"
            />
            <span className="navbar-slogan fw-bold">RENTA FÁCIL, VIAJA FELIZ</span>
          </a>

          {/* Botón de menú hamburguesa */}
          <button
            className="navbar-toggler color-gold "
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          {/* Contenido del menú */}
          <div className={`button-isOpen collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <div className="col-12 d-flex justify-content-end">
              <a href="/register" className="btn btn-outline-light me-2">
                Crear Cuenta
              </a>
              <a href="/login" className="btn btn-light color-gold">
                Iniciar Sesión
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}
