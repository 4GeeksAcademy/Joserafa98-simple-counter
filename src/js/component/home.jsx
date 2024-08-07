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
                <div className="clockIcon"><i className="fa-regular fa-clock"></i></div>
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
