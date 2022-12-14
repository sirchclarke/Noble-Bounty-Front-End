import React from 'react'


const OrderCard = ({id,order_type,viewOnClick}) => {
  return(
    <div className= "order-card" >
        <div className= "order-info">
            <h3 className="name-display">Order Name: {id}</h3>
            <h3 className="name-display">Item type: {order_type}</h3>
     
            <button onClick={viewOnClick}>View order details</button>
        </div>
    </div>
)
}

export default OrderCard