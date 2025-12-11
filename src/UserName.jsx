import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

const nameAtom = atomWithStorage("username", "");

function UserName() {
  const [name, setName] = useAtom(nameAtom);

  return (
    <div>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <p>現在の名前：{name}</p>
    </div>
  );
}

export default UserName;
