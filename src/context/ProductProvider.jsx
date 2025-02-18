import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ProductContext } from './productContext'
import '../styles/productsPage.css'

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/product');
      const data = await response.json();
      
      // Agregar la URL base a cada imagen
      //const url = "file:///D:/DigitalHouse/ProyectoReservacion/images-vehicles/"
      const baseURL = "./images-vehicles/"; // Reemplaza con la URL real de las imágenes
      const updatedProducts = data.map(product => ({
        ...product,
        images: product.images.map(imageName => `${baseURL}${imageName}`)
      }));
  
      setProducts(updatedProducts);
    } catch (error) {
      console.log('Error al cargar productos ', error);
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Error al cargar productos',
      });
    }
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products }} >      
      { children }
    </ProductContext.Provider>
  )
}
