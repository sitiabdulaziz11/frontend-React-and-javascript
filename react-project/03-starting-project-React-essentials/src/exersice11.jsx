import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [buttonClicked, setbuttonClicked] = React.useState(false);
    
    const handleButtonClick = () => {
        setbuttonClicked(true);
    }
    
    return (
        <div>
            <p className={buttonClicked ? 'active' : ''}>Style me!</p>
            <button onClick={handleButtonClick}>Toggle style</button>
        </div>
    );
}
