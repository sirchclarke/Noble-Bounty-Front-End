import { useState, useEffect } from 'react'
import { GetOrderById } from '../services/OrderServices'
import { useParams, useNavigate } from 'react-router-dom'
import { UpdatePickup } from '../services/PickupServices'
import Orders from './Orders'

const OrderDetails = ({ user, authenticated }) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const initialState = {
    orderId: id,
    pickup: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [customers, setCustomers] = useState({})
  const [pickups, setPickups] = useState(null)
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
    await UpdatePickup({ ...formState, pickupId: id })
    setFormState(initialState)
    setCustomerToEdit(null)
    getCustomerInOrder()
    setPickups()
  }
  const onClick = (id) => {
    setCustomerToEdit(id)
  }
  useEffect(() => {
    getCustomerInOrder()
  }, [])

  return (
    <div>
      {authenticated && user ? (
        <div>
          <p className="details-header">Order Details</p>

          <div className="order-customers" key={customers?.id}>
            <p className="order-customers">{customers?.customer_address}</p>
            <p className="order-customers">{customers?.item_type}</p>
            <p className="order-customers">{customers?.pickup_date}</p>
            {/* <p>{pickups?.pickup_date}</p> */}
            {customerToEdit === customers?.id ? (
              <form
                className="form"
                onSubmit={(e) => handleSubmit(e, customers.id)}
              >
                <input
                  className="input"
                  type="date"
                  id="pickupId"
                  placeholder="Pickup Date"
                  onChange={(e) => handleChange(e)}
                  value={formState.pickupId}
                  // required
                />
                <button className="create-order-button" type="submit">
                  Update Pickup
                </button>
              </form>
            ) : (
              <button onClick={() => onClick(setPickups.pickup_date)}>
                Update Pickup
              </button>
            )}
          </div>
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
