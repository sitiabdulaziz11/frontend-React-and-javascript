import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)
React.useState


// don't change the Component name "App"
export default function App() {
    const [buttonClicked, setbuttonClicked] = React.useState();
    
    function handleButtonClick() {
        setbuttonClicked(true);
    }
    
    function handleProceedClick() {
        setbuttonClicked(false);
    }
    
    return (
      <div>
        {!buttonClicked ? (<button onClick={handleButtonClick}>Delete</button>)
       : 
        (<div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={handleProceedClick}>Proceed</button>
        </div>)}
      </div>
    );
}