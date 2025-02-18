import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/detailProductPage.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

export const DetailProductComponent = () => {

  const navigate = useNavigate();

  const { selectProduct } = useContext(CartContext);

  const onClickBack = () => {
    navigate('/');
  }
  const [selectedImage, setSelectedImage] = useState(selectProduct.images[0]);

  if (!selectProduct) {
    return <div><br /><br /><br />No se ha seleccionado ningún producto.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header text-white text-center">
          <h3 className="card-tittle">{selectProduct.name}
            <button type="button" class="btn btn-sm btn-light button-back" onClick={() => onClickBack()}>
              <i className="bi bi-arrow-left-square "></i></button>
            <button type="button" class="btn btn-warning btn-sm button-edit" aria-label="Close">
              Editar<i class="bi bi-pencil-square"></i></button>
          </h3>

          <div className="card-body">
            <div className="row">
              <div className="col-md-8 container-img">
                <img src={selectedImage} alt="Producto" className="img-fluid mb-3 img-primary" />
                {/*     imagenes pequeñas */}
              <div className="d-flex justify-content-center">
                {selectProduct.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="miniatura"
                    className="img-thumbnail me-2"
                    width="60"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>

              </div>
              <div className="col-md-4">
                <div className="container container-info text-start">

                  {/* 
              <h5><strong>Marca:</strong> {product.brand}</h5>
              <h5><strong>Categoría:</strong> {product.category}</h5>
              */}
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong>Categoría:</strong>
                    </div>
                    <div class="col-sm-8">
                      Electrónica
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong>Marca:</strong>
                    </div>
                    <div class="col-sm-8">
                      Sony
                    </div>
                  </div>
                  <hr />
                  <div class="row mb-3">
                    <div class="col-sm-4">
                      <strong>Descripción:</strong>
                    </div>
                    <div class="col-sm-8">
                      {selectProduct.description}
                    </div>
                  </div>
                  <br />
                  <hr />
                  <div class="mt-auto mb-3 button-rent">
                    <button class="btn btn-primary w-100">Alquilar por ${selectProduct.price}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
