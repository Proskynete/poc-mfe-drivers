import React from "react";
import CounterAppOne from "./components/CounterAppOne";

const App = (props: any) => {
  console.log(props);

  return (
    <div>
      <div>Drivers</div>
      <div>
        <CounterAppOne />
      </div>
    </div>
  );
};

export default App;
