import React from 'react';

import Workout from './Workout';

const workouts = [
  {
    title: 'Pushups',
    description: 'Do 30 pushups',
    time: 1000 * 60 * 3,
  },
  {
    title: 'Squats',
    description: 'Do 30 squats',
    time: 1000 * 60 * 2,
  },
  {
    title: 'Pullups',
    description: 'Do 10 pullups',
    time: 1000 * 60 * 3,
  },
];

function App() {
  const [completedWorkouts, setCompletedWorkouts] = React.useState([]);

  function handleWorkoutComplete(workoutTitle) {
    setCompletedWorkouts((prevCompletedWorkouts) => [
      ...prevCompletedWorkouts,
      workoutTitle,
    ]);
  }

  return (
    <main>
      <section>
        <h2>Choose a workout</h2>
        <ul>
          {workouts.map((workout) => (
            <li key={workout.title}>
              <Workout
                {...workout}
                onComplete={() => handleWorkoutComplete(workout.title)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed workouts</h2>
        <ul>
          {completedWorkouts.map((workoutTitle, index) => (
            <li key={index}>{workoutTitle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
