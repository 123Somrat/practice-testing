import { useState } from "react"


export default function Counter() {
    const [count,setCount]= useState(0)

    const handleClick = ()=>{
       setCount(pre=>pre+1)
   }

//   <h1 role='count'>Count : {count}</h1>
  return (
    <>
         <button onClick={handleClick} role="Count">Count</button>
         <h1 role='result'>Count : {count}</h1>
    </>
  )
}
