import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'




const UpdateCustomerForm =(props)=>{
    let { customerId } = useParams()
    const initialList={
        name:'',
        address:'',
        email:''
       
      
       
    }
    let [formState, setFormState]= useState(initialList)
    let navigate=useNavigate()
const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.put(`/customer/${customerId}`,formState)
    setFormState(initialList)
    navigate('/customers')
}


const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }




    
    return(
        <div className='transcript-container'>
    <h1>Update a Customer</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={formState.name} onChange={handleChange} id={'name'} placeholder={'name'} />
      <input type="text" value={formState.address} onChange={handleChange} id={'address'} placeholder={'address'} />
      <input type="text" value={formState.email} onChange={handleChange} id={'email'} placeholder={'email'} />
   
       <button type='submit'>Submit</button>
    </form>
    </div>
    )
}

export default UpdateCustomerForm