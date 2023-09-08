import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
  return (
    <div style={{border:'2px solid gold'}}>

        <h3>counter:{count} </h3>
        <button className='btn btn-accent' onClick={handleAdd} >add count</button>
        <button onClick={handleReduce} className='btn btn-primary'>Reduce</button>
    </div>
  )
}
