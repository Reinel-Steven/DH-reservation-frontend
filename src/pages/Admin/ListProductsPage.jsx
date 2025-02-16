import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/productContext"
import '../../styles/productsPage.css'
import { CardComponent } from "../../components/CardComponent"
import { SearchComponent } from "../../components/searchComponent"


export const ListProductsPage = () => {
    
    const { products } = useContext(ProductContext)

    return (
        <>
            <div className="container-page">
                <SearchComponent />
                <div className="container-products">
                    {/* Contenido para pantallas pequeñas */}
                    <div className="product-list row justify-content-center align-items-center">
                        {products.map((product) => (
                            <CardComponent className="card"
                                key={product.id}
                                product={product}
                                id={product.id}
                                name="Logan"
                                category="Auto"  
                                image={product.image}
                                tittle={product.tittle}
                                description={product.description}
                                price={product.price}                               
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
