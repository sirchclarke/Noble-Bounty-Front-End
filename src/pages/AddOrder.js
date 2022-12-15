import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderForm = ({ id, user, authenticated, onSubmit }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    customer_name: '',
    id: user.id,
    customer_id: id,
    order_date: '',
    item_type: '',
    customer_address: '',
    item_image: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    onSubmit({
      customer_name: formValues.customer_name,
      customer_id: formValues.customer_id,
      order_date: formValues.customer_date,
      item_type: formValues.item_type,
      item_image: formValues.item_image
    })
    setFormValues({
      customer_name: '',
      customer_id: '',
      order_date: '',
      item_type: '',
      item_image: ''
    })
    // const newOrder = await CreateOrder(formState)
    // setFormState(initialState)
    navigate(`/orders`)
  }

  return (
    <div>
      {authenticated && user ? (
        <div>
          <div className="order-form">
            <h2>Add a new order</h2>
            <form className="form search" onSubmit={handleSubmit}>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
     <div>
        <TextField className="label orderField" htmlFor="name" />
        Name:
        <TextField
       className="input"
       type="text"
       id="customer_name"
       placeholder="Customer Name"
       image="image"
       cols="30"
       onChange={handleChange}
       value={formValues.customer_name}
       required
        />
        <TextField className="label orderField" htmlFor="orderDate" />
        Order Date:
        <TextField
       className="input"
       type="date"
       id="order_date"
       placeholder="Order Date"
       image="image"
       cols="30"
       onChange={handleChange}
       value={formValues.order_date}
       required
        />
        <TextField className="label orderField" htmlFor="item_type" />
        Item Type:
        <TextField
        className="input"
        type="text"
        id="item_type"
        placeholder="Item Type"
        image="image"
        cols="30"
        onChange={handleChange}
        value={formValues.item_type}
        required
        />
        <TextField className="label orderField" htmlFor="item_image" />
        Item Image:
        <TextField
       className="input"
       type="text"
       id="item_image"
       placeholder="Item Image"
       image="image"
       cols="30"
       onChange={handleChange}
       value={formValues.item_image}
       required
        />

              <button className="create-order-button" type="submit">
                Create Order
              </button>
              </box>
            </form>
          </div>
        </div>
      ) : (
        <div className="home-container col">
          <h1 className="welcome-message">Welcome</h1>
          <h3>Register or Log-In to view your orders and pickups</h3>
          <section className="welcome-signin">
            <button onClick={() => navigate('/login')}>
              {' '}
              Click here to Log-In
            </button>
            <button onClick={() => navigate('/register')}>
              Click here to Register
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default OrderForm
