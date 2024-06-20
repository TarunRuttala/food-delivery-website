import React from 'react'
import './PlaceOrder.css';

const PlaceOrder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multifields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
      </div>
      <div className="multifields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <div className="place-order-right"></div>
    </form>
  )
}

export default PlaceOrder
