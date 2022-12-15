import { useState, useEffect } from 'react'
import { GetOrderById, UpdateOrderById } from '../services/OrderServices'
import { useParams, useNavigate } from 'react-router-dom'
import OrderForm from './AddOrder'

const OrderDetails = ({ user, authenticated }) => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [order, setOrder] = useState({})

  const handleSubmit = async (updatedOrder) => {
    UpdateOrderById(id, updatedOrder)

    setOrder(updatedOrder)
  }

  const showOrder = async () => {
    const data = await GetOrderById()
    setOrder(data)
    console.log(data)
  }
  useEffect(() => {
    showOrder()
  }, [])

  return (
    <OrderForm
      key={order?.id}
      id={order?.id}
      name={order?.customer_name}
      date={order?.order_date}
      address={order?.customer_address}
      order_type={order?.item_type}
      item_image={order?.item_image}
      onSubmit={handleSubmit}
    />
  )
}

export default OrderDetails
