import React from "react";

const ProgressBar = ({ timeLeft, initialTime }) => {
    const progress = ((timeLeft / initialTime) * 100).toFixed(0);

    return (
        <div style={{ width: "100%", background: "#ddd", height: "20px", borderRadius: "5px" }}>
            <div style={{
                width: `${progress}%`,
                background: "orange",
                height: "100%",
                borderRadius: "5px",
                transition: "width 1s"
            }}></div>
        </div>
    );
};

export default ProgressBar;
