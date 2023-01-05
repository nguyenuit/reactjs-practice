import { useState } from "react";

function App(){
  const [name, setName] = useState('');
  return (
      <div style={{padding: 20}}>
        <input
          value={name} 
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => setName('test new name')}>Set New Name</button>
      </div>
  )
}

export default App;
