import Client from './api'

export const GetCustomers = async () => {
  try {
    const res = await Client.get('/customers')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCustomerById = async (id) => {
  try {
    const res = await Client.get(`/customers/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteCustomer = async (id) => {
  try {
    const res = await Client.delete(`/customers/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
