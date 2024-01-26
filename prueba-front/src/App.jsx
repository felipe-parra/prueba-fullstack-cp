import { useState, useReducer } from 'react'
import './App.css'
import ClassComponent from './ClassComponent'

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    default:
      throw new Error("Unsupported action type: " + action.type)
  }
}

export default function App() {
  const [task, setTask] = useState("")
  const [state, dispatch] = useReducer(reducer, { tasks: [] })

  const handleChange = e => {
    setTask(e.target.value)
  }

  const addTask = (newTask) => {
    dispatch({
      type: "ADD_TASK",
      payload: newTask
    })

    setTask("")
  }

  return (
    <main>
      <article>
        <input type="text" placeholder='Type your next task' value={task} onChange={handleChange} />
      </article>
      <article>
        <button onClick={() => addTask(task)}>
          Add Task
        </button>
      </article>
      <article>
        {
          state.tasks.length
            ? state.tasks.map((task, index) => (
              <p key={`task-${index}`}>{task}</p>
            ))
            : null
        }
      </article>
      <ClassComponent message={"Hola desde el componente padre"} />
    </main>
  )
}
