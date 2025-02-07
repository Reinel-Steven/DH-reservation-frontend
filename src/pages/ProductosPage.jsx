import { useContext, useEffect, useState } from "react"
import { CardComponent } from "../components/CardComponent"
import Swal from 'sweetalert2'
import { ProductContext } from "../context/productContext"
import { CartContext } from "../context/CartContext"



export const ProductosPage = () => {

  const { products } = useContext(ProductContext)
  const { addProduct, removeProduct } = useContext(CartContext) 

  return (
    <>
    <h1>Productos</h1>
    <hr />
    {
      products.map( product => (
        <CardComponent 
        key={product.id}
        id={product.id}
        image={product.image}
        tittle={product.tittle}
        description={product.description}
        price={product.price}
        handlerAdd = {() => addProduct(product)}
        handlerRemove = {() => removeProduct(product)}
         />
        )
      )
    }
    </>
  )
}
