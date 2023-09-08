import { useState } from 'react'
import 'daisyui/dist/full.css'; 
import './App.css'
import { Counter } from './Counter';
import { Team } from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('click normal function button')
  }
  const handleClick2=()=>{
    alert('arry function ')
  }

  const addToFive=(num)=>{
   alert(num+5);
  }
  return (


    <>
<Users></Users>
<Friends></Friends>
<Team></Team>
    <Counter></Counter>
   <h3>React core concept 2</h3>
  <div className='flex gap-4'>

  <button className='btn btn-primary' onClick={handleClick} >Click me</button>
   <button className='btn btn-secondary' onClick={handleClick2} >Click me2</button>
   <button className='btn btn-accent' onClick={() =>{alert('third clicked')}} >Click me3</button>
   <button className='btn btn-secondary' onClick={()=>addToFive(3)} >Click 4 </button>
  </div>
    </>
  )
}

export default App
