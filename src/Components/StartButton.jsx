import React, { useCallback } from "react";

const StartButton = React.memo(({ isStarted, setIsStarted }) => {
  const startTimer = useCallback(() => {
    setIsStarted((prev) => !prev);
  }, [setIsStarted]);

  return (
    <div className="stop-watch-button">
      <button className="start-btn" disabled={isStarted ? true : false} onClick={startTimer}>
        Start 🟢
      </button>
    </div>
  );
});

export default StartButton;
