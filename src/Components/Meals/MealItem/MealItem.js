import React,{useContext} from 'react'
import Classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
//import AvailableMeals from '../AvailableMeals'
import CartContext from '../../../store/cart-context'

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount=>{
    cartCtx.addItem({
      id: props.id,
      name:props.name,
      amount: amount,
      price: props.price,
    })
  })
  return (
    <li className={Classes.meal}>
      <div>
      <h3 >{props.name}</h3>
      <div className={Classes.description}>{props.descripton}</div>
      <div className={Classes.price}>{price}</div>
      </div>
  
    <div>
    <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
    </div>
    </li>
  )
}

export default MealItem