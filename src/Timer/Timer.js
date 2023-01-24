import { useEffect, useState } from 'react';

function Timer({ initialState }) {
    const [counter, setCounter] = useState(initialState);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevState => prevState > 0 ? prevState - 1 : 0);
            console.log('cyk');
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('unmount');
        };
    }, []);

    return <div>Counting: {counter !== 0 ? counter : "Koniec odliczania"}</div>;
}

export default Timer;