import { useState } from "react";

const gifts = [
  'CPU i9',
  'RAM 32GB',
  'RGB Keyboard'
]

function App(){
  const [gift, setGift] = useState();

  const randomGift = () => {
      const index = Math.floor(Math.random() * 3)
      setGift(gifts[index])
  }

  return (
      <div style={{padding: 20}}>
          <h1>{gift || 'Chua co phan thuong'}</h1>
          <button onClick={randomGift}>Lay thuong</button>
      </div>
  )
}

export default App;
