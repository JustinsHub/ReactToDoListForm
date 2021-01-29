import React from 'react'

const ToDo = ({todo, removeToDo}) => {

    const handleRemove = (e) => {
        removeToDo(todo)
    }
    return (
    <div>
        <ul>
        <li onClick={handleRemove}>{todo}</li>
        </ul>
    </div>
    )
}

export default ToDo