import React from 'react'



const OrderCard = ({date,order_type,viewOnClick,address,item_image,id,deleteOrder}) => {
  return(
    <div className= "order-card" >
        <div className= "order-info">
            <h3 className="name-display">Order Date: {date}</h3>
            <h3 className="name-display">Address: {address}</h3>
            <h3 className="name-display">Item type: {order_type}</h3>
            <h3 className="name-display">Item: {item_image}</h3>
     
            <button onClick={viewOnClick}>View order details</button>
            <button onClick={()=> deleteOrder(id)}>Delete</button>
            {/* <button onClick={()=> DeleteOrder()}>Delete</button> */}
        </div>
    </div>
)
}

export default OrderCard