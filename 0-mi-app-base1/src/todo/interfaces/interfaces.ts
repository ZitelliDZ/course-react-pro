export interface TodoI {
    id: string;
    desc: string;
    completed: boolean;
}


export interface TodoState {
    todoCount: number;
    todos: TodoI[];
    completed: number;
    pending: number;
}