import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateOrder } from '../services/OrderServices'

const AddOrder = ({ user, authenticated }) => {
  let navigate = useNavigate()

  const initialState = {
    name: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newOrder = await CreateOrder(formState)
    setFormState(initialState)
    navigate(`/orders`)
  }

  return (
    <div>
      {authenticated && user ? (
        <div>
          <div className="order-form">
            <h2>Add a new order</h2>
            <form className="form search" onSubmit={handleSubmit}>
              <label className="label orderField" htmlFor="name">
                Name:
              </label>
              <input
                className="input"
                type="text"
                id="name"
                placeholder="Order Name"
                image="image"
                cols="30"
                onChange={handleChange}
                value={formState.name}
                required
              />
              <button className="create-order-button" type="submit">
                Create Order
              </button>
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

export default AddOrder
