import TodoModal from "./TodoModal.jsx";
import TodoList from "./TodoList.jsx";
import Add from "./Add.jsx";
import { useState } from "react";
function App() {
  const [todoModalValue, setTodoModalValue] = useState("");
  const updateValue = (newValue) => {
    setTodoModalValue(newValue);
  };

  return (
    <div>
      {/* <TodoModal updateValue={updateValue} />         modal version           */}
      <Add updateValue={updateValue} />
      <TodoList value={todoModalValue} />
    </div>
  );
}

export default App;
