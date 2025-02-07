import { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({children}) => {

  const initialState = []

  const cartReducer = (state = initialState, action = {}) => {
    switch(action.type){
      case '[CART] Add Product':
        return [...state, action.payload]
      case '[CART] Remove Product':
        return state.filter(item => item.id !== action.payload)
      case '[CART] Increment Quantity':
        return state.map(item => {
          const add = item.quantity + 1
          if(item.id === action.payload) return {...item, quantity: add}
          return item
        })  
        break
      case '[CART] Decrement Quantity':
        return state.map(item => {
          const remove = item.quantity - 1
          if(item.id === action.payload && item.quantity>1) return {...item, quantity: remove}
          return item
        })
        break
      default:
        return state;
    }
  }

  const [shoppingList, dispatch] = useReducer(cartReducer, initialState)

  const addProduct = (product) =>{
    product.quantity = 1
    const action = {
      type: '[CART] Add Product',
      payload: product
    }
    console.log("se agrego producto")
    dispatch(action)
  }
  const removeProduct = (id) =>{
    const action = {
      type: '[CART] Remove Product',
      payload: id,            
    }
    console.log("se quito producto")
    dispatch(action)
  }
  const incrementQuantity = (id) =>{
    const action = {
      type: '[CART] Increment Quantity',
      payload: id
    }
    dispatch(action)
  }
  const decrementQuantity = (id) =>{
    const action = {
      type: '[CART] Decrement Quantity',
      payload: id
    }
    dispatch(action)
  }


  return (
    <>
    <CartContext.Provider value={{shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
    </>
  )
}
