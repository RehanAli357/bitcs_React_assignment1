import React from "react";

const Laps = React.memo(({ totalLaps }) => {
  return (
    <div className="timer-laps">
      <h3>Total Laps</h3>
      <ul>
        {totalLaps.length > 0 ? (
          totalLaps.map((data, index) => (
            <li key={index}>
             {data}
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
