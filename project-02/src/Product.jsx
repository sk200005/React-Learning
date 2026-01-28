import "./Product.css"
import Price from "./Price"

export default function Product({idx})
{
    let oldPrice = ["43,999", "59,999", "75,999", "49,999", "79,999"]
    let newPrice = ["21,470", "28,499", "37,999", "39,120", "70,949"]
    let Product = ["Pixel 6a", "Pixel 7", "Pixel 8", "Pixel 9", "Pixel 10"]
    let descriptions = [
        ["Best camera in budget", "Clean Android"],
        ["Faster Tensor G2", "better battery"], 
        ["Compact flagship", "long updates"], 
        ["Improved AI", "refined design"],
        ["Not launched yet", "expected AI upgrade"]
    ] 
    return(
        <div className="Product">
            <h2>{Product[idx]}</h2>
            <h4>{descriptions[idx].map((d, i) => ( <div key={i}>{d}</div> ))}  </h4>
            <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
            
        </div>
    )
}