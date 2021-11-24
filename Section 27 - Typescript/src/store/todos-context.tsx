import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (toDoText: string) => {
    const newTodo = new Todo(toDoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  const removeToDoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id);
    })
  }

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addToDoHandler,
    removeTodo: removeToDoHandler
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;