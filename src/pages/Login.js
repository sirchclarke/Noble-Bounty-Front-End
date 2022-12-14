import { useState } from 'react'
import { SignInUser } from '../services/AuthServices'
import { useNavigate } from 'react-router-dom'

const LogIn = ({ setUser, toggleAuthenticated, user }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    customer_email: '',
    customer_password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    const payload = await SignInUser(formValues)
    setFormValues({ customer_email: '', customer_password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate(`/`)
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="customer_email"
              type="email"
              placeholder="example@example.com"
              value={formValues.customer_email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="customer_password"
              value={formValues.customer_password}
              required
            />
          </div>
          <button
            disabled={
              !formValues.customer_email || !formValues.customer_password
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogIn
