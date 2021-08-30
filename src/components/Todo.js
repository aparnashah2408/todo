import React from 'react'

const todo = ({text, todos, todo, settodos}) => {
    const deleteHandler = () => {
        settodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = () => {
        settodos(todos.map((item) => {
            if (todo.id === item.id){
                return{
                    ...item, completed : !item.completed
                }
            }
            return item;
        }))
    }


    return (
        <div className="todo">
            <div className="list-container">
            <li className={todo.completed ? "completed" : ""}>{text}</li>
            </div>
            <div className="list-icons">
                <button onClick={completeHandler} ><i className="fas fa-check-square"></i></button>
                <button onClick={deleteHandler}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    )
}
export default todo;