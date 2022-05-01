import { Children, createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [user, setUser] = useState({})

  // const saveUser = () =>{
  //   return onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser)
  // })
  // }

  const addItem = (item) => {
    setCart([...cart, item])
  }
  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }
  const cartCantidad = () => {
    return cart.reduce((acc, item) => acc += item.cantidad, 0)
  }
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc += (item.cantidad * item.precio),0)
  }
  const clearCart = () => {
      setCart([])
  }
  const removeItem = (id) => {
    setCart( cart.filter((item) => item.id !== id))
  }

    return(
        <CartContext.Provider
        value={{
            cart,
            addItem,
            cartCantidad,
            cartTotal,
            isInCart,
            clearCart,
            removeItem,
            
          }}>
        {children}
        </CartContext.Provider>
    )
}