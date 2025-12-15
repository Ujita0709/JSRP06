import { useState } from "react";
import { useAtom } from "jotai";
import { usersAtom } from "./atoms";

function UserForm() {
  const [users, setUsers] = useAtom(usersAtom);
  const [text, setText] = useState("");

  const addUser = () => {
    if (!text.trim()) return;
    setUsers([...users, text]);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addUser}>追加</button>
    </div>
  );
}

export default UserForm;
