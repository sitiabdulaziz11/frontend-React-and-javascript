
import React from 'react';
import useState from 'react'

import './styles.css';

// don't change the Component name "App"
export default function App() {
    // const [clicks, setClicks] = React.useState('')

    const clickHandler = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <h2>You're logged in!</h2>
            <p>Welcome to your user profile!</p>
            {/* <button onClick={() => clickHandler('clicks')}>Click me!</button> */}
            <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}