export const LayoutComponent = () => {



  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top px-3">
      <div className="container-fluid">
        {/* Logo y eslogan */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="../resources/logo.jpeg" // Reemplaza con la ruta de tu logo
            alt="Logo"
            className="me-2"
            style={{ height: "40px" }}
          />
          <span className="fw-bold">Eslogan de la Empresa</span>
        </a>

        {/* Botones de Crear Cuenta e Iniciar Sesión */}
        <div className="d-flex">
          <a href="/register" className="btn btn-outline-light me-2">
            Crear Cuenta
          </a>
          <a href="/login" className="btn btn-light">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </nav>
    </>
  )
}
