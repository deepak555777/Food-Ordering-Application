import React,{useContext, useEffect, useState} from 'react'
import Classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0)

  const btnClasses = `${Classes.button} ${btnIsHighlighted ? Classes.bump : ''} `

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);
    const timer= setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);
    return ()=>{
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
    <span className={Classes.icon}>
    <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={Classes.badge}>
      {numberOfCartItems}
    </span>


    </button>
  )
}

export default HeaderCartButton;