import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [num,setnum]=useState(0)
  
 const add=() => {
  setnum(num+1)
 }
 const sub=() =>
  {
    setnum(num-1)

}



return (
<div>

<Typography variant='h6'>COUNT {num}</Typography>

<Button variant="contained" onClick={add}>ADD</Button><br /><br /><br />
<Button variant="contained" onClick={sub}>MINUS</Button>
</div>
  )
}
export default Counter


  