import React, { useState } from "react";
import Timer from "../Timer/Timer";

function Page() {

    const [showTimer, setShowTimer] = useState(true);

    const handleClick = () => setShowTimer(!showTimer);

    return (
        <div>
            <button onClick={() => handleClick()}>{showTimer ? 'Hide Timer' : 'Show Timer'}</button>
            {showTimer ? <Timer /> : ""}
        </div>
    );
}

export default Page;
