import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../Redux/todoSlice'

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <div className='max-w-2xl mx-auto mt-8 p-6 bg-gray-800 rounded-lg'>
      <h2 className='text-2xl font-bold text-white mb-6 text-center'>
        My Todos
      </h2>
      {todos.length === 0 ? (
        <p className='text-gray-400 text-center'>
          No todos yet. Add one above!
        </p>
      ) : (
        <ul className='space-y-4'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='flex items-center justify-between p-4 bg-gray-700 rounded-md border border-gray-600 '
            >
              <span className='text-gray-200 font-medium'>{todo.text}</span>
              <button
                className='bg-red-500   text-white px-4 py-2 rounded-md font-medium'
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos
