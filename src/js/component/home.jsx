
import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter';

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => isCountingDown ? Math.max(prevSeconds - 1, 0) : prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isCountingDown]);

    const handleAddTime = () => {
        setSeconds(prevSeconds => prevSeconds + parseInt(inputValue, 10));
    };

    const handleSubtractTime = () => {
        setSeconds(prevSeconds => Math.max(prevSeconds - parseInt(inputValue, 10), 0));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const toggleCountDirection = () => {
        setIsCountingDown(prevState => !prevState);
    };

    return (
        <div>
            <SecondsCounter seconds={seconds} />
            <div className="controls d-flex flex-column align-items-center mt-3">
                <div className="mb-3 p-5 mx-auto">
                    <label htmlFor="formGroupExampleInput" className="form-label">Elige tu tiempo aquí</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="addingTime" 
                        placeholder="Elige tu tiempo" 
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleAddTime} className='btn btn-outline-dark mt-2 '>Add Time</button>
                <button onClick={handleSubtractTime} className='btn btn-outline-dark mt-2'>Subtract Time</button>
                <button onClick={toggleCountDirection} className='btn btn-outline-dark mt-2'>
                    {isCountingDown ? 'Switch to Count Up' : 'Switch to Count Down'}
                </button>
            </div>
        </div>
    );
};

export default Home;

