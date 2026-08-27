import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchHealthApi = async () => {
      try {
        const response = await axios.get(`${API_URL}/health`)
        console.log(response);
        setMessage(`${response.data.message}`)
      } catch (error) {
        setMessage("Backend connection failed");

      }
    }
    fetchHealthApi()
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;