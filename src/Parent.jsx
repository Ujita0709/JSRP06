import Child from "./Child.jsx";

function Parent() {
  const message = "こんにちは！";
  return <Child text={message} />;
}
export default Parent;
