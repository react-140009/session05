import React from "react";

interface TodoModel {
  id: number;
  title: string;
}

interface Props {
  todo: TodoModel;
  onRemoveTodo: any;
}
export function TodoItem({ todo, onRemoveTodo }: Props) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <button onClick={onRemoveTodo}>❌</button>
      </td>
    </tr>
  );
}
