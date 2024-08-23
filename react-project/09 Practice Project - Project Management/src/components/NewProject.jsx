import React from 'react'
import Input from './Input.jsx'
import Modal from './Modal.jsx';
import { useRef } from 'react';

const NewProject = ({ onAdd }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      // show the error model
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2>Invalid Input</h2>
      <p>Oops ... lools like you forgot to enter a value.</p>
      <p>Please make shur you provide a valid value for every input field.</p>
    </Modal>
      <div className="w-[35rem] mt-16">
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
          <li><button
            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>

            Save
          </button></li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due date" />
          {/* <p>
         <label>Title</label>
         <input />    
        </p>
        <p>
         <label>Description</label>
         <textarea />  
        </p>
        <p>
         <label>Due Date</label>
         <input />    
        </p> */}

        </div>
      </div>
    </>

  )
}

export default NewProject
