import './App.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import { CheckSession } from './services/AuthServices'
import Search from './components/Search'
import Orders from './pages/Orders'
import Customer from './pages/Customer'
import AddOrder from './pages/AddOrder'
import OrderDetails from './pages/OrderDetails'
import Footer from './components/Footer'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

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

  return (
    <div className="App">
      <header>
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LogIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/search"
            element={<Search user={user} authenticated={authenticated} />}
          />
          <Route
            path="/orders"
            element={<Orders user={user} authenticated={authenticated} />}
          />
          <Route
            path="/customer"
            element={<Customer user={user} authenticated={authenticated} />}
          />
          <Route
            path="/add-order"
            element={<AddOrder user={user} authenticated={authenticated} />}
          />
          <Route
            path="/orders/:id"
            element={<OrderDetails user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
