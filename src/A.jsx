import { useContext } from "react";
import { UserContext } from "./UserContext";

function A() {
  const user = useContext(UserContext);
  return <p>A: {user}</p>;
}

export default A;
