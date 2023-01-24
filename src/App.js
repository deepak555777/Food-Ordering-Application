import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <Fragment>
<Header/>
<Meals />
<Cart/>


    </Fragment>
  )
}

export default App