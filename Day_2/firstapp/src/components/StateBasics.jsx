import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setfname]=useState("Tony")
    var [val,setval]=useState()
const submithandler=()=>{
    setfname(val)
}
const handleInput=(e)=>{
    console.log(e.target.value)
    setval(e.target.value)
    
    }
  return (
    <div>
    <Typography variant='h6'>WELCOME TO {fname}</Typography>
    <TextField variant="outlined" label="Type your Name" onChange={handleInput}/>

    <Button variant="contained" onClick={submithandler}>submit</Button>
    </div>
  )
}

export default StateBasics