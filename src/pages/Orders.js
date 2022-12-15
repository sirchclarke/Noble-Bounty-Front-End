import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderCard from '../components/OrderCard'
import { GetAllOrders } from '../services/OrderServices'
import { DeleteOrder } from '../services/OrderServices'

const Orders = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [orders, setOrders] = useState([])

  const showAllOrders = async () => {
    const data = await GetAllOrders()
    setOrders(data)
    console.log(data)
  }

  const handleDelete = async (id) => {
    await DeleteOrder(id)
    showAllOrders()
  }

  useEffect(() => {
    showAllOrders()
  }, [])

  const viewDetails = (id) => {
    navigate(`/orders/${id}`)
  }

  return (
    <div>
      {authenticated && user ? (
        <div className="order-container">
          {orders?.map((order) => (
            <OrderCard
              key={order?.id}
              id={order?.id}
              name={order?.customer_name}
              date={order?.order_date}
              address={order?.customer_address}
              order_type={order?.item_type}
              item_image={order?.item_image}
              viewOnClick={() => viewDetails(order?.id)}
              deleteOrder={handleDelete}
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
