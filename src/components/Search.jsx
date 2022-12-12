import useState from 'react'
import { GetOrderById } from "../services/OrderServices"

const Search = ({ user, authenticated}) => {
  const initialState = {
  customerId: '',
  orderId: ''
}
const [formState, setFormState] = useState(initialState)
const [ setOrder] = useState(null)
const [searched, setSearched] = useState(false)

const handleChange = (e) => {
  setFormState({ ...formState, [e.target.id]: e.target.value })
}

const onSubmit = async (e) => {
  e.preventDefault()
  console.log(formState)
  const result = await GetOrderById(formState)
  setFormState(initialState)
  setOrder(result)
  setSearched(true)
}
    <div>

  {authenticated && user ? (
    
    
    <div>
    <form className="search" onSubmit={onSubmit}>

        <input
            type="text"
            id="customerId"
            value={formState.customerId}
            placeholder="Customer ID"
            onChange={handleChange}
        ></input>
        <input
            type="text"
            id="orderId"
            value={formState.orderId}
            placeholder="Order ID"
            onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
    </form>
    {searched ? (
        <div className="search-result">
        
        </div>
    ) : <></>}
    </div>
  ) : (
    <div>
      <p>You are not signed in</p>
    </div>
  )}
</div>




}

export default Search