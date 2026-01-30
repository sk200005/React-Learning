function doSomething() {
    console.log("Amazon Button clicked");
}
function confirmation() {
    event.preventDefault(); 
    console.log("Form Submitted");
}

export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>Amazon</button>
            <form >
                <input type="text" placeholder="Write Something..." />
                <button onClick={confirmation}>Submit</button>
            </form>
        </div>
    );
}
