import React from 'react'
import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

// let timer;

const TimerChallenge = ({ title, targetTime }) => {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsactive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        // setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        dialog.current.open();
        // timer.current = setTimeout(() => {
        timer.current = setInterval(() => {
            // setTimerExpired(true);
            // dialog.current.showModal();
            // dialog.current.open();
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
            // }, targetTime * 1000);
        }, 10);

        // setTimerStarted(true);
    }
    function handleStop() {
        // clearTimeout(timer.current);
        clearInterval(timer.current);
    }

    return (
        <>
            {/* {timerExpired && ( */}
            {/* <ResultModal ref={dialog} targetTime={targetTime} result="lost" /> */}
            <ResultModal ref={dialog} targetTime={targetTime}
            remainingTime={timeRemaining}
            onReset={handleReset}
            />

            {/* )} */}
            <section className='challenge'>
                {/* <h2>{title}</h2>
                {timerExpired && <p>You lost!</p>} */}
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    {/* <button onClick={timerStarted ? handleStop : handleStart}> */}
                    <button onClick={timerIsactive ? handleStop : handleStart}>
                        {timerIsactive ? 'Stop ' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsactive ? 'active' : undefined}>
                    {timerIsactive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>

    )
}

export default TimerChallenge
