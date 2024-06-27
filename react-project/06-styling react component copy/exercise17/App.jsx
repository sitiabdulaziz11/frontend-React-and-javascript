import React from 'react';

function App() {
    const [colorchange, setColorchange] = React.useState('white');

    function handleInput(type) {
        if (type === 'No') {
            setColorchange('red');
        } else if (type === 'Yes') {
            setColorchange('green');
        }
    }

    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <div id="app">
            <h1 style={{ color: colorchange }}>CSS is great!</h1>
            <menu>
                <li>
                    {/* Passing argument using anonymous function */}
                    <button onClick={() => handleInput('Yes')}>Yes</button>
                </li>
                <li>
                    {/* Passing argument using anonymous function */}
                    <button onClick={() => handleInput('No')}>No</button>
                </li>
                <li>
                    {/* No argument needed, direct reference */}
                    <button onClick={handleClick}>Click Me</button>
                </li>
            </menu>
        </div>
    );
}

export default App;
