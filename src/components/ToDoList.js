import React, {useState} from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'

const ToDoList = () =>{
    const [todos, setTodos] = useState([])
    const addToDo = (todo) => {
        setTodos(todos => [...todos, {...todo}])
    }

    return (
        <div className="App">
        <NewToDoForm addToDo={addToDo}/>
        {todos.map(t => <ToDo todo={t.todo}/>)}
        </div>
    );
}

export default ToDoList