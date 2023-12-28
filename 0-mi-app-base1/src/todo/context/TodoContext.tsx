import { createContext } from "react";
import { TodoI, TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: (id:string) => void,
    deleteTodo: (id:string) => void,
    addTodo: (todo:TodoI) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)