import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";



export const useTodo = () => {


    
  const { todoState,addTodo,deleteTodo,toggleTodo } = useContext(TodoContext);


  return{
    ...todoState,
    todoState,
    pendingTodo: todoState.todos.filter(t => !t.completed),
    completedTodo: todoState.todos.filter(t => t.completed),
    addTodo,
    deleteTodo,
    toggleTodo
  }
}