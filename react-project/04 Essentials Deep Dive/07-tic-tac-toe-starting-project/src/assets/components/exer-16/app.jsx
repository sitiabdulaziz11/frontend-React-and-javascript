import React from 'react';
import Review from './Review';

// don't change the component name "App"
function App() {
  const [feedback, setFeedback] = React.useState('');
  const [student, setStudent] = React.useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleStudentChange = (e) => {
    setStudent(e.target.value);
  };

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleFeedbackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={handleStudentChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;