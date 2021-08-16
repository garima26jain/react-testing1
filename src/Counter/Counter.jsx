import React, { useState } from "react"
import "./Counter.css"

 function Counter() {
  const [count, setCount] = useState(0)
  const [inputVal, setInputVal] = useState(1)

   return (
     <div>
         <h3 data-testid="header">My Counter</h3>
         <h2 
         className = {`${count >= 100 ? "green" : ""}${count <= -100 ? "red" : ""}`}
         data-testid="counter">{count}</h2>
         <button data-testid="sub-btn" onClick={()=>setCount(count-inputVal)}>-</button>
         <input type="number" 
            data-testid="input" 
            value={inputVal}
            onChange={(e)=>{
              setInputVal(parseInt(e.target.value))
            }}
          />
         <button 
          data-testid="add-btn"
          onClick={()=>setCount(count+inputVal)}
         >
           +
         </button>
     </div>
   );
 }
 
 export default Counter;
 