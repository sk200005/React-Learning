import './App.css'
import Product from './Product.jsx'
import MsgBox from './MsgBox.jsx'



function Butt() {
  return <button>Buy Now</button>
}


function App() {
  let adv  = ["Fast","Durable","Efficient"]
  return (
    <div>
      <h1>Amazon</h1>
      <Product title = "Phone" price = {27000} features = {adv}/> 
      <Product title = "Laptop" price = {52000} features = {adv} /> 
      <Product title = "Watch"   /> 
      <MsgBox text = "Shreya" color = "red"/>
      <MsgBox  color = "green"/>
    </div>
    
  )
}

export default App
