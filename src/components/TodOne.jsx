import React, { useEffect, useState } from 'react'
import TodoTask from './TodoTask'
import Button from './Button'

const TodOne = (props) => {
  // localStorage.clear()
  const [AddText, setAddText]=useState("");
  const [textTasks,setTextTasks]=useState([]);
  
  function handleClick(e){
    if(AddText!=""){
      console.log(AddText)
      let updatedTodos=[...textTasks,{Words:AddText}];
      setTextTasks(updatedTodos);
      setAddText("")
      console.log(updatedTodos)
      
      console.log(textTasks)
    }
  }
  function handleDlt(e){
    let updatedTodos=textTasks.filter((testTask,index)=>{
    return index!=e
    })
    console.log(JSON.stringify(updatedTodos))
    setTextTasks(updatedTodos)
  
  }
  return (
    <>
    <div className='flex pt-3' >
        <textarea id="inTodo" value={AddText} onChange={(e)=>setAddText(e.target.value)} type="text" className='Desc-textarea h-40 border-2 rounded-md p-3 w-full '  placeholder='Write your task..'/>
        <span className='flex items-center'>

        <Button type="submit" text='ADD' variant='success' styleClass='px-4 py-2  m-2' onClick={handleClick}></Button>
        </span>
    </div>
    <TodoTask textTasks={textTasks} handleDlt={handleDlt}></TodoTask>
    </>
  )
}

export default TodOne