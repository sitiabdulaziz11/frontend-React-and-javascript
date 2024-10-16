import React from 'react'

function App() {
    const [colorchange, setColorchange] = React.useState('white');
    
    function handleInput(type) {
        if (type === 'No') {
           setColorchange('red')
        } else if(type ==='Yes'){
            setColorchange('green')
        }
    }
   
    return (
    <div id="app">
      <h1 style={{color : colorchange}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleInput('Yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleInput('No')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
