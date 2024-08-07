import React from 'react';
import Toast from './Toast';


function App() {
    const [showToast, setShowToast] = React.useState(false);
   const [toastMessage, setToastMessage] = React.useState('');
    
  function handleEnrol() {
    // Todo: Show toast
    
    setToastMessage('You have successfully enrolled!');
    setShowToast(true);
    setTimeout(() => {
      // Todo: hide toast
      setShowToast(false);
      setToastMessage('');
    }, 3000);
  }

  return (
    <div id="app">
      {/* Todo: Render <Toast /> component (conditionally) here */}
      {showToast && <Toast message={toastMessage} />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
      