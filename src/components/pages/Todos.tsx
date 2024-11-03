import axios from "axios";
import PrimaryButton from "../atoms/button/PrimaryButton";
import { useState } from "react";
import Todo from "../molecules/todo/Todo";
import { TodosProps } from "../../types/todo";

export default function Todos() {
  const [todos, setTodos] = useState<TodosProps[]>();
  const onClickFetchTodos = () => {
    axios
      .get<TodosProps[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div>
      <PrimaryButton onClick={onClickFetchTodos}>todo取得</PrimaryButton>
      {todos?.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
