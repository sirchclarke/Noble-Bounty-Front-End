import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {

  const authenticatedOptions = (
    <nav>
      
      <Link to='/orders'>Orders</Link>
      <Link to='/add-order'>Add Order</Link>
      <Link to='/customer'>Customers</Link>
      <Link to= '/search'>Search</Link>
      <Link to="/">Home</Link>
      <Link onClick={handleLogOut} to="/">
        Sign Out
      </Link>
      {/* <Link to='/'> <img src={myImage}  alt=""/> </Link> */}
    </nav>
  )


const publicOptions = (
  <nav>
    <Link to="/login">Sign In</Link>
    <Link to="/register">Register</Link>
    <Link to="/">Home</Link>
  </nav>
)

return (
  <header>
    <Link to="/">
    </Link>
    {authenticated && user ? authenticatedOptions : publicOptions}
  </header>
)
}




export default Nav
