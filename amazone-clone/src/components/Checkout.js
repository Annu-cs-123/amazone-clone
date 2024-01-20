import React from 'react'

import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from "./providers/StateProvider"

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>

      <h2 className='checkout_title'>Your Shoppping Basket</h2>
      {
        basket.map(item => (
          <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />
        ))
      }
    </div>
  )
}

export default Checkout
