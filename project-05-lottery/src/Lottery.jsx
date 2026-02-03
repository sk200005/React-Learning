import { useState } from "react";
import "./Lottery.css";


export default function Lottery() {
  const [ticket, setTicket] = useState([0, 0, 0]);

  const Generate = () => {
    setTicket([
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ]);
  };

  const isWinner = ticket[0] + ticket[1] + ticket[2] == 15;

  return (
    <div>
      <h1>Lottery Game</h1>

      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      

      <br /><br />
      <button onClick={Generate}>Generate</button>

      <h3>{isWinner ? "You Won 🎉" : ""}</h3>
    </div>
  );
}
