import React from 'react'
import Classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Dal Makhni',
      description: 'Finest Dal and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Aloo Gobhi',
      description: 'A Punjabi specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Rajma Chawal',
      description: 'Indian, raw, spicy',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Amritsar Kulche',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function AvailableMeals() {

    const meals = DUMMY_MEALS.map((meal)=><MealItem
    id={meal.id}
      key={meal.id} 
    name={meal.name}
    description={meal.description}
    price={meal.price}
    /> )
  return (
    <div className={Classes.meals}>
        <Card>
<ul>{meals}</ul>
</Card>
    </div>
  )
}

export default AvailableMeals