import React, { useEffect, useState } from "react";
import CounterAppOne from "./components/CounterAppOne";
import configureStore from "./store/storeConfig";

const App = (props: any) => {
  const [counterAppState, setCounterAppState] = useState(null);

  useEffect(() => {
    const globalStore = configureStore(setCounterAppState);
    setCounterAppState(globalStore.GetGlobalState().CounterApp);
  }, []);

  if (!counterAppState) return <>Loading...</>

  return (
    <div>
      <div>Drivers</div>
      <div>
        <CounterAppOne appState={counterAppState} />
      </div>
    </div>
  );
};

export default App;
