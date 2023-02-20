import React, { useContext } from "react";
// import { nanoid } from 'nanoid'
import { Container } from "@mui/system";
import { useEffect} from "react";
import TaskForm from "./TaskForm";
import TaskPaper from "./Task";
import  { taskContext } from "../contexts/taskContext";




const Dashboard  = () => {

//   const initialTaskState = [
//      {  
//         task_id : nanoid(),
//         task_name : "jwt" , 
//         task_description : "add jwt auth",
//         task_status : "done"                      ///structure of the task
//      }, 
//      {   
//         task_id : nanoid(),
//         task_name : "client login" , 
//         task_description : "add clinent login",
//         task_status : "done"
//      },
//      {
//         task_id : nanoid(),
//         task_name : "dashboard" , 
//         task_description : "aadd client dashboard",
//         task_status : "done"
//      },
//      {
//         task_id : nanoid(),
//         task_name : "add tasks to server",
//         task_description : "add tasks to server",
//         task_status : "doing"
//      }
//   ]

  
  const {tasks} =  useContext(taskContext)

  useEffect(() => {
     
      localStorage.setItem("tasks" , JSON.stringify(tasks))
      let value = localStorage.getItem("tasks")
      console.log(value)
  }, [tasks])
 
  return ( 
   <Container sx ={{ display: "flex" , flexDirection : "column" , alignItems :"center",  gap : "100px" , padding :"100px", width : "100vw" , background : "#e0ffff"}}>
        <TaskForm />
        <div>
       
        { 
          tasks.length > 0 && tasks?.map(item => {
             return <TaskPaper key = {item.task_id} task = {item}/>
           })
        }
        </div>
    </Container> )
  
};


export default Dashboard