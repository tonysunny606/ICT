import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const SampleUse = () => {
    var[x,setX]= useState();
    const input=()=> {
        setX("Hello React")
    }
    const input2=()=> {
        setX("Hello Anglar")
            
        }
    const input3=()=> {
        setX("Hello Next")
    }   
    useEffect(()=> {
        input2();
    },[])
  return (
    <div>               <Typography variant='h6'>WELCOME TO {x} </Typography>

                    <Button variant="contained" color='primary' onClick={input}>React</Button>&nbsp;&nbsp;
                    <Button variant="contained" color='secondary' onClick={input2}>Angular</Button>&nbsp;&nbsp;
                    <Button variant="contained" color='success' onClick={input3}>Next</Button>&nbsp;&nbsp;



    </div>
  )
}

export default SampleUse