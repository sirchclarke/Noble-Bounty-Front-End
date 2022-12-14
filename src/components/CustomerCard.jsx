import React from 'react'

const CustomerCard = (props) => {
  return (
    <div className='customer-card'>
      <div className='customer-info'>
        <h3 className='name-display'> Customer Name: {props.name}</h3>
        <h3 className='name-display'> Customer Address: {props.address}</h3>
        <button onClick={props.onClick}>View Orders</button>
        </div>
        </div>
  )
}

export default CustomerCard