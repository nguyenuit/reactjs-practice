import { useReducer, useRef, useState } from "react";

const initState = {
  job: '',
  jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const reducer = (state, action) => {
  let newState

  switch(action.type){
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      return ''
    default:
      throw new Error('Invalid action!')
  }

  // console.log(newState);

  return newState;
}

function App(){
  const [state, dispatch] = useReducer(reducer, initState)

  const {job, jobs} = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
      <div style={{padding: 20}}>
          <h1>Todo</h1>
          <input
            ref={inputRef}
            value={job}
            placeholder="plan cong viec..."
            onChange={e => {
              dispatch(setJob(e.target.value))
            }}
          />
          <button onClick={handleSubmit}>Add</button>
          <ul>
          {jobs && jobs.map((job, index) => (
            <li key={index}>{job} &times;</li>
          ))}
          </ul>
      </div>
  )
}

export default App;
