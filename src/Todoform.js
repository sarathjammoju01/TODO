import React, {useState} from 'react'
import './style.css'

export default function TodoForm({addTodo}) {
    const [todoValue, setTodoValue] = useState(""); /* To handle input box -- making it a controlled component */
    

    function handleTodoInputChange(e){
        setTodoValue(e.target.value)
        // console.log(task);
    }

    function handleTodoFormSubmit(e){  
        e.preventDefault();
        addTodo(todoValue)
        setTodoValue("");
    }
    return(
      <>
      <h1 className='mainHeading'>SMART TO-DO LIST</h1>
      <form className='center style'>
        
        <input type = "text" name = "todo" value = {todoValue} onChange = {handleTodoInputChange} placeholder='Add a Task'/>
        
        <button onClick = {handleTodoFormSubmit} className='btnStyle'>Add Todo</button>
      </form>
      </>
    )
}
