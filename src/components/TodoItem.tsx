import React, { useEffect, memo, useContext } from "react";
import { ColorContext } from "../App";
import styles from "./TodoItem.module.css";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// const template = (a, b) => {}
const str = `aaa ${1 + 2}`; //(~ tilda, ` backtick);

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
      <td>
        <div className={styles.title}>{todo.id}</div>
      </td>
      {/* <td style={{ color }}>{todo.title}</td> */}
      <td>
        <Title>{todo.title}</Title>
      </td>
      <td>
        <button onClick={() => onRemoveTodo(todo.id)}>❌</button>
        <button onClick={() => onToggleTodo(todo.id)}>Toggle</button>
      </td>
    </tr>
  );
});
