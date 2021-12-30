import React, {useContext} from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import {Context} from './TodosBox'


const TodosList = ({deleteTask, editTask, compliteTask}) => {
    const todoList = useContext(Context)
    return (
        <div>
            {todoList.map( (task) => {
                return (
                    <li data-taskid={task.id} key={task.id}>
                        <span style={{textDecoration: (task.complite ? 'line-through' : 'none')}}>{task.text}</span>
                        <button onClick={(e) => deleteTask(e.target.closest('li').dataset.taskid)}> <TiDeleteOutline /> </button>
                        <button onClick={(e) => editTask(e.target.closest('li').dataset.taskid)}>E</button>
                        <button onClick={(e) => compliteTask(e.target.closest('li').dataset.taskid)}>C</button>
                    </li>
                )
            } )}
        </div>
    )
}

export default TodosList
