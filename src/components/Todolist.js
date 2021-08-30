import React from "react"
import Todo from "./Todo"

const Todolist = ({todos, settodos}) =>{
    return(
        <div className="container">
            <ul className="todolist">
                {todos.map((todo) => (
                    <Todo text={todo.text} todos={todos} settodos={settodos} todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

export default Todolist;