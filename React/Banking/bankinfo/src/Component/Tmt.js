import React, { useState, useEffect,  } from 'react';
function Tmt() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    function refreshClock() {
      setTime(new Date());
    }
    const timerID = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [setTime]);

  return <span>Time : {time.toLocaleTimeString()}</span>;
}
export default Tmt