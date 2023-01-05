import { useState } from "react";

function App(){
  const storageJobs = JSON.parse(localStorage.getItem('jobs'))
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(storageJobs ?? [])

  const handleSubmit = () => {

    setJobs(prev => {
      const newJobs = [...prev, job]
      localStorage.setItem('jobs', JSON.stringify(newJobs))
      return newJobs
    })
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
