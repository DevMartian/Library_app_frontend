import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    const getData = async () => { 
      try {
        const response = await axios.get("http://localhost:5432/book");
        console.log(response)
        setData(response.data.data[0].name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    const res = getData();
  });

  return (
    <div className="App">
      ${data}
    </div>
  );
}

export default App;
