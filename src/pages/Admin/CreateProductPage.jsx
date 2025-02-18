import React, { useContext, useState } from "react";
import { UploadFileContext } from "../../context/UploadFileContext.js"
import "../../styles/CreateProductPage.css";
import { VehicleBrand } from "../../model/VehicleBrand.js"
import { Categories } from "../../model/categories.js";


export const CreateProductPage = () => {

  const { createProduct, uploadImage } = useContext(UploadFileContext)
  
  const [product, setProduct] = useState({
    name: "",    
    category: "",
    brand: "",
    description: "",
    price: "",
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  
  // Estado para almacenar la marca seleccionada
  const [brandSelected, setBrandSelected] = useState("");

  // Función para manejar el cambio de selección
  const handleChangeBrand = (event) => {
    setBrandSelected(event.target.value);    
    handleChange(event);
  };

  // Estado para almacenar la categoria seleccionada
  const [categorySelected, setCategorySelected] = useState("");

  // Función para manejar el cambio de selección
  const handleChangeCategory = (event) => {
    setCategorySelected(event.target.value);
    handleChange(event);
  };

  const handlerSaveProduct = () =>{
    console.log(product);
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + product.images.length > 10) {
      alert("Solo puedes subir hasta 10 imágenes.");
      return;
    }
    setProduct({ ...product, images: [...product.images, ...files] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 1. Subir las imágenes y obtener sus nombres o URLs
      const uploadedImages = await Promise.all(
        product.images.map(async (file) => {
          const reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.onload = async () => {
              const base64Image = reader.result.split(",")[1];
              const fileName = file.name;
  
              try {
                await uploadImage(file); // Llama la función del contexto
                resolve(fileName); // Guardamos el nombre
              } catch (error) {
                reject(error);
              }
            };
            reader.readAsDataURL(file);
          });
        })
      );
  
      // 2. Crear el producto con las imágenes ya subidas
      await createProduct(
        product.name, 
        product.category,
        product.brand,
        product.description, 
        product.price, 
        uploadedImages);
  
      alert("Producto creado exitosamente");
    } catch (error) {
      console.error("Error al subir imágenes o crear el producto:", error);
      alert("Hubo un error al crear el producto.");
    }
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

            {/* Categories */}
            <div className="mb-3">
              <select
                name="category"
                className="form-select"
                value={categorySelected}
                onChange={handleChangeCategory}
              >
                <option value="">-- Categoria --</option>
                {Categories.map((c) => (
                  <option key={c.id} value={c.nombre}>
                    {c.nombre}
                  </option>
                ))}
              </select>
            </div>
            {/* Brand */}
            <div className="mb-3">
              <select
                name="brand"
                className="form-select"
                value={brandSelected}
                onChange={handleChangeBrand}
              >
                <option value="">-- Selecciona una marca --</option>
                {VehicleBrand.map((marca) => (
                  <option key={marca.id} value={marca.nombre}>
                    {marca.nombre} {/* Renderiza solo el nombre, no el objeto completo */}
                  </option>
                ))}
              </select>
            </div>
            {/* Name */}
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
            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <input type="text" 
                className="form-control" 
                name="description" id="description"
                value={product.description}
                placeholder="Ej: cilindrage: 1600; color: negro; tipo: sedan; transmision: manual"
                onChange={handleChange}
                required
              />
            </div>
            {/* Price */}
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input type="number" 
                className="form-control"
                name="price" id="price"
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
            <button type="submit" className="btn btn-success" onClick={handlerSaveProduct}>Guardar Producto</button>
          </form>
        </div>
      </div>
    </>
  );
};

