import React, { useCallback } from "react";

const StopButton = React.memo(({ isStarted, setIsStarted }) => {
  const stopTimer = useCallback(() => {
    setIsStarted((prev) => !prev);
  }, [setIsStarted]);
  return (
    <div className="stop-watch-button">
      <button className="stop-btn" disabled={!isStarted ? true : false} onClick={stopTimer}>
        Stop 🛑
      </button>
    </div>
  );
});

export default StopButton;
