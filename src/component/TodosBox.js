import React, {useState, useEffect} from 'react'
import uniqid from 'uniqid';
import TodosForm from './TodosForm'
import TodosList from './TodosList'
import axios from 'axios'

const TodosBox = () => {

    const [todoList, setTodoList] = useState([])

    useEffect(async () => {
        const data = await fetch('http://localhost:3005/todos')
        const json = await data.json()
        setTodoList(json)
    }, [])

    const addTask = (text) => {
        const taskObj = {text: text, id: uniqid(), complite: false}
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(taskObj)
        };
        fetch('http://localhost:3005/todos', requestOptions)
        setTodoList( (todoList) => {
            return [...todoList, taskObj]
        } )
    }

    const deleteTask = (taskId) =>{
        setTodoList( (todoList) => todoList.filter(task => task.id !== taskId))
    }

    const editTask = (taskId) => {
        const theTaskArr = todoList.filter(task => task.id === taskId)
        const newText = window.prompt('edit the task:', theTaskArr[0].text)
        if (newText !==  null){
            const newList = todoList.map(task => {
                task.text = task.id === taskId ? newText : task.text
                return task
            })
            const theEditedTaks = newList.filter(task => task.id === taskId)
            axios.put(`http://localhost:3005/todos/${taskId}`, theEditedTaks[0])
            .then(response => console.log(response))
            .then(() => setTodoList(newList))
            .catch(error => alert('server error', error))
        }
    }
    
    const compliteTask = (taskId) => {
        const newTodoList = todoList.map((task) => {
            task.complite = task.id == taskId ? !task.complite : task.complite
            return task
        })
        setTodoList(newTodoList)
    }

    return (
        <div>
            <TodosForm addTask={addTask} />
            <TodosList
                todoList={todoList}
                deleteTask={deleteTask}
                editTask={editTask}
                compliteTask={compliteTask} 
            />
        </div>
    )
}

export default TodosBox
