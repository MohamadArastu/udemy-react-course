import React from "react";

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
      <h1>Hello StackBlitz!</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p>{advice}</p>
      <Message count={adviceCount} />
    </div>
  );
}

function Message(props) {
  return <p>You got {props.count} advices so far</p>;
}
