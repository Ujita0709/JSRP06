import { useReducer } from "react";
import formReducer from "./FormReducer";  // reducer側も default export推奨

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    age: "",
    hobby: ""
  });

  return (
    <div>
      <input onChange={(e) => dispatch({ type: "setName", payload: e.target.value })} />
      <input onChange={(e) => dispatch({ type: "setAge", payload: e.target.value })} />
      <input onChange={(e) => dispatch({ type: "setHobby", payload: e.target.value })} />

      <p>{state.name} / {state.age} / {state.hobby}</p>
    </div>
  );
}
