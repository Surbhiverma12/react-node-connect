import { useState } from 'react'
import axios from "axios";

function App() {
  let [message, setMessage] = useState("")

  let fetchMessage = () => {
    axios.get("http://localhost:3000/api/message")
    .then((response) => {
      console.log(response)
      setMessage(response.data.message)
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  return (
    <>
      <div>
        <h1>React + Node.js Example</h1>
        <button onClick={fetchMessage}>Fetch Message</button>
        <p>{message ? message: "click the button to fetch message!"}</p>
      </div>
    </>
  )
}

export default App
