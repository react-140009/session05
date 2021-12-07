import React, { useEffect, memo } from "react";

interface TodoModel {
  id: number;
  title: string;
  done: boolean;
}

interface Props {
  todo: TodoModel;
  onRemoveTodo: any;
  onToggleTodo: any;
}
export const TodoItem = memo(({ todo, onRemoveTodo, onToggleTodo }: Props) => {
  console.log("TodoItem ", todo.id);
  useEffect(() => {}, []);
  return (
    <tr>
      <td>{todo.done ? "✅" : "⭕"}</td>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <button onClick={() => onRemoveTodo(todo.id)}>❌</button>
        <button onClick={() => onToggleTodo(todo.id)}>Toggle</button>
      </td>
    </tr>
  );
});
