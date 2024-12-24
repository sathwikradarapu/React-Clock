import { useState } from "react";
import { useEffect } from "react";
function Time() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timeID = setInterval(() => {
      setDate(new Date());
    });
    return () => {
      clearInterval(timeID);
    };
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <p>
          This is the current time:{date.toLocaleDateString()}-
          {date.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
export default Time;
