import React from 'react'
import NewTask from './NewTask.jsx'

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'></h2>
      {/* NEW TASK */}
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && { onAdd }(
        <p className='text-stone-800 my-4'>This projects dose not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {tasks.map((task) => (
            <li key={task.id} className='flex justify-between my-4'>
              <span>{task.text}</span>
              <button className='text-stone-700 hover:text-red-500'>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Tasks
