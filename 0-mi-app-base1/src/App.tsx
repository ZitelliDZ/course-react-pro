import { useTodo } from "./todo/Hooks/useTodo";
import ContadorRed from "./todo/components/ContadorRed";
import Counter from "./todo/components/Counter";
import Formulario from "./todo/components/Formulario";
import TimerPadre from "./todo/components/TimerPadre";
import TodoList from "./todo/components/TodoList";
import Usuario from "./todo/components/Usuario";
import TodoProvider from "./todo/context/TodoProvider";


const AppState = ({children}:any) => {

  const {todos} = useTodo()

  return (
    <header className="App-header">
        <p>
          App Repaso Ts : {todos.length}
        </p>
        <hr />
        <Counter />
        <hr /> 
        <Usuario />
        <hr />
        <TimerPadre />    
        <hr />
        <ContadorRed />
        <hr />
        <Formulario />
        <hr />
        <TodoList />
      </header>
  )
}



function App() {


  return (
    <>
    <TodoProvider>
      <AppState/>
      </TodoProvider>
    </>
  );
}

export default App;
