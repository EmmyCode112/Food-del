import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'
import FoodItems from '../FoodItems/FoodItems'

const FoodDisplay = ({category}) => {

    const {} = useContext(StoreContext)
    
  return (
    <div className='display-food' id='food'>
        <h2>Best dishes near you.</h2>
        <div className="food-list">
          {food_list.map((item,index) =>{
           if(category==='All' || category === item.category){
            return (
              <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            )
           }
          })}
        </div>
    </div>
  )
}

export default FoodDisplay