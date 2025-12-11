import { atom, useAtom } from "jotai";

export const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;
