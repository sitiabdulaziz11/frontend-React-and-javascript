import React from 'react'
import Input from './Input.jsx'

const NewProject = () => {
  return (
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu>
      <div>

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
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due date" />
      </div>
    </div>
  )
}

export default NewProject
