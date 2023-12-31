import {  CounterState } from "../interfaces/interfaces";
import { CounterAction } from "./actions";

export const counterReducer = (state:CounterState,action:CounterAction):CounterState =>{

    switch(action.type){
      
      case 'increaseBy':
        return {
          ...state,
          previous: state.counter,
          counter: state.counter + action.payload.value,
          changes: state.changes + 1
  
        };
      case 'reset':
        return {
          counter:0,
          previous:0,
          changes:0
        }  
      default:
        return  state;
    }
    
  }