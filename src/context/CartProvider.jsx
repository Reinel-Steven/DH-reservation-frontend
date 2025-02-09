import { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({children}) => {


  const cartReducer = (action = {}) => {
    dispatch(action)
    return action.payload
  }

  return (
    <>
    <CartContext.Provider value={{cartReducer}}>
      {children}
    </CartContext.Provider>
    </>
  )
}
