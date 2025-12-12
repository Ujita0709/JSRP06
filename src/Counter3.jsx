import { useReducer } from "react";
import CounterReducer from "./CounterReducer";

export default function Counter() {
  const [state, dispatch] = useReducer(CounterReducer, 0);

  return (
    <div>
      <p>現在の値: {state}</p>

      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>リセット</button>
    </div>
  );
}