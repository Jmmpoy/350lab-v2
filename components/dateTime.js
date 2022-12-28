import React, { useState, useEffect } from "react";

function DateTime() {
  let time = new Date().toLocaleString();
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <>
      <li className="uppercase text-sm font-founders  ">
        {date.toLocaleTimeString()}
      </li>
      <li className="uppercase text-sm font-founders text-gray">
        {`© ${date.getFullYear()}`}
      </li>
    </>
  );
}

export default DateTime;
