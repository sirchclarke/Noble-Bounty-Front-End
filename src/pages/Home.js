import { useNavigate } from 'react-router-dom'
import { CheckSession } from '../services/AuthServices'
import { useEffect } from 'react'

const Home = ({ user, authenticated, setUser, toggleAuthenticated }) => {
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  let navigate = useNavigate()
  return (
    <div className="home-container col">
      {user && authenticated ? (
        <div>
          <p className="welcome">Noble Bounty</p>
        </div>
      ) : (
        <div>
          <h1 className="welcome-message">Noble Bounty PickUp Directory</h1>
          <h3>Register or Sign-In to view Orders and Pickups</h3>
          <section className="welcome-signin">
            <button onClick={() => navigate('/login')}>
              {' '}
              Click here to Log-In
            </button>
            <button onClick={() => navigate('/register')}>
              Click here to Register
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default Home
