import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()
  let navigate =useNavigate();

  function submit(){
    navigate(`/`);
  }
  function DashBoard(){
    navigate(`/dashbord/${name}`)
  }
  useEffect(()=>{
    axios.get(`http://localhost:4001/user/${ID.ID}`)
    .then((e)=>{
      setname(e.data)
    
    })
    .catch(()=>{console.log("unable to fetch data in Edit comp");})
},[])

  return (
    <div>
      <div id='navbar' className='bg-gray-300  '>
        <ul className='flex gap-24 px-10'>
          <li><Button varient="text" onClick={DashBoard}>Home</Button></li>
          <li><Button variant="text"><Link to='/create-employee'> Create Employee</Link></Button> </li>
          <li><Button variant="text"><Link to="/employee-list">  Employee list </Link></Button> </li>
          <li className='p-2 text-red-500 border border-dashed border-red-400 '>{name}</li>
          <li><button varient="text" onClick={submit}>Logout</button></li>
        </ul>
      </div>
      <h1 className='bg-yellow-200'>DashBord</h1>
      <p>Wellcome to admin panel</p>
    </div>
  )
}

export default DashBord