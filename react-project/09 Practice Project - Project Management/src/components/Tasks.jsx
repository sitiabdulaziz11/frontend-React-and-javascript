import React from 'react'
import NewTask from './NewTask.jsx'

const Tasks = () => {
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'></h2>
        {/* NEW TASK */}
        <NewTask />
        <p className='text-stone-800 my-4'>This projects dose not have any tasks yet.</p>
        <ul></ul>
    </section>
  )
}

export default Tasks
