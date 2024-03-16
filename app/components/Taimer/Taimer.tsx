"use client"

import { useState } from "react";

const Timer = (): JSX.Element => {

    let [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date)
  }, 1000)

  return (
    <div>
      Текущее время <span>{time.toLocaleTimeString()}</span>
    </div>
  );
}


export { Timer }