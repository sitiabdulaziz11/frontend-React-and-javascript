// export default function Review({ feedback, student }) {
    
//     const [reviewName, setreviewName] = React.useState('');
//     const [student, setStudent] = React.useState('');
    
//     function handlefeedback(event) {
//         setreviewName(event.target.value);
//     }
    
//     function handlestudent(event) {
//         setStudent(event.target.value);
//     }
    
//     // let toReviewName = 
    
//   return (
//     <figure>
//       <blockquote>
//         <p>{feedback}</p>
//       </blockquote>
//       <figcaption>{student}</figcaption>
//     </figure>
//   );
// }

// import React from 'react';
// import Review from './Review'
// // don't change the Component name "App"
// function App() {
//   return (
//     <>
//       <section id="feedback">
//         <h2>Please share some feedback</h2>
//         <p>
//           <label>Your Feedback</label>
//           <textarea value={student} onChange={handleStudent} />
//         </p>
//         <p>
//           <label>Your Name</label>
//           <input type="text" value={reviewName} onChange={handlefeedback} />
//         </p>
//       </section>
//       <section id="draft">
//         <h2>Your feedback</h2>

//         <Review input={reviewName} textarea={student} />

//         <p>
//           <button>Save</button>
//         </p>
//       </section>
//     </>
//   );
// }

// export default App;