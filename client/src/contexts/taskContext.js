import { useState , createContext } from "react"



export const taskContext = createContext()

const TaskContextProvider = ({children}) => {
    const [tasks , setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    return <taskContext.Provider value = {{tasks, setTasks}}>{children}</taskContext.Provider>
}


export default TaskContextProvider