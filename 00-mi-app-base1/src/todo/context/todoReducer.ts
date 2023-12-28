import { TodoI, TodoState } from "../interfaces/interfaces";


export type TodoAction = 
    | { type: "ADD_TODO", payload: TodoI }
    | { type: "REMOVE_TODO", payload:{id: string} }
    | { type: "TOGGLE_TODO", payload: {id: string} }


export const todoReducer = (state:TodoState,action : TodoAction):TodoState=>{
    
    switch(action.type){
        case "ADD_TODO":
            return {
              ...state,
                todoCount: state.todoCount + 1,
                todos: [...state.todos, action.payload]
            }
        case "REMOVE_TODO":
            return {
              ...state,
                todoCount: state.todoCount - 1,
                todos: state.todos.filter(todo => todo.id!== action.payload.id)
            }
        case "TOGGLE_TODO":
            return {
              ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id? {...todo, completed:!todo.completed} : todo)
            }
        default:
            return state;
    } 


}