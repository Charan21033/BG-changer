import { useState } from 'react'


function App() {
   const [color,setcolor]= useState("black");

  return (
    <>
    <div className='w-full h-screen duration-200 ' 
    style={{backgroundColor: color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button 
             onClick={()=>setcolor("red")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"red"}}
             >Red</button>
             <button 
             onClick={()=>setcolor("yellow")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"yellow"}}
             >yellow</button>
             <button 
             onClick={()=>setcolor("orange")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"orange"}}
             >orange</button>
             <button 
             onClick={()=>setcolor("olive")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"olive"}}
             >olive</button>
             <button 
             onClick={()=>setcolor("blue")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"blue"}}
             >blue</button>
             <button 
             onClick={()=>setcolor("#da7444")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"#da7444"}}
             >#da7444</button>
             <button 
             onClick={()=>setcolor("pink")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"pink"}}
             >pink</button>
             <button 
             onClick={()=>setcolor("#2fd578")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"#2fd578"}}
             >#2fd578</button>
        </div>
     </div>
    </div>
    </>
  )
}

export default App
