import React, { createContext } from "react";
import { nanoid } from 'nanoid'
import { Container } from "@mui/system";
import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskPaper from "./Task";


export const taskContext = createContext()

const Dashboard  = () => {

  const initialTaskState = [
     {  
        task_id : nanoid(),
        task_name : "jwt" , 
        task_description : "add jwt auth",
        task_status : "done"
     }, 
     {   
        task_id : nanoid(),
        task_name : "client login" , 
        task_description : "add clinent login",
        task_status : "done"
     },
     {
        task_id : nanoid(),
        task_name : "dashboard" , 
        task_description : "aadd client dashboard",
        task_status : "done"
     },
     {
        task_id : nanoid(),
        task_name : "add tasks to server",
        task_description : "add tasks to server",
        task_status : "doing"
     }
  ]
  const [tasks , setTasks] = useState(initialTaskState)
 
  return <taskContext.Provider  value = {[tasks , setTasks]}>
    <Container sx ={{ display: "flex" , flexDirection : "column" , gap : "100px" , padding :"100px"}}>
        <TaskForm />
        <div>
       
        { 
           tasks?.map(item => {
             return <TaskPaper key = {item.task_id} task = {item}/>
           })
        }
        </div>
    </Container> 
  </taskContext.Provider>
};


export default Dashboard