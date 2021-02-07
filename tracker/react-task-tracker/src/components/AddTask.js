import React from 'react'

import {useState} from 'react'

export const AddTask = ({onAdd}) => {

  const[text,setText]=useState('');
  const[day,setDay]=useState('');
  const[reminder,setReminder]=useState('');

  const onSubmit=(e)=>{
    e.preventDefault()

    onAdd({text,day,reminder})
    setReminder('')
    setDay('')
    setReminder('')


  }
    return (
      <form className='add-form' onSubmit={onSubmit}>
         <div className='form-control' 
         >
           <label>
             Task
           </label>

           <input type='text' placeholder='Add Task'
         value={text}
         onChange={(e)=>setText(e.target.value)}
             
           ></input>
         </div>
         <div className='form-control'>
           <label>
             day and time
           </label>

           <input type='text' value={day}
             onChange={(e)=>setDay(e.target.value)}></input>
         </div>
         <div className='form-control form-control-check'>
           <label>
             set reminder
           </label>

           <input type='checkbox'
           checked={reminder}
             value={reminder}
             onChange={(e)=>setReminder(e.currentTarget.checked)}
           ></input>
         </div>
         <input type='submit' value='save task' className='btn btn-block'></input>
      </form>
    )
}
