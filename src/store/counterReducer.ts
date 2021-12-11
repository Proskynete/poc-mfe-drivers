import { Actions } from "./actionEnums";

const initialState = {
  count: 0,
};

export const CounterReducer = (
  state = initialState,
  action: { type: Actions }
) => {
  if (action.type === "INCREMENT_COUNTER")
    return { ...state, count: state.count + 1 };
  if (action.type === "DECREMENT_COUNTER")
    return { ...state, count: state.count - 1 };

  return state;
};
