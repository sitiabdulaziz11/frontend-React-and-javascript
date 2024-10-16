import React from 'react'
import Button from './Button.jsx';
import noprojectsImage from '../assets/noprojectsImage.png';

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className='mt-24 tex-centerd w-2/3'>
      <img src={noprojectsImage} className='w-16 h-16 object-contain'/>
      <h2 className='text-xl font-bold text-stone-500 my-4 '>No Project Selected</h2>
      <p className='text-stone-400  mb-4'>Select a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  )
}

export default NoProjectSelected
