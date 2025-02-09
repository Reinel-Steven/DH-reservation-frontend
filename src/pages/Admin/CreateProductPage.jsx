import React, { useState } from "react";
import "../../styles/CreateProductPage.css";

export const CreateProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + product.images.length > 10) {
      alert("Solo puedes subir hasta 10 imágenes.");
      return;
    }
    setProduct({ ...product, images: [...product.images, ...files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto creado:", product);
  };

  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <div className="card card-create">
        
        <div className="card-body" >
        <div className="card-tittle">
          Crear producto
        </div>
        <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea className="form-control" name="description" value={product.description} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Imágenes (máx. 10)</label>
              <input type="file" className="form-control" multiple accept="image/*" onChange={handleFileChange} />
              <div className="mt-2">
                {product.images.map((img, index) => (
                  <img key={index} src={URL.createObjectURL(img)} alt="preview" className="img-thumbnail me-2" width="100" />
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-success">Guardar Producto</button>
          </form>
        </div>
      </div>
    </>
  );
};

