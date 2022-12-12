import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerCard from '../components/CustomerCard'
import { GetAllCustomers } from '../services/CustomerServices'

const Customer = ({ authenticated, user }) => {
  const [customers, setCustomers] = useState([null])
  let navigate = useNavigate()

  const getCustomers = async () => {
    const data = await GetAllCustomers()
    setCustomers(data)
  }
  useEffect(() => {
    getCustomers()
  }, [customers])

  return (
    <div>
      {authenticated && user ? (
        <div className="customer-information">
          <div className="customers">
            {customers?.map((customer) => (
              <CustomerCard
                key={customer?.id}
                name={customer?.name}
                //   onClick={() => viewTranscript(student?.id)}
              />
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
