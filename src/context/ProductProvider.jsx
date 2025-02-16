import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ProductContext } from './productContext'
import '../styles/productsPage.css'

export const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log('Error al cargar productos ', error)
      Swal.fire(
        {
          icon: 'error',
          tittle: '¡Error!',
          text: 'Error al cargar productos',
        }
      )
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products }} >      
      {children}
    </ProductContext.Provider>
  )
}
