import React, { useCallback } from "react";
import { formattedTime } from "./FormatTimer";
const LapButton = React.memo(({ timer,isStarted,setLaps }) => {
  const timerLap = useCallback(() => {
    setLaps((pdata) => [...pdata, formattedTime(timer)]);
  }, [setLaps, timer]);

  return (
    <div className="stop-watch-button">
      <button
        className="lap-btn"
        disabled={!isStarted ? true : false}
        onClick={timerLap}
      >
        Lap 🏁
      </button>
    </div>
  );
});

export default LapButton;
