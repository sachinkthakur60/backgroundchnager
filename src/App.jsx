import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2" >
          <button onClick={() => setColor("olive")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={() => setColor("teal")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"teal"}}>Teal</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => setColor("maroon")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"maroon"}}>Maroon</button>
          <button onClick={() => setColor("red")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("gold")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"gold"}}>Gold</button>
          <button onClick={() => setColor("gold")} className="outline-none px-4 text-white py-1 shadow-lg rounded-2xl " style={{backgroundColor:"gold"}}>Gold</button>      
        </div>

      </div>
    </div>
  )
}

export default App
