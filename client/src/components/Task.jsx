import {
    Button,
    Typography,
    Popover ,
    Box  
} from "@mui/material";
import { useContext, useState } from "react";
import { StyledPaperTask } from "../assets/muithemes";
import { taskContext } from "../contexts/taskContext";
import EditTask from "./EditTask";


function TaskPaper({ task }) {
    const { task_name: name, task_description: desc, task_status: status, task_id: id } = task;
    const {tasks , setTasks} = useContext(taskContext)
    const [popoverAnchor , setPopoverAnchor] = useState(null)

    const handleEdit = (e) => {
        setPopoverAnchor(e.currentTarget)
    }

    const popoverid = Boolean(popoverAnchor ) ? "simple-popover" : ""

    const handlePopoverClose = () => {
        setPopoverAnchor(null)
    }

    const handleDelete = async () => {
       const  promise = new Promise( (resolve , reject) => {
           setTimeout( () => {
               let index = tasks.findIndex(task => task.task_id === id)
               let tempTasks = [...tasks]
               tempTasks.splice(index , 1)
               setTasks(tempTasks)
               resolve("deleted succcessfully")
           }, 1000)
       }) 
       const result = await promise
       console.log(result)
    }


    return (
    <>

        <StyledPaperTask elevation={3}>
            <Box className = "content">
                <Typography variant="h6" color="primary">
                    {name}
                </Typography>
                <Typography variant="h6" color="primary">
                    {desc}
                </Typography>
                <Typography variant="h6" color="primary">
                    {status}
                </Typography>
            </Box>
            
            <Box className = "actions" sx = {{ display : "flex" , flexDirection : "column" , gap:"5px"}}>
                <Button  aria-describedby={popoverid} variant="contained" onClick = {handleEdit}>Edit</Button>
                <Popover
                    id={ popoverid }
                    open={ Boolean(popoverAnchor)}
                    anchorEl={popoverAnchor}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                >
                   <EditTask task = {task} closePopOver = {handlePopoverClose}/>
                </Popover>
                <Button variant= "contained" onClick = {handleDelete}>Delete</Button>
            </Box>
        </StyledPaperTask>

    </>)
}

export default TaskPaper
