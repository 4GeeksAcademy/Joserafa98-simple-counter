import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
    return (
        <>
            <div className="row bg-secondary justify-content-center">
                <div className="clockIcon"> 
                    <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                </div>
                <div className="digitSix">{props.digitSix}</div>
                <div className="digitFive">{props.digitFive}</div>
                <div className="digitFour">{props.digitFour}</div>
                <div className="digitThree">{props.digitThree}</div>
                <div className="digitTwo">{props.digitTwo}</div>
                <div className="digitOne">{props.digitOne}</div>
            </div>
        </>
    );
}

let counter = 0;
setInterval(function() {
    const digitSix = Math.floor(counter / 100000) % 10;
    const digitFive = Math.floor(counter / 10000) % 10;
    const digitFour = Math.floor(counter / 1000) % 10;
    const digitThree = Math.floor(counter / 100) % 10;
    const digitTwo = Math.floor(counter / 10) % 10;
    const digitOne = counter % 10;
    
    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home 
            digitSix={digitSix} 
            digitFive={digitFive}
            digitFour={digitFour}
            digitThree={digitThree}
            digitTwo={digitTwo}
            digitOne={digitOne} 
        />
    );
    
    counter++;
}, 1000);

export default Home;
