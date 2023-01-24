import React, { useState } from "react";

function Timer() {

    const [timer, setTimer] = useState[60];

    const timerInterval = setInterval(() => setTimer(t => t = - 1), 1000);

    window.onbeforeunload = () => {
        clearInterval(timerInterval);
    }

    return (
        <p>Counting: {timer}</p>
    );
}

export default Timer;
