import { useState } from 'react';
import '../styles/layoutComponent.css'
import { Button } from '@mui/material';

export const LayoutComponent = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
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
            className="navbar-toggler color-gold"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido del menú */}
          <div className={`button-isOpen collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <div className="container d-flex justify-content-end">
              <a href="/register" className="btn btn-outline-light me-2">
                Crear Cuenta
              </a>
              <a href="/login" className="btn btn-light color-gold">
                Iniciar Sesión
              </a>
            </div>
          </div>
        </div>
        {/* Buscador */}
      <div className="navbar-bottom ">
        <div className="card-search" >
          <div className="row g-3">
            {/* Select de categorías */}
            <div className="col-md-2">
              <select className="form-select">
                <option value="">Categoría</option>
                <option value="1">Autos</option>
                <option value="2">Camionetas</option>
                <option value="3">Motos</option>
                <option value="4">Bicicletas</option>
              </select>
            </div>

            {/* Input de búsqueda por texto */}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre..."
              />
            </div>

            {/* Selector de fecha */}
            <div className="col-md-2">
              <input type="date" className="form-control" />
            </div>
            {/* Boton Buscar */}
            <div className="col-md-2">
              <button type="date" className="form-control" >Buscar</button>
            </div>
          </div>
        </div>
      </div>
      </nav>

      
    </>
  )
}
