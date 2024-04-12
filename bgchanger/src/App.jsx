import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
       <h1 className="text-center text-white text-2xl">Background color changer</h1>
       <div className="flex flex-wrap justify-center fixed bottom-6 inset-x-0 px-2">
          <div className="bg-white rounded-2xl shadow-2xl flex flex-wrap gap-5 px-2 py-2 justify-center" style={{backgroundColor: color}}>
            <button className=" rounded-xl bg-red-700 px-3 py-1" onClick={()=> setColor("red")}>Red</button>
            <button className=" rounded-xl bg-blue-700 px-3 py-1" onClick={()=> setColor("blue")}>Blue</button>
            <button className=" rounded-xl bg-violet-500 px-3 py-1" onClick={()=> setColor("violet")}>Crimson</button>
            <button className=" rounded-xl bg-purple-300 px-3 py-1" onClick={()=> setColor("purple")}>purple</button>
            <button className=" rounded-xl px-3 py-1 bg-rose-100" onClick={()=> setColor("pink")}>Amber</button>
            <button className=" rounded-xl bg-green-300 px-3 py-1" onClick={()=> setColor("green")}>Green</button>
        </div>
       </div>
        
    </div>
     
    
  )
}

export default App
