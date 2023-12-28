import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoI, TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE:TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: "Todo 1",
            completed: false
        },
        {
            id: '2',
            desc: "Todo 2",
            completed: false
        },
        {
            id: '3',
            desc: "Todo 3",
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}

interface Props {
  children: JSX.Element | JSX.Element[];
}


const TodoProvider = ({ children }: Props) => {


    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id:string) => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: {id: id}
        })
    }
    
    const deleteTodo = (id:string) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: {id: id}
        })
    }
    
    const addTodo = (todo:TodoI) => {
        dispatch({
            type: 'ADD_TODO',
            payload: todo
            
        })
    }

  return (
  <TodoContext.Provider value={{
    todoState,
    toggleTodo,
    deleteTodo,
    addTodo

  }}>
    {children}
  </TodoContext.Provider>)
};
export default TodoProvider;
