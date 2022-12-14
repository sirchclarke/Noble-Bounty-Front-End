import React from 'react'

const PickupCard = ({pickup_date,customer_address}) => {
  return (
    <div>
        <div className='customer-info'>
        <h3 className='name-display'> Pickup Date {pickup_date}</h3>
        <h4 className='name-display'> Customer Address: {customer_address}</h4>
   
    </div>
    </div>
  )
}

export default PickupCard