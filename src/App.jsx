import { useState, useEffect} from 'react'
import './App.css'
import { TodoProvider } from './Context/Context'
import { Todoform, Todoitem } from './component/index.js'

function App() {

  const [todos,setTodos]=useState([])

  const addtodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updatetoda =(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? todo : prevtodo )))
  }

  const deletetodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((todo)=>todo.map((prevtodo)=>prevtodo.id===id?{...prevtodo,complete:!prevtodo.complete}:prevtodo))
  }


  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect(() => {

    localStorage.setItem("todos",JSON.stringify(todos))

  }, [todos])
  
  

  return (
    <TodoProvider value={{todos,addtodo,updatetoda,deletetodo,toggleComplete}}>
      <div className="bg-[#171d1f] min-h-screen py-8">
                  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                      <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                      <div className="mb-4">
                         <Todoform/>
                      </div>
                      <div className="flex flex-wrap gap-y-3">
                          {/*Loop and Add TodoItem here */}
                          {todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                              <Todoitem todo={todo}/>
                            </div>
                          ))}
                      </div>
                  </div>
              </div>
    </TodoProvider>
  )
}

export default App
