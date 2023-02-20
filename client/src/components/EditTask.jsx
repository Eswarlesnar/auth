import { useState, useContext } from "react"
import {
    InputLabel 
} from "@mui/material";
import { taskContext } from "../contexts/taskContext";
import {  StyledInput , StyledFormButton ,StyledPaperFormContainer } from '../assets/muithemes';

const EditTask = ({task , closePopOver}) => {
    const {tasks , setTasks}= useContext(taskContext)
    const [name , setName]  = useState(task.task_name)
    const [description , setDescription]  = useState(task.task_description)
    const [status , setStatus]  = useState(task.task_status)


    const handleEditTask  = (e) => {
       e.preventDefault()
       if(!name || !description || !status ){
          return
       }else{
            let flag = false
            tasks.forEach(item => {
            if(item.task_name === name){
                if(item.task_id !== task.task_id){
                    flag = true
                }
            }
            })
            if(flag === false) {
                let tempTasks = [...tasks]
                let index = tempTasks.findIndex(val => val.task_id === task.task_id)
                tempTasks[index]  = {
                    ...tempTasks[index], 
                    task_name : name , 
                    task_description : description,
                    task_status : status

                }
                setTasks(tempTasks)
                closePopOver()
            }
       }
    }
    
    return <StyledPaperFormContainer elevation={3}>
        <form onSubmit =  {handleEditTask}  style ={{display : "flex" , flexDirection : "column"}}>
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
            <StyledFormButton variant = "contained" type = "submit">Done</StyledFormButton>
        </form>
    </StyledPaperFormContainer>
}


export default EditTask