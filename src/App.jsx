import { useState,useEffect } from 'react'
import './App.css'
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const [loading,setLoading] = useState(true);

  useEffect(()=> {
setTimeout(() => {
  setLoading(false)
  
}, 3000);
  },[]);

  return (
    <>
    {loading
    ?
    <PacmanLoader
  color="#36d6cd"
  margin={2}
  size={30}
/>
    :
    <div className='text-field'>
      <h1>Masum Ahmed Lotib</h1>
      <p>Web Developer</p>
      <p>Graphic Designer</p>
      <p>Content Creator</p>
      <p>Digital Marketer</p>
    </div>
    }
        
    </>
  )
}

export default App
