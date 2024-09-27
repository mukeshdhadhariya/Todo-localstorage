import React, { useState } from 'react'
import { useTodo } from '../Context/Context.js';

function Todoform() {

    const [todo,setTodo]=useState("")

    const {addtodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return
        addtodo({todo,complete:false})
        setTodo("")
    }


    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 text-black outline-none duration-150 bg-white py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

 export default Todoform;