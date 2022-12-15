import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustomerCard from '../components/CustomerCard'
import PickupCard from '../components/PickupCard'
import { GetAllCustomers } from '../services/CustomerServices'
import { DeleteCustomer } from '../services/CustomerServices'
import { GetPickup } from '../services/PickupServices'

const Customer = ({ authenticated, user }) => {
  let { customerId } = useParams()
  const [customers, setCustomers] = useState([null])
  const [pickup, setPickup] = useState([null])
  let navigate = useNavigate()

  const getOrderPickup = async () => {
    const data = await GetPickup()
    console.log(data)
    setPickup(data)
  }
  const getCustomers = async () => {
    const data = await GetAllCustomers()
    console.log(data)
    setCustomers(data)
  }
  const handleDelete = async () => {
    await DeleteCustomer({ customerId })
    setCustomers()
  }
  // const removeCustomer = async (id) => {
  //       const data = await DeleteCustomer
  //       console.log(data)
  //     } catch (error) {
  //         throw (error)

  //     }

  useEffect(() => {
    getCustomers()
    getOrderPickup()
  }, [])

  return (
    <div>
      {authenticated && user ? (
        <div className="customer-information">
          <div className="customers">
            {customers?.map((customer) => (
              <div key={customer?.id}>
                <CustomerCard
                  key={customer?.id}
                  name={customer?.customer_name}
                  address={customer?.customer_address}
                  email={customer?.customer_email}
                  //   onClick={() => viewTranscript(student?.id)}
                />
                <PickupCard
                  key={customer?.id}
                  pickup_date={customer?.pickup_date}
                  customer_address={customer?.customer_address}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="home-container col">
          <h1 className="welcome-message">Noble Bounty</h1>
          <h3>Register or log in to place an order or view existing orders</h3>
          <section className="welcome-signin">
            <button onClick={() => navigate('/login')}>
              {' '}
              CLick here to Log-in
            </button>
            <button onClick={() => navigate('/register')}>
              CLick here to Register
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default Customer
