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
  const [checked, setChecked] = useState(2)
  const handleSubmit = () => {
    console.log({id: checked});
  }
  return (
      <div style={{padding: 20}}>
        {courses.map(course => (
          <div key={course.id}>
            <input
              type="radio"
              checked={checked === course.id}
              onChange = {() => setChecked(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
      </div>
  )
}

export default App;
