import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./type/todo";
import { Text } from "./Text";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFeachData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Text color="red" fontSize="18px">
        あああああ
      </Text>
      <button onClick={onClickFeachData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
