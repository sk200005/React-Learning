import './Product.css'

function Product( {title , price = "free", features = []}) {
    const list = features.map((feat) => <li>{feat}</li>)
    return (
      <>
      <div className='Product'>
        
        <h2>{title}</h2>
        <h3>Price : {price}</h3>
        <h4>Features : </h4>
        <ul>{list}</ul>

      </div>
      </>
      
    )
}

export default Product