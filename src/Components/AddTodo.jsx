import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/todoSlice'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTodo(input.trim()))
      setInput('')
    }
  }

  return (
    <div className='max-w-2xl mx-auto mt-8 p-6 bg-gray-800 rounded-lg '>
      <h2 className='text-2xl font-bold text-white mb-6 text-center'>
        Add New Todo
      </h2>
      <form onSubmit={addTodoHandler} className='flex gap-4'>
        <input
          className='flex-1 px-4 py-2 border text-white rounded-md  '
          type='text'
          placeholder='Enter a new todo...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type='submit'
          className='bg-blue-500  text-white px-6 py-2 rounded-md font-medium '
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
