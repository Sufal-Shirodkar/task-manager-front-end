import TaskItem from "./TaskItem"
export default function TaskList(props){
    return (
       <ul>
       {
        props.tasks.map(ele =>{
          return <TaskItem key={ele._id}
                           task={ele}
                           deleteTasks={props.deleteTasks} />
        })
       }
       </ul>
         )
}