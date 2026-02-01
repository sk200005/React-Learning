import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        green: 0,
        yellow: 0
    });

    function incMoves(color) {
        setMoves(cur => ({ ...cur, [color]: cur[color] + 1    //We spread the object and pass
        }));                                                  //new copy of object 
    }

    return (
        <div>
            <h1>Welcome to Jumanji</h1>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{ background: "blue" }} onClick={() => incMoves("blue")}>
                    
                </button>

                <p>Red Moves = {moves.red}</p>
                <button style={{ background: "red" }} onClick={() => incMoves("red")}>
                    
                </button>

                <p>Green Moves = {moves.green}</p>
                <button style={{ background: "green" }} onClick={() => incMoves("green")}>
                    
                </button>

                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{ background: "yellow", color:"black" }} onClick={() => incMoves("yellow")}>
                    
                </button>
            </div>
        </div>
    );
}
