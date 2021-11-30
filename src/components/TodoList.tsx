import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
const todoListInit = [
  { id: 1, title: "task 1" },
  { id: 2, title: "task 2" },
  { id: 3, title: "task 3" },
  { id: 4, title: "task 4" },
];

export function TodoList() {
  const [todoList, setTodoList] = useState(todoListInit);
  const removeTodo = (id: number) => {
    setTodoList(todoList.filter((x) => x.id !== id));
  };
  function addTodo() {
    const newTodo = { id: 5, title: "Test" };

    // 1
    // let todoListNew = [];
    // for (let index = 0; index < todoList.length; index++) {
    //   const element = todoList[index];
    //   todoListNew.push(element);
    // }
    // todoListNew.push(newTodo);
    // setTodoList(todoListNew)

    // 2
    // let todoListNew = todoList.slice();
    // todoListNew.push(newTodo);
    // setTodoList(todoListNew)

    // 3
    // setTodoList([...todoList, newTodo]);

    // 4 copy deep
    // let todoListNew = JSON.parse(JSON.stringify(todoList));
    // todoListNew.push(newTodo);
    // setTodoList(todoListNew);
  }
  return (
    <>
      <button onClick={addTodo}>➕</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              onRemoveTodo={() => removeTodo(item.id)}
            ></TodoItem>
          ))}
        </tbody>
      </table>
    </>
  );
}
