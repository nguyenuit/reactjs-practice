import { useReducer, useState } from "react";

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

console.log(setJob('solve problem!'));

const reducer = (state, action) => {
  // switch(action){
  //   case SET_JOB:
  //     return state + 1
  //   case ADD_JOB:
  //     return state - 1
  //   case DELETE_JOB:
  //     return ''
  //   default:
  //     throw new Error('Invalid action')
  // }f

  return state;
}

function App(){
  const [state, dispatch] = useReducer(reducer, initState)

  const {job, jobs} = state

  return (
      <div style={{padding: 20}}>
          <h1>Todo</h1>
          <input
            value={job}
            placeholder="plan cong viec..."
            onChange={e => {
              dispatch(setJob(e.target.value))
            }}
          />
          <button>Add</button>
          <ul>
          {jobs && jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
          </ul>
      </div>
  )
}

export default App;
