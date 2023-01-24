import React, { Fragment,useState } from 'react'
import Header from './Components/Header/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'



function App() {

  const [isCartShown,setisCartShown] = useState(false)

 const showCartHandler=()=>{
  setisCartShown(true);
 }
 const hideCartHandler=()=>{
  setisCartShown(false);
 }


  return (
    <Fragment>
     {isCartShown && <Cart onClose={hideCartHandler}/>}
<Header onClick={showCartHandler}/>
<Meals />

    </Fragment>
  )
}

export default App