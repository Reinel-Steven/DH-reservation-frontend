import React from 'react'

export const MenuComponent = () => {
  return (
    <>
    <br></br>
    <div className="banner bg-light text-dark py-3 mt-5">
        <div className="container d-flex justify-content-center align-items-center flex-wrap">
          <a href="/categorias" className="btn btn-primary me-2 mb-2">Categorías</a>
          <form className="d-flex mb-2">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-primary" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </>
  )
}
