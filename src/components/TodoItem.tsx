import React from "react";

interface TodoModel {
  id: number;
  title: string;
}

let obj = { a: 1, b: 2, c: 3 };
function test({ a, b }: { a: number; b: number }) {}

export default function TodoItem({ todo, onRemoveTodo }: { todo: TodoModel }) {
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
