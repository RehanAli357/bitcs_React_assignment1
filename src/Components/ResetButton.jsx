import React, { useCallback } from "react";

const ResetButton = React.memo(({ isStarted, setTimer,setLaps }) => {
  const resetTimer = useCallback(() => {
    setTimer(0);
    setLaps([])
  }, [setTimer]);
  return (
    <div className="stop-watch-button">
      <button className="reset-btn" disabled={isStarted ? true : false} onClick={resetTimer}>
        Reset ⏱️
      </button>
    </div>
  );
});

export default ResetButton;
