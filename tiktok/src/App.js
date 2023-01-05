import { useState } from "react";

const courses = [
  {
    id: 1,
    name: 'JS'
  },
  {
    id: 2,
    name: 'ReactJS'
  }
]

function App(){
  
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])

  const handleSubmit = () => {
    setJobs(prev => [...prev, job])
    setJob('');
  }
  
  return (
      <div style={{padding: 20}}>
        <input 
          value={job}
          onChange={ e => setJob(e.target.value) }
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
            </li>
          ))}
        </ul>  
      </div>
  )
}

export default App;
