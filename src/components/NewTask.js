import React, { useState } from "react"

export const NewTask = ({ addTask }) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() === "") return
    addTask(value)
    setValue("")
  }

  return (
    <form className="NewTask" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Помыть посуду"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={`${value.trim() === "" ? "disabled" : ""}`}
        type="submit"
      >
        +
      </button>
    </form>
  )
}
