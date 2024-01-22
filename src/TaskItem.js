import axios from 'axios'
export default function TaskItem(props){
    const handleDelete = ()=>{
        const confirm = window.confirm('Are you sure?')     
        if(confirm){
            axios.delete(`http://127.0.0.1:3050/api/tasks/${props.task._id}`)
            .then(response =>{
                const result = response.data
                props.deleteTasks(result._id)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        
    }
    return (
        <div>
            <li><span>{props.task.title}</span>
             <span>{props.task.description}</span>
             <span>{props.task.status}</span>
             <span>{props.task.priority}</span><button onClick={handleDelete}>Delete</button></li>
        </div>
    )
}