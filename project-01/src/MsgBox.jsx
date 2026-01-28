export default function MsgBox({text = "Unknown" , color})
{
    let styles = {backgroundColor : color}
    return (
        <div>
            <h1 style={styles}> {text}</h1>
        </div>
    )
}
