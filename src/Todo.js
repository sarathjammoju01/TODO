import React from 'react';
import './style.css'

export default function Todo({todo, index, handleTodoDelete}) {
  return (
    <div className='todoStyle'>
        <div className='todos'>
            {todo}
        </div>
        <div className='TodoBtnStyle'>
          
          <button className='btnRed' onClick={() => handleTodoDelete(index)}>Delete</button>
        </div>
    </div>
  )
}
