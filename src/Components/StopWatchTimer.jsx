import React, { useMemo } from "react";

const StopWatchTimer = React.memo(({ timer }) => {
  const formattedTime = useMemo(() => {
    const { hour, min, sec, msec } = timer;
    const format = (val) => (val >= 10 ? val : `0${val}`);
    return `${format(hour)} hr : ${format(min)} min : ${format(sec)} sec : ${format(Math.floor(msec / 10))} msec`;
  }, [timer]);

  return (
    <div className="timer">
      <p>{formattedTime}</p>
    </div>
  );
});

export default StopWatchTimer;
