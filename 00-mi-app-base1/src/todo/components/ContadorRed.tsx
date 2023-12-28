import React, { useReducer } from 'react'



const InitialState ={
    counter: 0,
}

type Actions = 
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'RESET',payload:{initial:number} }


const contadorReducer = ( state: typeof InitialState , action: Actions ) => {

    switch(action.type){
        case 'INCREMENT':
            return {
              ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
              ...state,
                counter: state.counter - 1
            }
        case 'RESET':
            return {
             ...state,
                counter: action.payload.initial
            }
        default:
            return state
    }
}

const ContadorRed = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, InitialState)
    
    const incrementar = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    
    const decrementar = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    
    const resetear = (initial:number) => {
        dispatch({
            type: 'RESET',
            payload: {
                initial: initial
            }
        })
    }


  return (
    <>
    <h1>useReducer</h1> 
    <h3>Contador : {contadorState.counter}</h3> 
    <button onClick={()=>incrementar()}>Incrementar</button>
    <button onClick={()=>decrementar()}>Decrementar</button>
    <button onClick={()=>resetear(100)}>Reset 100</button>
    </>
  )
}

export default ContadorRed
