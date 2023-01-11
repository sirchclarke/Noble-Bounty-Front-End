// import axios from 'axios'
import React from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { DeleteCustomer } from '../services/CustomerServices'





const ViewCustomers = (props) => {
  // let Navigate=useNavigate()
  // const removeCustomer=async()=>{
  //  await DeleteCustomer(`/customers/${props.id}`)
  //  Navigate('/customers')
  // }

  
  return (
    <div className= "order-card" >
    <div className= "order-info">
       
      <h2>{props.name}</h2>
      <h2>{props.id}</h2>
      <h4>{props.address}</h4>
      <h3>{props.email}</h3>
      
      <Link to = {`/UpdateCustomerForm/customers/${props.id}`}><button> Update</button></Link>
      <button onClick={props.onClick}>View Orders</button>
   
    </div>
    </div>
  
  
    
  )
}

export default ViewCustomers