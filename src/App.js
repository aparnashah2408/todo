import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [InputText, setInputText] = useState("")
  const [todos, settodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1 className="title">To-Do list</h1>
      </header>
      <Form InputText={InputText} setInputText={setInputText} settodos={settodos} todos={todos}/>
      <Todolist todos={todos} settodos={settodos}/>
    </div>
  );
}

export default App;