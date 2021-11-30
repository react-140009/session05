import React, { useEffect, memo } from "react";

interface TodoModel {
  id: number;
  title: string;
}

interface Props {
  todo: TodoModel;
  onRemoveTodo: any;
}
function TodoItem({ todo, onRemoveTodo }: Props) {
  console.log("TodoItem ", todo.id);
  useEffect(() => {}, []);
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <button onClick={() => onRemoveTodo(todo.id)}>❌</button>
      </td>
    </tr>
  );
}

export default memo(TodoItem);
