import React, { useCallback } from "react";

const ResetButton = React.memo(({ isStarted, setTimer }) => {
  const resetTimer = useCallback(() => {
    setTimer({
      hour: 0,
      min: 0,
      sec: 0,
      msec:0
    });
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
