export default function Price({oldPrice , newPrice})
{
    let oldStyles = {
        textDecorationLine :"line-through",
    };
    let newStyles = {
        fontWeight : "bold"
    };
     let styles = {
        backgroundColor : "#E1A95F",
        height : "50px",
        width : "200px",
        marginTop: "25px",
        borderBottomLeftRadius : "20px",
        borderBottomRightRadius : "20px",
     }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>

        </div>
    )
}