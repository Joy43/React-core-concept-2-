import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

export default function Users() {
    const [Users,setUsers]=useState([]);
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data))

    },[])
  return (
    <div>
        <h2>users:{Users.length}</h2>

    </div>
  )
}

/* 
1.declare a state to hold the data 
2. useEffect with call 
*/
/* 

*/