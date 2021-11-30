import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
};

export default Counter;
