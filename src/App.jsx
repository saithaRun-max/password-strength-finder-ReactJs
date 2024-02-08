import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState("");


  function handle() {
    if (data.length < 4) {
      setShowData("weak");
    } else if (data.length >= 4 && data.length < 8) {
      setShowData("medium");
    } else if (data.length >= 8) {
      setShowData("strong");
    }
  } 

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data}
          onChange={(e) => [setData(e.target.value), handle()]}
        />
        <button onClick={() => handle()}>Check</button>
        {
          (!data) ? "" :  <p className="message-display "> Password is {showData}</p>
        }

       
      </div>
    </div>
  );
}

export default App
