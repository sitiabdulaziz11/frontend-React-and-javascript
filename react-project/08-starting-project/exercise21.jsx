import React from 'react';
import {useRef} from 'react';

function App() {
    const fileInputRef = useRef('');
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file"
        ref={fileInputRef}
        accept="image/*" />
        <button onClick={handleButtonClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;