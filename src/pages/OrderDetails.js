import { useState, useEffect } from 'react'
import { GetOrderById } from '../services/OrderServices'
import { useParams, useNavigate } from 'react-router-dom'
import { UpdatePickup } from '../services/PickupServices'

const OrderDetails = ({ user, authenticated }) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const initialState = {
    orderId: id,
    pickup: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [customers, setCustomers] = useState(null)
  const [customerToEdit, setCustomerToEdit] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }
  const getCustomerInOrder = async (req, res) => {
    const customerInOrder = await GetOrderById(id)
    setCustomers(customerInOrder)
  }
  const handleSubmit = async (e, id) => {
    e.preventDefault()
    await UpdatePickup({ ...formState, customerId: id })
    setFormState(initialState)
    setCustomerToEdit(null)
    getCustomerInOrder()
  }
  const onClick = (id) => {
    console.log(id)
    setCustomerToEdit(id)
  }
  useEffect(() => {
    getCustomerInOrder()
  })

  return (
    <div>
      {authenticated && user ? (
        <div>
          <p className="details-header">Order Details</p>

          {customers.customers?.map((customer) => (
            <div className="order-customers" key={customer.id}>
              <p className="order-customer-name">{customer.name}</p>
              <p>{customer.Pickup.pickup}</p>
              {customerToEdit === customer.id ? (
                <form
                  className="form"
                  onSubmit={(e) => handleSubmit(e, customer.id)}
                >
                  <input
                    className="input"
                    type="date"
                    id="pickup_date"
                    placeholder="Pickup Date"
                    onChange={(e) => handleChange(e)}
                    value={formState.pickup}
                    // required
                  />
                  <button className="create-order-button" type="submit">
                    Update Pickup
                  </button>
                </form>
              ) : (
                <button onClick={() => onClick(customer.id)}>
                  Update Pickup
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="home-container col">
          <h1 className="welcome-message">Welcome</h1>
          <h3>Register or Sign-In to view your orders and pickups</h3>
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
export default OrderDetails
