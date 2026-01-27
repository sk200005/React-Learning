import './App.css'
import Product from './Product.jsx'



function Butt() {
  return <button>Buy Now</button>
}


function App() {
  let adv  = ["Fast", "Durable","Efficient"]
  
  return (
    <div>
      <h1>Amazon</h1>

      <Product title = "Phone" price = {27000} features = {adv}/> 
      
      <Product title = "Laptop" price = {52000} features = {adv} /> 
      
      <Product title = "Watch" price  /> 

      
    </div>
  )
}

export default App
