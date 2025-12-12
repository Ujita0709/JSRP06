import { useContext } from "react";
import { UserContext } from "./UserContext";

function B() {
  const user = useContext(UserContext);
  return <p>B: {user}</p>;
}

export default B;
