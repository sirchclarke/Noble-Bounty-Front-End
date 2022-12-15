import Client from './api'

export const GetPickup = async ({ order_id, customerId }) => {
  try {
    const res = await Client.get(`/pickup/${order_id}/${customerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePickup = async ({
  order_id,
  customerId,
  pickup,
  pickupId
}) => {
  try {
    console.log(`orderId ${order_id}`)
    console.log(`customerId ${customerId}`)
    console.log(`pickup ${pickup}`)
    const res = await Client.put(`/pickup/${pickupId}`, {
      pickup: pickup
    })
    return res.data
  } catch (error) {
    throw error
  }
}
