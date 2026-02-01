import { useState } from "react";

export default function ToDoList() {
    const [toDo, setToDo] = useState([]);
    const [newToDo, setNewToDo] = useState("");

    // runs when Add button is clicked
    const addToDO = (event) => {
        event.preventDefault();   // stop form refresh

        if (newToDo.trim() === "") return; // avoid empty todos

        setToDo([...toDo, newToDo]); // add new task to list
        setNewToDo("");              // clear input
    };

    // runs when typing in input
    const updateToDoValue = (event) => {
        setNewToDo(event.target.value);
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Add a To-Do"
                value={newToDo}
                onChange={updateToDoValue}
            />
            <br /><br />

            <button onClick={addToDO}>Add</button>

            <br /><br /><br />
            <hr />
            <h2>To Do Tasks</h2>

            <ul>
                {toDo.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </form>
    );
}
