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
  useEffect(() => {
    console.log("TodoItem ", todo.id);
  }, []);
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

export default memo(TodoItem);
