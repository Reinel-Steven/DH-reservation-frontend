import '../styles/footerComponent.css';

export const FooterComponent = () => {

  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Bloque alineado a la izquierda */}
        <div className="d-flex align-items-center">
          <img
            src="../resources/logo1.png" // Reemplaza con la ruta de tu logo
            alt="Logo Empresa"
            className="me-2"
            style={{ height: "40px" }}
          />
          <span>© {new Date().getFullYear()} <strong>Renting Car.</strong> Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
