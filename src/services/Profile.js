import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { GetCustomerById } from '../services/CustomerServices'

const Profile = ({ user, authenticated, customerId }) => {
  let { id } = useParams()
  if (!id) {
    id = customerId
  }
  let navigate = useNavigate()
  const [customerDetails, setCustomerDetails] = useState(null)

  const getInformation = async () => {
    const data = await GetCustomerById(id)
    setCustomerDetails(data)
  }

  useEffect(() => {
    getInformation()
  }, [user])

  return (
    <div>
      {authenticated && user ? (
        <div className="profile-container">
          <p className="display">
            <em>Customer Email:</em> {customerDetails?.email}
          </p>
          <p className="display">
            <em>Customer Name:</em> {customerDetails?.name}
          </p>
          <div className="order-container">
            {customerDetails?.orders.map((order) => (
              <div className="order-name-pickup" key={order.id}>
                <p>
                  <em>Order Name:</em> {order.name}
                </p>
              </div>
            ))}
            <p className="display"> </p>
          </div>
        </div>
      ) : (
        <div className="home-container col">
          <h1 className="welcome-message">Welcome</h1>
          <h3>Register or LogIn to view your orders and pickups</h3>
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
export default Profile
