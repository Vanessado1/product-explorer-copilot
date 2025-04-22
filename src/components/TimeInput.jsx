import React from "react";

const TimeInput = ({ setTimeLeft }) => {
    const handleChange = (event) => {
        const minutes = parseInt(event.target.value, 10);
        setTimeLeft(minutes * 60); // Convert minutes to seconds
    };

    return (
        <div>
            <label>Set Timer (Minutes):</label>
            <input type="number" min="1" max="60" onChange={handleChange} />
        </div>
    );
};

export default TimeInput;
