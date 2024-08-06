import React from 'react';

export default function Workout({ title, description, time, onComplete }) {
  const timer = React.useRef(null);
  function handleStartWorkout() {
    // Todo: Start timer
    if (timer.current) {
      clearTimeout(timer.current);
    } // work with or with out this part
    timer.current = setTimeout(() => {
      handleStopWorkout();
    }, time)
  }
  function handleStopWorkout() {
    // Todo: Stop timer
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    onComplete();
  }
  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
