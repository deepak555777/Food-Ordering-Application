import React, { Fragment } from 'react'
import Classes from './Header.module.css'
import image from './meals.jpg'
import HeaderCartButton from './HeaderCartButton.js'

function Header(props) {
  return (
    <Fragment>
    <header className={Classes.header}>
      <h1>Punjab Canteen</h1>
      <HeaderCartButton onClick={props.onClick} />
    </header>
    <div className={Classes['main-image']}>
      <img src={image} alt='A table full of delicious food!' />
    </div>
    </Fragment>
  )
}

export default Header

