import { useContext,useState } from 'react'
import React from 'react'
import Classes from './Cart.module.css'
import Modal from '../UI/Modal'
import  CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from '../Checkout/Checkout'

function Cart(props) {
  const[isCheckout,setIsCheckout] = useState(false)
  const [orderSend, setorderSend] = useState(false)
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onSendOrder=(userData)=>{
    fetch('https://food-application-1a595-default-rtdb.firebaseio.com/order.json',{
      method:'POST',
      body: JSON.stringify({
        User: userData,
        Order: cartCtx.items,
      })
    })
    cartItemClearHandler();
    setorderSend(true)
  }
  const cartItemClearHandler = () => {
    cartCtx.clearItem()
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartItemAddHandler = (item) => {
cartCtx.addItem({...item, amount: 1})
  };

  const orderHandler=()=>{
    setIsCheckout(true);
  }

  const cartItems = (
    <ul className = {Classes['cart-items']}>
      {cartCtx.items.map((item)=>(
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const modalActions = (
    <div className={Classes.actions}>
<button className={Classes['button--alt']} onClick={props.onClose}>
  Close
  </button>
{hasItems && 
<button className={Classes.button} onClick={orderHandler}>
  Order
  </button>}
</div>
  )


  return (
    <Modal>
      {orderSend && <p>Order Successfully Placed...</p>}
      {!orderSend && <React.Fragment>{cartItems}
<div className={Classes.total}>
  <span>Total Amount</span>
  <span>{totalAmount}</span>
</div>
{isCheckout && <Checkout onCancel={props.onClose} onConfirm={onSendOrder} />}
{!isCheckout && modalActions}</React.Fragment>
  }
</Modal>

    
  )
}

export default Cart