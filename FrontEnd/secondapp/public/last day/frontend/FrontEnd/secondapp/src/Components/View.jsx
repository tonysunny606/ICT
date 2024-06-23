import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import Add from './Add'



const View = () => {
  var [user,setUser]=useState([])
  var [update,setUpdate]=useState(false)
  var [singleValue,setsingleValue]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then((res)=>{
        console.log(res.data)
        setUser(res.data)
    })
    .catch(err=>console.log(err))
},[])
const deleteValue = (id)=>{
    console.log(id)
    axios.delete("http://localhost:3005/remove/"+id)
    .then((responce)=>{
        alert(responce.data)
        window.location.reload(false)
        }).catch((err)=>console.log(err))    
    
}
const updateValue = (val)=>{
    console.log("update")
    setUpdate(true)
    setsingleValue(val)
}

    
    var finalJSX=<TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Employee_Name</TableCell>
                    <TableCell>Employee_age</TableCell>
                    <TableCell>Employee_position</TableCell>
                    <TableCell>Employee_salary</TableCell>

                    
                    </TableRow>
                 </TableHead>
                 <TableBody>
                    {user.map((val,i)=>{
                        return(
                    <TableRow>
                        <TableCell>{val.ename}</TableCell>
                       <TableCell>{val.eage}</TableCell>
                       <TableCell>{val.eposition}</TableCell>
                       <TableCell>{val.esalary}</TableCell>
                      
                       <TableCell>
                        <Button onClick={()=> deleteValue(val._id)}>  Delete </Button> &nbsp;&nbsp;
                        <Button onClick={()=>updateValue(val)}>Update</Button>
                       </TableCell>


                       
                        </TableRow>    
                        
                    )
                })}                
                        </TableBody>                             
            </Table>
        </TableContainer>
        if(update) finalJSX=<Add data={singleValue}method='put'/>
        
        return finalJSX


}
export default  View
