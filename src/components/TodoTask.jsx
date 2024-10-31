import React, { useState } from 'react'
import Button from './Button'
import TodOne from './TodOne'

const TodoTask = ({textTasks,handleDlt}) => {
    const deleteMe=(index)=>{
        handleDlt(index)
        console.log(index,"hi")
    }
  return (
    <>{
        textTasks?.map((textTask,i)=>{
            if(textTask.Words)
            return<>
        <div key={i} className=' flex justify-between items-center h-30 w-full overflow-hidden bg-slate-600 py-7 px-5 rounded-md my-3' style={{color:"red"}}>
        <div className='content'>{textTask.Words}</div>    
        <div className='flex '>
           <span>
           <Button text='Delete'  onClick={()=>deleteMe(i)}/>
            </span>
        </div>
    </div>
            </>
        })
    }
    </>
  )
}

export default TodoTask