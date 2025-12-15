import { useAtom } from "jotai";
import { usersAtom } from "./atoms";

function UserList() {
  const [users, setUsers] = useAtom(usersAtom);

  const remove = (i) => {
    setUsers(users.filter((_, index) => index !== i));
  };

  return (
    <ul>
      {users.map((u, i) => (
        <li key={i}>
          {u}
          <button onClick={() => remove(i)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
