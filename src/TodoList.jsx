import { useState } from "react";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => removeTodo(i)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
