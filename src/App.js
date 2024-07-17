import React, {useState} from 'react'
import TodoForm from './Todoform'
import TodoDisplay from './TodoDisplay';

export default function App()
{
  const [todoList, setTodoList] = useState([]);
  function addTodo(todo){
    setTodoList((prevTodoList) => {
      return [...prevTodoList, todo]
    })
  }

  function handleTodoDelete(index){
    console.log('attempted to delete', index);
    const newArr = todoList.filter((todo, i) => {
      return i !== index;
    })
    setTodoList(newArr);
  }

  return(
    <>
        <TodoForm addTodo={addTodo} />

        <TodoDisplay 
          todoList = {todoList}
          handleTodoDelete = {handleTodoDelete}
        />
    </>
  )
}