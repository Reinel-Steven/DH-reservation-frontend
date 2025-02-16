import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const DetailProductComponent = () => {

  const { selectProduct } = useContext(CartContext); 
  
  //const [selectedImage, setSelectedImage] = useState(product.image[0]);

  if (!selectProduct) {
    return <div><br /><br /><br />No se ha seleccionado ningún producto.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white text-center">
          <h3>{selectProduct.title}</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-center">              
              <img src={selectProduct.image} alt="Producto" className="img-fluid mb-3" />
              {/*
              <div className="d-flex justify-content-center">
                {product.images.map((img, index) => (
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
              */}
            </div>
            <div className="col-md-6">
              {/* 
              <h5><strong>Marca:</strong> {product.brand}</h5>
              <h5><strong>Categoría:</strong> {product.category}</h5>
              */}
              <p><strong>Descripción:</strong> {selectProduct.description}</p>
              <h4 className="text-success">${selectProduct.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
