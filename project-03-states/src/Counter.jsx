import { useState } from "react";
export default function Counter()
{
    let [count , setCount] = useState(0);
    
    let inCount = ()=>{
        setCount(count +1) ;
        console.log(count)
    }

    return(
        <>
        <div>
            <button onClick={inCount}>Click {count}</button>
        </div>
        </>
    )
} 