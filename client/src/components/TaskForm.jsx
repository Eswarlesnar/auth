import { useState  , useContext} from "react";
import {  StyledInput , StyledFormButton} from '../assets/muithemes';
import {
    Paper,
    InputLabel 
} from "@mui/material";
import { nanoid } from 'nanoid'
import {taskContext } from "./Dashboard"

const TaskForm = () => {
   
    const [tasks , setTasks] = useContext(taskContext)
    const [name , setName]  = useState("")
    const [description , setDescription]  = useState("")
    const [status , setStatus]  = useState("")
    
    const handleAddTask = (e) =>{ 
       e.preventDefault()
       if(!name || !description || !status ){
          return
       }else{
          let flag = false
          tasks.forEach(item => {
            if(item.task_name === name){
                flag = true
            }
          })
          if(flag === false) {
            let task = {
                task_id : nanoid(),
                task_name : name , 
                task_description : description,
                task_status : status
               }
               let tempTasks = [...tasks]
               tempTasks.push(task)
               setTasks(tempTasks)
          }
       }
    }

    return <Paper elevation={3} sx={{ padding: "30px" , display : "flex" , justifyContent : "center" , width : "300px"}}>

        <form onSubmit =  {handleAddTask} style ={{display : "flex" , flexDirection : "column"}}>
           <InputLabel htmlFor ="name">
                Task Name:
            </InputLabel>
            <StyledInput 
                id="name" 
                type='text' 
                value = {name}
                onChange = {e => setName(e.target.value)}
            />
            <InputLabel htmlFor ="desc">
                Description:
            </InputLabel>
            <StyledInput 
                id="desc" 
                type = "text"     
                value = {description} 
                onChange = { e=> setDescription(e.target.value)}              
            />
            <InputLabel htmlFor ="status" >
                status:
            </InputLabel>
            <StyledInput 
                id="status" 
                type = "text"    
                value = {status}
                onChange = { e => setStatus(e.target.value)}                
            />
            <StyledFormButton variant = "contained" type = "submit" sx ={{width : "300px"}}>Add task</StyledFormButton>
        </form>
    </Paper>
}

export default TaskForm
