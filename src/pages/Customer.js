import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import CustomerCard from '../components/CustomerCard'
import PickupCard from '../components/PickupCard'
import { GetAllCustomers } from '../services/CustomerServices'
import { DeleteCustomer } from '../services/CustomerServices'
// import { GetPickup } from '../services/PickupServices'
import ViewCustomers from '../components/ViewCustomers'
// import { Link } from 'react-router-dom'

const Customer = ({ authenticated, user }) => {
  let navigate = useNavigate()
  const [customers, setCustomers] = useState([])

  // const getOrderPickup = async () => {
  //   const data = await GetPickup()
  //   console.log(data)
  //   setPickup(data)
  // }
  const showAllCustomers = async () => {
    const data = await GetAllCustomers()
    setCustomers(data)
    console.log(data)
  }
  const handleDelete = async (id) => {
    await DeleteCustomer(id)
    showAllCustomers()
  }

  useEffect(() => {
    showAllCustomers()
  }, [])

  return (
    <div>
      {authenticated && user ? (
        <div className="customer-information">
          <div className="customers">
            {customers?.map((customer) => (
              <div key={customer?.id}>
                <ViewCustomers
                  key={customer?.id}
                  name={customer?.customer_name}
                  address={customer?.customer_address}
                  email={customer?.customer_email}
                  deleteCustomer={handleDelete}
                  //   onClick={() => viewTranscript(student?.id)}
                />
                {/* <div>
                  {customers?.map((customer) => (
                    <Link to={`/customers/${customer?._id}`}>
                      <ViewCustomers
                        key={customer?._id}
                        name={customer?.name}
                        address={customer?.address}
                      />{' '}
                      deleteOrder={handleDelete}
                    </Link>
                //   ))}
                </div> */}
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
