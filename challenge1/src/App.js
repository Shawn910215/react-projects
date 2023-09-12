import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // function handleStep() {}
  return (
    <div>
      <div>
        <button onClick={step > 0 ? () => setStep((s) => s - 1) : null}>
          -
        </button>
        <span>{`Step:${step}`}</span>
        <button onClick={(s) => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button
          onClick={count - step >= 0 ? (s) => setCount(count - step) : null}
        >
          -
        </button>
        <span>{`Count:${count}`}</span>
        <button onClick={(s) => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was`}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
