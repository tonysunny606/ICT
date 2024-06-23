import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


import React from 'react'


const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>MENU</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                    <Link to='/add'>
                    ADD</Link></Button>&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='success'>
                    <Link to='/vi'>
                    view</Link></Button>&nbsp;&nbsp;&nbsp;

                    
                    
            </Toolbar>    
                         

        </AppBar>

    </div>
  )
}

export default Navbar