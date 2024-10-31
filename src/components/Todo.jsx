
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input';
import Button from './Button';
// import twitterIcon from '../../assets/twitter.svg';
// import githubIcon from '../../assets/github.svg';

const Todo = () => {
    const [currTodo, setCurrTodo] = useState({
        title: '',
        description: '',
        completed: false,
      });
      const onInputChange = (e) => {
        setCurrTodo({
          ...currTodo,
          [e.target.name]: e.target.value,
        });
      };
      const addTodoHandler = async () => {
        const loadingToast = toast.loading('Adding Todo...', {
          style: {
            background: '#333',
            color: '#fff',
          },
        });
        try {
          if (!checkValid()) {
            // toast.dismiss(loadingToast);
            return;
          }
    
          if (!createTodo) {
            toast.error('Something went wrong', {
              style: {
                background: '#333',
                color: '#fff',
              },
            });
            return;
          }
    
          createTodo(currTodo);
          if (!error) {
            toast.success('Todo Added Successfully', {
              style: {
                background: '#333',
                color: '#fff',
              },
            });
            // toast.dismiss(loadingToast);
            clearCurrTodo();
          }
        } catch (err) {
          toast.error(err , {
            style: {
              background: '#333',
              color: '#fff',
            },
          });
        }
      };
  return (
    <div>
    <div className='w-[100vw]'>
    <div className='w-full flex justify-center text-center my-8'>
      <p className='font-bold text-4xl'>TODO App</p>
    </div>
    <div className='absolute flex justify-center space-x-6 top-8 right-8'>
      <Link to='https://twitter.com/its_ikD' target='_blank'>
        {/* <img src={twitterIcon} alt='twitter' className='w-10 h-10' /> */}
      </Link>
      <Link to='https://github.com/its-id/TODO-MERN-APP' target='_blank'>
        {/* <img src={githubIcon} alt='github' className='w-10 h-10' /> */}
      </Link>
      {/* <Button
        text='Logout'
        styleClass='py-1'
        onClick={logoutHandler}
        variant='danger'
      /> */}
    </div>
    <div className='flex w-[95%] mx-auto gap-8'>
      <div className='add-todo-container w-1/4'>
        <Input
          type='text'
          name='title'
          value={currTodo.title}
          placeholder='Enter Todo Title'
          styleClass='mb-4 shadow-md shadow-emerald-700'
          onChange={onInputChange}
        />
        <Input
          type='text'
          name='description'
          value={currTodo.description}
          placeholder='Enter Todo Description'
          styleClass='mb-4 shadow-md shadow-emerald-700'
          onChange={onInputChange}
        />
        <Button text='Add Todo' onClick={addTodoHandler} />
      </div>
      <div className='w-3/4 max-h-[95vh] flex flex-col gap-4'>
        {/* {todoLoading ? (
          <TodosLoader />
        ) : ( */}
          {todos &&
          todos?.length > 0 &&
          todos.map((todo, idx) => {
            return (
              <TodoItem
                key={idx}
                todo={todo}
                id={todo._id }
                deleteTodoHandler={deleteTodoHandler}
                markAsDone={markCompleteHandler}
              />
            );
          })}
        {/* )} */}
      </div>
    </div>
    <Toaster />
  </div>
    </div>
  )
}

export default Todo