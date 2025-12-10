import { useState } from "react";
import Child from "./Child2.jsx";

function Parent() {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);

  return (
    <div>
      <p>親の count：{count}</p>
      <Child onAdd={add} />
    </div>
  );
}

export default Parent;
