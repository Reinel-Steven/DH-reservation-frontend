import { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({children}) => {

  const [selectProduct, setSelectProduct] = useState(null);


  return (
    <CartContext.Provider value={{selectProduct, setSelectProduct}}>
      {children}
    </CartContext.Provider>
  )
}
