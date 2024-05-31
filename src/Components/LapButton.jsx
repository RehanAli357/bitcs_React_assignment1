import React, { useCallback } from "react";

const LapButton = React.memo(({ timer, setLaps,isStarted }) => {
  const timerLap = useCallback(() => {
    setLaps((pdata) => [...pdata, timer]);
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
