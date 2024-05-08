import React, { useContext } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItems = ({id,name,description,price,image}) => {

    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-items'>

    <div className="food-container">
        <img className='food-img' src={image} alt="" />
        {
            !cartItem[id] ? <img className='addToCart' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className="food-item-count">
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItem[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />  
            </div>
        }
    </div>
    <div className="food-info">
        <div className="food-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-description">{description}</p>
        <p className="food-price">${price}</p>
    </div>
    </div>
  )
}

export default FoodItems