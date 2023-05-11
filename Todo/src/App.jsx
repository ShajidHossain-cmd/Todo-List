import TodoModal from "./TodoModal.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";
function App() {
  const [todoModalValue, setTodoModalValue] = useState("");
  const updateValue = (newValue) => {
    setTodoModalValue(newValue);
  };

  return (
    <div>
      <TodoModal updateValue={updateValue} />
      <TodoList value={todoModalValue} />
    </div>
  );
}

export default App;
