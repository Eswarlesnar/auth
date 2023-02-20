import { useState  , useContext} from "react";
import {  StyledInput , StyledFormButton , StyledPaperFormContainer} from '../assets/muithemes';
import { InputLabel } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import { nanoid } from 'nanoid'
import { taskContext } from "../contexts/taskContext";
import AlertSnackBar from "./Snackbar";

const TaskForm = () => {
   
    const {tasks , setTasks} = useContext(taskContext)
    const [name , setName]  = useState("")
    const [description , setDescription]  = useState("")
    const [status , setStatus]  = useState("")
    const [isTaskSubmitted , setisTaskSubmitted]  = useState(false)
    const [isTaskSaved , setisTaskSaved] = useState(false)
    const [taskAddedSnackBarOpen , setTaskAddedSnackBarOpen] = useState(false)
    
    const handleAddTask = (e) =>{ 
       e.preventDefault()
       setisTaskSaved(false)
       setisTaskSubmitted(true)
       if(!name || !description || !status ){
          setTaskAddedSnackBarOpen(true)
          return
       }else{
           
          let flag = false
          tasks.forEach(item => {
            if(item.task_name === name){
                flag = true
            }
            setTaskAddedSnackBarOpen(true)
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
               setisTaskSaved(true)
               setTaskAddedSnackBarOpen(true)
               setName("")
               setDescription("")
               setStatus("")
              
          }
       }
    }


    const handleSnackBarClose = () => {
        setTaskAddedSnackBarOpen(false)
    }

    return <StyledPaperFormContainer elevation={3} >

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
            { 
             <Snackbar open={taskAddedSnackBarOpen} autoHideDuration={3000} onClose={handleSnackBarClose}>
                <AlertSnackBar onClose={handleSnackBarClose} severity= { (isTaskSubmitted && isTaskSaved) ?"success" :"warning"} sx={{ width: '100%' }} elevation = {6} variant = "filled">
                    { (isTaskSubmitted && isTaskSaved)  ? "Task saved" : "Failed to save"}
                </AlertSnackBar>
            </Snackbar>
            
            }
        </form>
    </StyledPaperFormContainer>
}

export default TaskForm
