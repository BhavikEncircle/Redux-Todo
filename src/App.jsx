import React from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Pages/TodoApp/Todos'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-400 py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-800 text-center mb-8'>
          Redux Todo App
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
