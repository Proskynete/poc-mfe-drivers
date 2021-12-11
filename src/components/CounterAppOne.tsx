import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { GlobalStore } from "redux-micro-frontend";
import { Actions } from "../store/actionEnums";
import { IncrementCounter } from "../store/counterActions";

interface CounterProps {
  appState: any;
}

const Counter: React.FC<CounterProps> = ({ appState }) => {
  const [count, setCount] = useState(appState.count);

  const incrementCounter = () => {
    const globalStore = GlobalStore.Get();
    globalStore.DispatchAction("CounterApp", IncrementCounter());
    setCount(globalStore.GetGlobalState().CounterApp.count);
  };

  return (
    <div>
      <p>{count}</p>
      <Button onClick={incrementCounter}>Click me</Button>
    </div>
  );
};

export default Counter;
