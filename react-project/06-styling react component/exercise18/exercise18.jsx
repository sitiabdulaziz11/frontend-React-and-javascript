import React from 'react'

function App() {
    const [colorChange, setColorchange] = React.useState('')
    
    const handleChange = (type) => {
        if (type === 'yes') {
            setColorchange('highlight-green');
        }
        else if (type === 'no') {
            setColorchange('highlight-red');
        } 
    }
    
    
  return (
    <div id="app">
      <h1 className={colorChange}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleChange('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleChange('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
