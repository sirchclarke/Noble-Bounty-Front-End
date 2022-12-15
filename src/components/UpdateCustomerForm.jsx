import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'




const UpdateListingForm =(props)=>{
    let { listingId } = useParams()
    const initialList={
        name:'',
        location:'',
        city:'',
        address:'',
        type:'',
        rating:''
   
       
    }
    let [formState, setFormState]= useState(initialList)
    let navigate=useNavigate()
const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.put(`/listing/${listingId}`,formState)
    setFormState(initialList)
    navigate('/listings')
}


const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }




    
    return(
        <div className='updatecontainer'>
    <h1>Update a Listing</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={formState.name} onChange={handleChange} id={'name'} placeholder={'name'} />
      <input type="text" value={formState.location} onChange={handleChange} id={'location'} placeholder={'location'} />
      <input type="text" value={formState.city} onChange={handleChange} id={'city'} placeholder={'city'} />
      <input type="text" value={formState.address} onChange={handleChange} id={'address'} placeholder={'address'} />
      <input type="text" value={formState.type} onChange={handleChange} id={'type'} placeholder={'type'} />
      <input type="text" value={formState.rating} onChange={handleChange} id={'rating'} placeholder={'rating'} />
       <button type='submit'>Submit</button>
    </form>
    </div>
    )
}

export default UpdateListingForm