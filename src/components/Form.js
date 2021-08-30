import React from 'react'

const Form = ({InputText ,setInputText, settodos, todos}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }
    const submitTodosHandler = (e) =>{
        e.preventDefault();
        settodos([
            ...todos, {text: InputText, completed: false ,id: Math.random()*1000}
        ]);
        setInputText("");
    }
    return (
        <div>
            <form className="form">
                <input className="input" value={InputText} onChange={inputTextHandler} type="text" placeholder="Work To Do" name="namefield" className="input"/>
                    <button className="submit" onClick={submitTodosHandler} type="submit">
                        <i className="far fa-plus-square"></i>
                    </button>
            </form>
        </div>
    )
}

export default Form;