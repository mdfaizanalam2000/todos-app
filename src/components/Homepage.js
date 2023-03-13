import React, { useState } from 'react'
import Todo from './Todo'
export default function Homepage() {
    const [todo, setTodo] = useState("");
    const [items, setItems] = useState([]);

    const showData = (event) => {
        setTodo(event.target.value);
    }

    const addTodo = (event) => {
        if (todo === "") {
            alert("Cannot add empty todo!");
        }
        else {
            setItems([...items, todo]);
            setTodo("");
        }
    }

    const deleteTodo = (selectedIndex) => {
        setItems(items.filter((item, index) => {
            return selectedIndex !== index;
        }))
    }
    return (
        <div className="outer-div">
            <div className="inner-div">
                <h1>React To-Dos</h1>
                <div className="input">
                    <input type="text" id='user-input' placeholder='Add an item' onChange={showData} value={todo} />
                    <button type="submit" onClick={addTodo}>+</button>
                </div>
                <ol>
                    {items.length === 0 ? "Add todos to display here" :
                        items.map((item, index) => {
                            return <Todo item={item} index={index} deleteTodo={deleteTodo} key={index} />
                        })}
                </ol>
            </div>
        </div>
    )
}
