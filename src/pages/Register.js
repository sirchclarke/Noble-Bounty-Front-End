import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/AuthServices'

const Register = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    customer_name: '',
    customer_address: '',
    customer_email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      customer_name: formValues.customer_name,
      customer_address: formValues.customer_address,
      customer_email: formValues.customer_email,
      customer_password: formValues.password
    })
    setFormValues({
      customer_name: '',
      customer_address: '',
      customer_email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/login')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="customer_name">Name</label>
            <input
              onChange={handleChange}
              name="customer_name"
              type="text"
              placeholder="Amy Adams"
              value={formValues.customer_name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="customer_address">Address</label>
            <input
              onChange={handleChange}
              name="customer_address"
              type="text"
              placeholder="1011 sunny side Harlingen, Texas"
              value={formValues.customer_address}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="customer_email">Email</label>
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
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="button"
            disabled={
              !formValues.customer_email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
