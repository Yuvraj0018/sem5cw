import React, { useState } from "react";
import './components/index.css';

function App(){
  const[todoList, setTodoList]= useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputHandler = () => {
    if(inputValue.trim() !== ""){
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  }

  const deleteHandler = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo</h1>
        <p>Simple todo app</p>
      </header>

      <div className="input-row">
        <input 
          type="text" 
          placeholder="Add a task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" onClick={inputHandler}>Add</button>
      </div>

      <ul className="todo-list">
        {todoList.length === 0 ? (
          <li className="todo-item">
            <div className="todo-left">
              <div className="todo-text">No tasks added yet</div>
            </div>
          </li>
        ) : (
          todoList.map((data, index) => (
            <li className="todo-item" key={index}>
              <div className="todo-left">
                <div className="check checked">✓</div>
                <div className="todo-text completed">{data}</div>
              </div>
              <div className="actions">
                <button className="action-btn">Edit</button>
                <button className="action-btn delete" onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
