import React, { useEffect, useState } from "react";
import StartButton from "./Components/StartButton";
import StopButton from "./Components/StopButton";
import ResetButton from "./Components/ResetButton";
import LapButton from "./Components/LapButton";
import Laps from "./Components/Laps";
import StopWatchTimer from "./Components/StopWatchTimer";
import logo from "./Assets/Images/logo.jpeg";

const App = () => {
  const [stimer,setStimer]=useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [tLaps, setLaps] = useState([]);
  useEffect(() => {
    let intervalRef;
    if (isStarted) {
      intervalRef = setInterval(() => {
        setStimer((ptime)=>ptime+1)
      }, 10);
    }
    return () => clearInterval(intervalRef);
  }, [isStarted]);
    return (
    <React.Fragment>
      <header>
        <img src={logo} alt="logo" />
        <h1>ReactJs Assignment 1</h1>
      </header>
      <div className="stop-watch">
        <StopWatchTimer timer={stimer} />
        <div className="timer-button">
          <StartButton isStarted={isStarted} setIsStarted={setIsStarted} />
          <StopButton isStarted={isStarted} setIsStarted={setIsStarted} />
          <ResetButton isStarted={isStarted} setTimer={setStimer} setLaps={setLaps}/>
          <LapButton timer={stimer} setLaps={setLaps} isStarted={isStarted} />
        </div>

        <Laps totalLaps={tLaps} />
      </div>
    </React.Fragment>
  );
};

export default App;
