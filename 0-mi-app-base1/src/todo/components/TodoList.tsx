import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useTodo } from "../Hooks/useTodo";

const TodoList = () => {
  //const { todoState,addTodo,deleteTodo,toggleTodo } = useContext(TodoContext);
  const {addTodo,completed,completedTodo,deleteTodo,pending,pendingTodo,todoCount,todos,toggleTodo,todoState} = useTodo()

  return (
    <>
      <ul>
        {todoState.todos.map((todo) => (
          <li key={todo.id}>{todo.desc} - {`${todo.completed}`}</li>
        ))}
      </ul>
      <button onClick={() => addTodo({ id: `${todoState.todoCount}`, desc: `Todo ${todoState.todoCount}`, completed: false })}>
        Add Todo
      </button>
      <button onClick={() => deleteTodo(todoState.todos[0].id)}>
        Delete Todo
      </button>
      <button onClick={() => toggleTodo(todoState.todos[0].id)}>
        Toggle Todo
      </button>


            <ul>
                {pendingTodo.map((todo) => (
                    <li key={todo.id}>{todo.desc} - {`${todo.completed}`}</li>
                ))}
            </ul>
            <ul>
                {completedTodo.map((todo) => (
                    <li key={todo.id}>{todo.desc} - {`${todo.completed}`}</li>
                ))}
            </ul>



    </>
  );
};

export default TodoList;
