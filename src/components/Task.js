import React from "react"

export const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="Task">
      <button
        className={`${task.completed ? "completed" : "active"}`}
        onClick={() => toggleComplete(task.id)}
      >
        ✓
      </button>
      <div className={`${task.completed ? "completed" : ""}`}>{task.text}</div>
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Χ
      </button>
    </div>
  )
}
