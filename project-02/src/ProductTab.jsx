import Product from '../../project-02/src/Product'

export default function ProductTab ()
{
    let styles = {
            display : "flex",
            flexWrap : "wrap",
            justifyContent : "center",
            alignItems : "center"
          };
    
      return (
        <div style={styles}>
          
          <>
          
          <Product idx={0}/>
          <Product idx={1}/>
          <Product idx={2}/>
          <Product idx={3}/>
          <Product idx={4}/>
          </>
          
        </div>
      )
}