import { Actions } from "./actionEnums";

export const IncrementCounter = () => {
  return {
    type: Actions.INCREMENT_COUNTER,
    payload: null,
  };
};

export const DecrementCounter = () => {
  return {
    type: Actions.DECREMENT_COUNTER,
    payload: null,
  };
};
