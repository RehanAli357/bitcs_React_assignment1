import React, { useEffect, useState } from "react";
import StartButton from "./Components/StartButton";
import StopButton from "./Components/StopButton";
import ResetButton from "./Components/ResetButton";
import LapButton from "./Components/LapButton";
import Laps from "./Components/Laps";
import StopWatchTimer from "./Components/StopWatchTimer";
import logo from "./Assets/Images/logo.jpeg";
const App = () => {
  const [timer, setTimer] = useState({
    hour: 0,
    min: 0,
    sec: 0,
    msec: 0,
  });
  const [isStarted, setIsStarted] = useState(false);
  const [tLaps, setLaps] = useState([]);
  useEffect(() => {
    let intervalRef;
    if (isStarted) {
      intervalRef = setInterval(() => {
        setTimer((pTime) => {
          let { sec, min, hour, msec } = pTime;
          msec += 10;
          if (msec >= 1000) {
            msec = 0;
            sec += 1;
          }
          if (sec >= 60) {
            sec = 0;
            min += 1;
          }
          if (min >= 60) {
            min = 0;
            hour += 1;
          }

          return { hour, min, sec, msec };
        });
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
        <StopWatchTimer timer={timer} />
        <div className="timer-button">
          <StartButton isStarted={isStarted} setIsStarted={setIsStarted} />
          <StopButton isStarted={isStarted} setIsStarted={setIsStarted} />
          <ResetButton isStarted={isStarted} setTimer={setTimer} />
          <LapButton timer={timer} setLaps={setLaps} isStarted={isStarted} />
        </div>

        <Laps totalLaps={tLaps} />
      </div>
    </React.Fragment>
  );
};

export default App;
