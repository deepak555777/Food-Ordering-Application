import React,{useEffect,useState} from 'react'
import Classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'

function AvailableMeals() {
  const [meals, setMeals] = useState([])
  const[isLoading,setIsLoading] = useState(true)
  const [httpError,setHttpError] = useState()

     useEffect(() => {
      const fetchMeals = async ()=>{
        const response = await fetch('https://food-application-1a595-default-rtdb.firebaseio.com/meals.json')
        if(!response.ok){
          throw new Error("Http Error")
        }
          const responseData = await response.json()
        
       
        const loadedMeals=[];
        for(const key in responseData){
        loadedMeals.push({
          id : key,
          name : responseData[key].name,
          description: responseData[key].description,
          price : responseData[key].price,
        })}

       setMeals(loadedMeals)
       setIsLoading(false)
      }

        fetchMeals().catch((error) => {
          setIsLoading(false);
          setHttpError(error.message);
        })

      },[])


     if(isLoading){
      return(
      <section>
        <p className={Classes.mealsLoading}>Loading...</p>
      </section>
      )
    }
    
    if(httpError){
      return(
        <section>
          <p className={Classes.mealsError}>{httpError}</p>
        </section>
      )
    }

     
    const mealList = meals.map((meal)=><MealItem
    id={meal.id}
      key={meal.id} 
    name={meal.name}
    description={meal.description}
    price={meal.price}
    /> )


  return (
    <div className={Classes.meals}>
        <Card>
<ul>{mealList}</ul>
</Card>
    </div>
  )
}

export default AvailableMeals