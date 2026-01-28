import './Product.css'

function Product( {title , price ="free", features = []}) {
    const list = features.map((feat) => <li>{feat}</li>)
    let isDiscount = price > 30000 ;
    let styles = {backgroundColor : isDiscount ? "#A45A52" : ""} ;
    return (
      <>
      <div className='Product' style={styles}>
        
        <h2>{title}</h2>
        <h3>Price : {price}</h3>
        <h4>Features : </h4>
        <ul>{list}</ul>
        {price > 30000 ? <p>"5% Discount" </p> : null}

      </div>
      </>
      
    )
}

export default Product