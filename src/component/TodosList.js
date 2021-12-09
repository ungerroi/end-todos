import React from 'react'

const TodosList = ({todoList, deleteTask, editTask, compliteTask}) => {
    return (
        <div>
            {todoList.map( (task) => {
                return (
                    <li data-taskid={task.id} key={task.id}>
                        <span style={{textDecoration: (task.complite ? 'line-through' : 'none')}}>{task.text}</span>
                        <button onClick={(e) => deleteTask(e.target.closest('li').dataset.taskid)}>D</button>
                        <button onClick={(e) => editTask(e.target.closest('li').dataset.taskid)}>E</button>
                        <button onClick={(e) => compliteTask(e.target.closest('li').dataset.taskid)}>C</button>
                    </li>
                )
            } )}
        </div>
    )
}

export default TodosList
