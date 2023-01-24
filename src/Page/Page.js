import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Timer from '../Timer/Timer';

function Page() {
    const [showTimer, setShowTimer] = useState(false);

    const handleClick = () => setShowTimer(!showTimer);
    return (
        <>
            <button onClick={() => handleClick()}>{showTimer ? 'Hide timer' : 'Show timer'}</button>
            {showTimer && <Timer initialState={60} />}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Page />
    </React.StrictMode>
);