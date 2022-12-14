import Client from './api'

export const GetPickup = async ({ orderId, customerId }) => {
  try {
    const res = await Client.get(`/pickup/${orderId}/${customerId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePickup = async ({
  orderId,
  customerId,
  pickup,
  pickupId
}) => {
  try {
    console.log(`orderId ${orderId}`)
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
