import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <h2>It is {time} o clock</h2>;
}

function Message(props) {
  return <p>You got {props.count} advices so far</p>;
}

export default function App() {
  const [advice, setAdvice] = React.useState("");
  const [adviceCount, setAdviceCounter] = React.useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceCounter((x) => x + 1);
  }

  React.useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={adviceCount} />
      <Clock />
    </div>
  );
}
