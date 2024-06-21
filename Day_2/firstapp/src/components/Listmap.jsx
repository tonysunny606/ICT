import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inp,setInp]=useState(["ICTAK"])
    var[data,setData]=useState("")

    const inputhandle=(e)=>{
        setData(e.target.value)
    }
        const add=()=>{
            setInp([...inp,data])
            console.log(inp)
            setData("")// refresh
        }
  return (
    <div>
            <TextField label="Enter you name:" onChange={inputhandle} value={data} variant="outlined"/>&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={add}>submit</Button>
            <br /><br /><br />
            <ul>
                {inp.map((v,i)=>{
                    return <li>{v}</li>

                })}
            </ul>

    </div>
  )
}

export default Listmap