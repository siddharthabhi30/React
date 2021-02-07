import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import {useState} from 'react'
import { Task } from "./components/Task"
import { AddTask } from "./components/AddTask"

function App() {

  const [showAddTask,setShowAddTask]=useState(false);

  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointement',
        day:'feb',
        reminder:true,
    },
    {
        id:2,
        text:'Doctors Appointement2',
        day:'feb',
        reminder:true,
    },
    {
        id:3,
        text:'Doctors Appointement3',
        day:'feb',
        reminder:true,
    },
    {
        id:4,
        text:'Doctors Appointement4',
        day:'feb',
        reminder:true,
    }
])

 const deleteTask=(id)=>{
  setTasks(tasks.filter(task=>task.id!=id))
 }

 const toggleReminder=(id)=>{
  
   setTasks(tasks.map(task=>task.id==id?{...task,reminder:!task.reminder}:task))
 }

 const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1

  const newTask={
    id,...task
  }
  setTasks([...tasks,newTask])
 }

  return (
    <div className="container">
   <Header onAdd={()=>setShowAddTask(!showAddTask)}
   showAdd={showAddTask}
   />
   {showAddTask?'':<AddTask onAdd={addTask}/>}
   {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
   onToggle={toggleReminder}
   />
   
   ):('NO Tasks')}
  
    </div>
  );
}

export default App;
