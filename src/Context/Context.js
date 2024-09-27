import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"Todo msg",
        complete:false
    }],
    addtodo:(todo)=>{},
    updatetoda:(id,todo)=>{},
    deletetodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider