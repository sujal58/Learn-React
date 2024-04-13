import { useState, useEffect, useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [length, setLength] = useState("6");
  const [allowchar, setAllowchar] = useState(false);
  const [allownum, setAllownum] = useState(false);
  const [password, setPassword] = useState("")

  //useref hoook

  const passwordRef = useRef(null)


  const passwordGenerator = () => {
    let pass = ""
    let number = "1234567890";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let specialchar = "!@#$%^&*()_?}{~></";

    if(allowchar) char += specialchar;
    if(allownum) char += number;

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random()*char.length+1)
      pass += char.charAt(index) 
      
    }

    setPassword(pass)

  }

  const  copyTexttoClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    toast.success("Password copied to clipboard!!!");
  }

  useEffect(()=>{
    passwordGenerator()
  }, [allowchar,allownum,length])



  return (
    <>
      <div className='w-full h-screen flex items-center bg-black'>
        <div className="w-full max-w-md mx-auto px-4 py-4 bg-gray-700 rounded text-orange-500">
          <h1 className='text-center text-white text-3xl'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text" 
            className='outline-none w-full py-1 px-3 bg-slate-300'
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
            />

            <input 
            type="button" 
            value="Copy" 
            className='bg-blue-500 cursor-pointer px-3 py-1 shrink-0 text-white'
            onClick={copyTexttoClipboard}
            />
            <ToastContainer/>
          </div>

          <div className='flex justify-center text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" name="passlength" id="passlength" max={20} min={6} defaultValue={6} onChange={(e)=> setLength(e.target.value)}/>
              <label htmlFor="passlength">length: {length}</label>
            </div>

            <div className='flex items-center gap-x-2'>
              
              <input type="checkbox" name="number" id="number" 
              onChange={ () => {
                setAllownum((prev)=>!prev)
                }}/>
              <label htmlFor="number">Number</label>
            </div>

            <div className='flex items-center gap-x-2'>
              
              <input type="checkbox" name="char" id="char" onChange={ () => {
                setAllowchar((prev)=>!prev)
                }}/> 
              <label htmlFor="char">Character</label>          
            </div>

          </div>
        
        
        
        </div>
        
      </div>
    </>
  )
}

export default App
