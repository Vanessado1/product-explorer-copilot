import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS file
import TimeInput from "./components/TimeInput";
import ProgressBar from "./components/ProgressBar";

const EggTimer = () => {
    const [timeLeft, setTimeLeft] = useState(180);
    const [initialTime, setInitialTime] = useState(180);
    const [running, setRunning] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        let timer;
        if (running && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setShowAlert(true); // Show the custom alert
            setRunning(false);
        }
        return () => clearInterval(timer);
    }, [running, timeLeft]);

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Egg Timer App</h1>
            <TimeInput setTimeLeft={(newTime) => { setTimeLeft(newTime); setInitialTime(newTime); }} />
            <h2 className="timer-display">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </h2>
            <ProgressBar timeLeft={timeLeft} initialTime={initialTime} />
            <div className="button-container">
                <button className="control-button start-button" onClick={() => setRunning(true)}>Start</button>
                <button className="control-button pause-button" onClick={() => setRunning(false)}>Pause</button>
                <button className="control-button reset-button" onClick={() => { setTimeLeft(initialTime); setRunning(false); setShowAlert(false); }}>Reset</button>
            </div>

            {showAlert && (
                <div className="alert-overlay">
                    <div className="alert-box">
                        <p>Your egg is done!</p>
                        <button className="alert-close-button" onClick={closeAlert}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EggTimer;
