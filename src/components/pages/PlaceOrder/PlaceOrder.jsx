import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalProAmount } = useContext(StoreContext)
  return (
    <form className='placeorder'>
      <div className="play0rder-left">
        <p className='title'>Delivery Information</p>
        <div className="multy">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='street' />
        <div className="multy">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multy">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="play0rder-right">
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
              <p>${getTotalProAmount() === 0? 0 : getTotalProAmount()+ 2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder