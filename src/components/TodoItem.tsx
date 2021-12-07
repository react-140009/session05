import React, { useEffect, memo, useContext } from "react";
import { ColorContext } from "../App";
interface TodoModel {
  id: number;
  title: string;
  done: boolean;
}

interface Props {
  todo: TodoModel;
  onRemoveTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}
export const TodoItem = memo(({ todo, onRemoveTodo, onToggleTodo }: Props) => {
  const [color] = useContext(ColorContext);
  console.log("TodoItem ", todo.id, color);
  useEffect(() => {}, []);
  return (
    <tr>
      <td>{todo.done ? "✅" : "⭕"}</td>
      <td>{todo.id}</td>
      <td style={{ color }}>{todo.title}</td>
      <td>
        <button onClick={() => onRemoveTodo(todo.id)}>❌</button>
        <button onClick={() => onToggleTodo(todo.id)}>Toggle</button>
      </td>
    </tr>
  );
});
