import { useState } from "react"

const index = () => {
    const [userInput, setUserInput] = useState('')
    const [todolist, setTodoList] = useState([])

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
        console.log(userInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setTodoList([
            userInput,
            ...todolist
        ])

        setUserInput('')
    }
    const handleDelete = (todo) => {
        const updatedArr = todolist.filter(todoItem => todolist.indexOf(todoItem) != todolist.indexOf(todo))
        
        setTodoList(updatedArr)
    }

    return (
        <div>
            <h3>Next Js Todo List</h3>
            <form>
                <input type="text" value={userInput} placeholder='Enter A TODO ITEM'  onChange={handleChange} /><button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {
                    todolist.length >= 1 ? todolist.map((todo, idx) => {
                        return <li key={idx}>{todo}<button onClick={(e) => {
                            e.preventDefault()
                            handleDelete(todo)
                        }}>Delete</button></li>
                    })
                    :'Enter a todo item'
                }
            </ul>
        </div>
    )

}
export default index