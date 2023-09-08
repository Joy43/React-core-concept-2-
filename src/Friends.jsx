import { data } from 'autoprefixer'
import './Friends.css'
import React, { useEffect, useState } from 'react'
import Friend from './Friend'
export default function Friends() {

const [Friends,setFriends]=useState([])// use na thakle empty error
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then (data =>setFriends(data));
  
})

  return (
    <div className='box'>

<h3>Friends:{Friends.length}</h3>
<Friend></Friend>
    </div>
  )
}


/* 
1.state  to hold data
2.use effet with dependcy array 
3.use fetch to load data 
4.set loaded data to state
*/