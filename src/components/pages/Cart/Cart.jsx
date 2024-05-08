import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const { cartItem, food_list, removeFromCart, getTotalProAmount } = useContext(StoreContext);

  const navigate = useNavigate();
  return (

    <div className='cart'>
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className='cart-title cart-prop'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p> 
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={()=> removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-details">
              <p>SubTotal</p>
              <p>${getTotalProAmount()}</p>
            </div>
            <hr />
            <div className="cart-details">
            <p>Delivery fee</p>
              <p>${getTotalProAmount() === 0? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-details">
            <b>Total</b>
              <p>${getTotalProAmount() === 0? 0 : getTotalProAmount() + 2}</p>
            </div>
          </div>
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here.</p>
            <div className="promocode-input">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart