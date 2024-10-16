import React from 'react';
import useState from 'react'

// don't change the Component name "App"
export default function App() {
    // const [isRed, setIsRed] = React.useState('');
    const [colors, setColors] = React.useState('');
    
    // const toggle = () => {
    //     setColors(colors=> !colors);
    // };
    const toggle = () => {
        setColors(colors=> !colors);
        // setIsRed(isRed=> !isRed);
    };
    
    return (
        <div>
            <p style={{
                // color: isRed ? 'red' : 'white'
                color: colors ? 'red' : 'white'
            }}>Style me!</p>
            <button onClick={toggle}>Toggle style</button>
        </div>
    );
}
   