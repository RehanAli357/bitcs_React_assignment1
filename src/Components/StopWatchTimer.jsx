import React from "react";
import { formattedTime } from "./FormatTimer";
const StopWatchTimer = React.memo(({ timer }) => {
 
  return (
    <div className="timer">
      <p>{formattedTime(timer)}</p>
    </div>
  );
});

export default StopWatchTimer;
