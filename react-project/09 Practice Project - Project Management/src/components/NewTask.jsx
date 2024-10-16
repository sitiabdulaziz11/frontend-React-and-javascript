import React from 'react'
import { useState } from 'react'

const NewTask = ({onAdd}) => {
  // useRef();
  const [enterdTask, setEnterdTask] = useState('');

  function handleChange(event) {
    setEnterdTask(event.target.value);
  }

  function handleClick() {
    if (enterdTask.trim() === '') {
      return;
    }
    onAdd(enterdTask);
    setEnterdTask('');
  }

  return (
    <div className='flex items-center gap-4'>
      <input type='text'
      className='w-64 px-2 py-1 rounded-sm bg-stone-200'
      onChange={handleChange}
      value={enterdTask}
      />
      <button className='text-stone-700 hover:text-stone-950'
      onClick={handleClick}
      >Add Tasks</button>
    </div>
  )
}

export default NewTask
