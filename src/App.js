import "./App.css"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { NewTask } from "./components/NewTask"
import { Task } from "./components/Task"
uuidv4()

export const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        text: taskText,
        completed: false,
      },
    ])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div className="App">
      <h1>Планировщик</h1>
      <NewTask addTask={addTask} />
      {tasks
        .sort((l, r) => l.completed - r.completed)
        .map((task) => (
          <Task
            task={task}
            key={task.id}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  )
}

export default App
