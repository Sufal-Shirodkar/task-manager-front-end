import {useState} from 'react'
import axios from 'axios'
export default function TaskForm(props){
    const [title, setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [status,setStatus] = useState('')
    const [priority,setPriority] = useState('')
    const [formErrors,setFormErrors]= useState({})
    const errors = {}
    const validationErrors = ()=>{
        if(title.trim().length === 0){
            errors.title = '* title is required'
        }
        if(description.trim().length === 0){
            errors.description = '*description is required'
        }
        if(status.trim().length === 0){
            errors.status = " * status is required"
        }
        if(priority.trim().length === 0){
            errors.priority = "*priority is required"
        }
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formdata = {
            title:title,
            description:description,
            status:status,
            priority:priority
        }
        validationErrors()
        if(Object.keys(errors).length === 0){
            axios.post('http://127.0.0.1:3050/api/tasks',formdata)
        .then(response =>{

            props.addTasks(response.data)
            console.log(response.data)
            setTitle('')
            setDescription('')
            setStatus('')
            setPriority('')
            setFormErrors({})
        })
        .catch(err =>{
            console.log(err)
        })
        }else{
            setFormErrors(errors)
        }
        
    }
    return (
        <div className='task-form'>
            <h3>Task form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Enter the Title</label><br/>
                <input type="text"
                       value={title}
                       id='title'
                       onChange={(e)=>{setTitle(e.target.value)}}
                       /> <br/>
                       { formErrors && <span className='errors'>{formErrors.title}</span>}<br/>
                <label htmlFor='description'>Enter the description</label><br/>
                <textarea id="description"
                          value={description}
                          onChange={(e)=>{setDescription(e.target.value)}}></textarea><br/>
                          {formErrors && <span className='errors'>{formErrors.description}</span>}<br/>
                <label htmlFor='status'>Select the status</label>
                <select id='status' 
                        value={status}
                        onChange={(e)=>{setStatus(e.target.value)}}>
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="In-progress">In-progress</option>
                    <option value="completed">Completed</option>
                </select><br/>
                {formErrors && <span className='errors'>{formErrors.status}</span>}<br/>
                <label>Set Priority</label>
                <select id='priority' 
                        value={priority}
                        onChange={(e)=>{setPriority(e.target.value)}}>
                    <option value="">Select Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select><br/>
                {formErrors && <span className='errors'>{formErrors.priority}</span>}<br/>
                    <input className='button' type="submit" />           
            </form>
        </div>
    )
}