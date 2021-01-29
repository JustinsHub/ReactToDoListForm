import React, {useState} from 'react'

const NewToDoForm = ({addToDo}) => {
    const INITIAL_STATE = {
        todo: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(formData)
        setFormData(INITIAL_STATE)
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">To Do:</label>
            <input 
            id="todo"
            type="text"
            placeholder="Type your to do"
            name="todo"
            value={formData.todo}
            onChange={handleChange}
            />
            <div>
                <button>Add To Do</button>
            </div>
        </form>
    </div>
    )
}

export default NewToDoForm