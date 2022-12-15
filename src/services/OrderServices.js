import Client from './api'

export const GetAllOrders = async () => {
  try {
    const res = await Client.get('/orders')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOrderById = async (id) => {
  try {
    const res = await Client.get(`/orders/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const CreateOrder = async (data) => {
  try {
    const res = await Client.post(`/orders/addOrder`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const UpdateOrderById = async (id, data) => {
  try {
    const res = await Client.put(`/orders/${id}`, data)
    return res.send(data)
  } catch (error) {
    throw error
  }
}
export const DeleteOrder = async (id) => {
  try {
    const res = await Client.delete(`/orders/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const AddOrder = async (data) => {
  try {
    const res = await Client.post(`/orders/addOrder`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
