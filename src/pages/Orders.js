import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderCard from '../components/OrderCard'
import { GetAllOrders } from '../services/OrderServices'

const Orders = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [orders, setOrders] = useState([])

  const showAllOrders = async () => {
    const data = await GetAllOrders()
    setOrders(data)
  }

  useEffect(() => {
    showAllOrders()
  }, [orders])

  const viewDetails = (id) => {
    navigate(`/orders/${id}`)
  }

  return (
    <div>
      {authenticated && user ? (
        <div className="order-container">
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              name={order.name}
              orderId={order.id}
              viewOnClick={() => viewDetails(order.id)}
            />
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

export default Orders
