import { useContext, useEffect, useState } from "react"
import { CardComponent } from "../components/CardComponent"
import Swal from 'sweetalert2'
import { ProductContext } from "../context/productContext"
import { CartContext } from "../context/CartContext"
import '../styles/productsPage.css'



export const ProductosPage = () => {

  const { products } = useContext(ProductContext)
  const { addProduct } = useContext(CartContext) 


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
    <>
    <div className="">

     {/* Contenido para pantallas pequeñas */}
     <div className="recomendados-container row justify-content-center align-items-center">        
        {products.map((product) => (
          <CardComponent className = "card"
            key={product.id}
            id={product.id}
            image={product.image}
            tittle={product.tittle}
            description={product.description}
            price={product.price}
            handlerAdd={() => addProduct()}
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
            handlerAdd={() => addProduct()}
          />
        ))}
      </div>

      {/* Paginación para pantallas grandes */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / cardsPerPage) }).map(
          (_, index=1) => (
            <button key={index + 1} onClick={() => handlePaginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
      </div>
    </>
  )
}
