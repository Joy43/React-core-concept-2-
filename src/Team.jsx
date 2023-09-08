import React, { useState } from 'react'

export const Team = () => {
const [team,setTeam]=useState(11);
const handleAdd=()=>{
  const newTeam=team+1;
  setTeam(newTeam);

}
const handleRemove=()=>{
  setTeam(team-1)
  setTeam(newTeam)
}
  const teamStyle={
    border:'2px solid purple',
    margin:'15px',
    padding:'16px',
    borderRadius:'15px'
  }
  return (
    <div style={teamStyle} className=' gap-5 ' >

<h3>Players:{team}</h3>
<button className='btn btn-secondary' onClick={handleAdd}>add player</button>
<button className='btn btn-accent' onClick={handleRemove}>remove player</button>
    </div>
  )
}
