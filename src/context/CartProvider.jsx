import { useState } from 'react'
import { CartContext } from './CartContext'
import { useNavigate } from 'react-router-dom';

export const CartProvider = ({children}) => {

const navigate = useNavigate();

  const [selectProduct, setSelectProduct] = useState(null);

  const handleViewProduct = (product) =>{
    setSelectProduct(product)
    navigate('/detail-product');
  }

  return (
    <CartContext.Provider value={{selectProduct, handleViewProduct}}>
      {children}
    </CartContext.Provider>
  )
}
