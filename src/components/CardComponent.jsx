import '../styles/CardComponent.css'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

export const CardComponent = ({ id, image, tittle, description, price, handlerAdd }) => {

    const { reservationSelected } = useContext(CartContext)
    

    const addProduct = () => {
        handlerAdd()
    }


    return (
        <>
            <div className="card">
                <img src={image} alt={tittle} className="card-img" />
                <div className="card-content">
                    <h3 className="card-tittle">{tittle}</h3>
                    <p className="card-description" title={description}>{description}</p>
                    <p className="card-price">{price}</p>

                    <button type="button"
                        className="add-button"
                        onClick={addProduct}
                    > Ver detalle 
                    </button>
                </div>
            </div>
        </>
    )
}