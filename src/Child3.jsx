import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Child3() {
  // Provider から渡ってきた { user, setUser } を受け取る
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <p>Child3 のユーザー: {user}</p>
      <button onClick={() => setUser("Hanako")}>変更</button>
    </div>
  );
}