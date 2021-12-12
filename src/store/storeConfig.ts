import { GlobalStore, IGlobalStore } from "redux-micro-frontend";
import { Actions } from "./actionEnums";
import { CounterReducer } from "./counterReducer";

const configureStore = (setterFunc: any): IGlobalStore => {
  const globalStore = GlobalStore.Get();

  globalStore.CreateStore("CounterApp", CounterReducer, []);
  globalStore.RegisterGlobalActions("CounterApp", [
    Actions.DECREMENT_COUNTER,
    Actions.INCREMENT_COUNTER,
  ]);

  globalStore.SubscribeToGlobalState("CounterApp", (state) => { console.log({state}) })

  return globalStore;
};

export default configureStore;
