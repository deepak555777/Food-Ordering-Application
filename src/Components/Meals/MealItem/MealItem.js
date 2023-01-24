import React from 'react'
import Classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
//import AvailableMeals from '../AvailableMeals'

function MealItem(props) {
  return (
    <li className={Classes.meal}>
      <div>
      <h3 >{props.name}</h3>
      <div className={Classes.description}>{props.descripton}</div>
      <div className={Classes.price}>{props.price}</div>
      </div>
  
    <div>
    <MealItemForm id={props.id}/>
    </div>
    </li>
  )
}

export default MealItem