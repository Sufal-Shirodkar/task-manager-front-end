import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
export default function TaskContainer(props){
    return (
        <div> 
            <h2>Task List - {props.tasks.length}</h2>
            <TaskList  tasks = {props.tasks}
                        deleteTasks={props.deleteTasks}/>
            <TaskForm tasks ={props.tasks}
                      addTasks={props.addTasks}/>
        </div>
    )
}