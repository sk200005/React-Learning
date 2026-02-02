import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    const [toDo, setToDo] = useState([ { id: 1, text: "sample task", isDone : false} ]);
    // toDo is Array //             ---> toDo = [{ id: 1, text: "task" }]
  

    const [newToDo, setNewToDo] = useState("");
    //newToDO stores string

    //const [ucToDo, setUcToDo] = useState(false);
/////////////////////////////////////////////////////////////////////////

    const addToDO = (event) => {
       event.preventDefault();
        if (newToDo.trim() === "") return;
 
        setToDo([                             //---> *
            ...toDo,                          // Destructures existing toDo array
            { id: uuidv4(), text: newToDo, isDone : false }   // Pushes the text that is stored by "newToDo"
        ]);
        setNewToDo("");                       //Empty the the "newToDo" 
    };
//---------------------Delete-Functionality--------------------------------
    const deleteToDo = (id) => {
        setToDo(toDo.filter(todo => todo.id !== id));
    };
//---------------------DeleteAll-Functionality--------------------------------
    const deleteAllToDos = () => {
    setToDo([]);
};
//---------------------upperCase-Functionality--------------------------------
    const upperCaseToDo = (id) => {
       // event.preventDefault();
    setToDo(
        toDo.map(todo =>
            todo.id === id ? { ...todo, text: todo.text.toUpperCase() } : todo));
};
//---------------------MarkAsDone-Functionality--------------------------------
    const markAsDone = (id) => {
        event.preventDefault();
    setToDo(
        toDo.map(todo =>
            todo.id === id ? { ...todo, isDone :true } : todo));
};   
//---------------------All upperCaseToDo-Functionality--------------------------------
    const upperCaseAllToDo = () => {
        //event.preventDefault();
    setToDo(toDo.map(todo => ({...todo ,text : todo.text.toUpperCase()  })))
}; 
//---------------------Form------------------------------------------------
    return (
        <form onSubmit={addToDO}>
    <input
        type="text"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        placeholder="Add a To-Do"
    />

    <button type="submit">Add</button>

    <h2>To Do Tasks</h2>

    <ul>
        {toDo.map((todo) => (
            <li key={todo.id}>
                <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                    {todo.text}
                </span>

                <button type="button" onClick={() => deleteToDo(todo.id)}>Delete</button>
                <button type="button" onClick={() => upperCaseToDo(todo.id)}>UC</button>
                <button type="button" onClick={() => markAsDone(todo.id)}>Done</button>
            </li>
        
        ))}
    </ul>
    <button type = "button" onClick={upperCaseAllToDo}> All UC</button>
    <button type = "button" onClick={deleteAllToDos}> All Delete</button>
</form>

    );
}
