import { useState } from "react";

const orders = [100, 200, 300]

function App() {
  const total = orders.reduce((total, cur) => total + cur)
  
  const [counter, setCounter] = useState(total)
  
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1)
  }
  return (
    <div className="App" style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>   
    </div>
  );
}

export default App;
