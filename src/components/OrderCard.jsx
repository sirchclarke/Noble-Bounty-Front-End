import React from 'react'
import Orders from "../pages/Orders"

const OrderCard = (props) => {
  return(
    <div className= "order-card" >
        <div className= "order-info">
            <h3 className="name-display">Order Name: {props.name}</h3>
     
            <button onClick={props.viewOnClick}>View order details</button>
        </div>
    </div>
)
}

export default OrderCard