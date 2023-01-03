import { useState } from "react";

function App() {  
  const [info, setInfo] = useState({
    name: 'Ly Thai Nguyen',
    age: 34
  })
  
  const handleUpdate = () => {
    setInfo(prev => ({
      ...prev,
      bio: "Music and Code"
    }))
  }
  return (
    <div className="App" style={{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>   
    </div>
  );
}

export default App;
