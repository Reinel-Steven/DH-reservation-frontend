import React, { useState } from "react";
import "../../styles/CreateProductPage.css";
import { vehicleBrand } from "../../model/vehicleBrand.js"

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

  // Estado para almacenar la marca seleccionada
  const [brandSelected, setBrandSelected] = useState("");

  // Función para manejar el cambio de selección
  const handleChangeBrand = (event) => {
    setBrandSelected(event.target.value);
  };
  
  return (
    <>
      <div className="card card-create">

        <div className="card-header" >
          <div className="card-tittle">
            Crear producto
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <select
                className="form-select"
                value={brandSelected}
                onChange={handleChangeBrand}
              >
                <option value="">-- Selecciona una marca --</option>
                {vehicleBrand.map((marca) => (
                  <option key={marca.id} value={marca.nombre}>
                    {marca.nombre} {/* Renderiza solo el nombre, no el objeto completo */}
                  </option>
                ))}
              </select>
              {/* Mostrar la marca seleccionada */}
            </div>
            <div className="mb-3">
              <label className="form-label">Referencia</label>
              <input type="text"
                className="form-control"
                name="name" id="name"
                value={product.name}
                placeholder="Referencia del vehiculo EJ: Logan"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea className="form-control"
                name="description" id="description"
                value={product.description}
                placeholder="Ej: cilindrage: 1600; color: negro; tipo: sedan; transmision: manual"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input type="number" id="price"
                className="form-control"
                name="price"
                value={product.price}
                onChange={handleChange} required
                placeholder="Valor de Renta"
              />
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

