import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'





const ViewCustomers = (props) => {
  let Navigate=useNavigate()
  const deleteListing=async()=>{
   await axios.delete(`/customers/${props.id}`)
   Navigate('/customers')
  }

  

  
  return (
      <div>
       <button onClick={deleteListing}> Delete</button>
      <Link to = {`/UpdateCustomerForm/${props.id}`}><button> Update</button></Link>
      <div className="view-listing" id= "info-wrapper flex-col" onClick={props.onClick}>
      <h2>{props.name}</h2>
      <h4>{props.address}</h4>
      <h3>{props.email}</h3>
     
      {/* </div>
       <img src={props.image} alt="scene" />  */}
    </div>
    </div>
    
  )
}

export default ViewCustomers