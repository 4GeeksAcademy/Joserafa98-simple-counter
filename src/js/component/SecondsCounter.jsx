import React from 'react';

const SecondsCounter = ({ seconds }) => {
    const digitSix = Math.floor(seconds / 100000) % 10;
    const digitFive = Math.floor(seconds / 10000) % 10;
    const digitFour = Math.floor(seconds / 1000) % 10;
    const digitThree = Math.floor(seconds / 100) % 10;
    const digitTwo = Math.floor(seconds / 10) % 10;
    const digitOne = seconds % 10;

    return (
        <div className="seconds-counter">
            <div className="clockIcon"> 
                <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                </svg>
            </div>
            <div className="digit">{digitSix}</div>
            <div className="digit">{digitFive}</div>
            <div className="digit">{digitFour}</div>
            <div className="digit">{digitThree}</div>
            <div className="digit">{digitTwo}</div>
            <div className="digit">{digitOne}</div>
        </div>
    );
};

export default SecondsCounter;

