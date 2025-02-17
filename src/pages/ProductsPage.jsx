import { useContext, useEffect, useState } from "react"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../context/productContext"
import { CartContext } from "../context/CartContext"
import '../styles/ProductsPage.css'
import { SearchComponent } from "../components/searchComponent"



export const ProductsPage = () => {

  const { products } = useContext(ProductContext)
  const { handleViewProduct } = useContext(CartContext)

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12; // 4x4 = 16 cards por página

  // Calcular las cards que se deben mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container container-products">
      <SearchComponent />
      {/* Contenido para pantallas pequeñas */}
      <div className="product-list justify-content-center align-items-center">
        {products.map((product) => (
          <CardComponent className="card"
            key={product.id}
            id={product.id}
            image={product.image}
            tittle={product.tittle}
            description={product.description}
            price={product.price}
            onClickView={() => handleViewProduct(product)}
          />
        ))}
      </div>

      {/* Contenido para pantallas grandes */}
      <div className="cards-grid">
        {currentCards.map((product) => (
          <CardComponent
            key={product.id}
            id={product.id}
            image={product.image}
            tittle={product.tittle}
            description={product.description}
            price={product.price}
            onClickView={() => handleViewProduct(product)}
          />
        ))}
      </div>
      {/* Paginación para pantallas grandes */}
      <div className="pagination justify-content-center align-items-center">
        {Array.from({ length: Math.ceil(products.length / cardsPerPage) }).map(
          (_, index = 1) => (
            <button key={index + 1} onClick={() => handlePaginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>

    </div>
  )
}
