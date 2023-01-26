import React, {useState } from 'react'
import Header from './Components/Header/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './store/CartProvider'


function App() {

  const [isCartShown,setisCartShown] = useState(false)

 const showCartHandler=()=>{
  setisCartShown(true);
 }
 const hideCartHandler=()=>{
  setisCartShown(false);
 }


  return (
    <CartProvider>
     {isCartShown && <Cart onClose={hideCartHandler}/>}
<Header onClick={showCartHandler}/>
<main>
<Meals />
</main>
    </CartProvider>
  )
}

export default App