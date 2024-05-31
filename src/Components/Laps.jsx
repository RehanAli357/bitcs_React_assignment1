import React from "react";

const Laps = React.memo(({ totalLaps }) => {
  return (
    <div className="timer-laps">
      <h3>Total Laps</h3>
      <ul>
        {totalLaps.length > 0 ? (
          totalLaps.map((data, index) => (
            <li key={index}>
              {data.hour >= 10 ? data.hour : ` 0${data.hour}`} hr :
              {data.min >= 10 ? data.min : ` 0${data.min}`} min :
              {data.sec >= 10 ? data.sec : ` 0${data.sec}`} sec :
              {data.msec >=100 ? ` ${Math.floor(data.msec / 10)}` : ` 0${Math.floor(data.msec / 10)}`} msec
            </li>
          ))
        ) : (
          <p style={{textAlign:"center"}}>No Laps have been recorded yet</p>
        )}
      </ul>
    </div>
  );
});

export default Laps;
