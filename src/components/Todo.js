import React from 'react'

export default function Todo(props) {
    return (
        <>
            <div className="todo">
                <button onClick={() => props.deleteTodo(props.index)}>X</button>
                <li>{props.item}</li>
            </div>
        </>
    )
}