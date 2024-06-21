import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>MENU</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                    <Link to='/sign'>
                    Signup</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'><Link to='/'>
                    Login
                    </Link></Button>&nbsp;&nbsp;&nbsp;
               
                    <Button variant='contained' color='warning'><Link to='/ct'>
                    Counter
                    </Link></Button>&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='warning'><Link to='/list'>
                    Listmap
                    </Link></Button>&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='warning'><Link to='/api'>
                    Api
                    </Link></Button>&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='warning'><Link to='/use'>
                      UseEffect
                    </Link></Button>&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='warning'><Link to='/card'>
                      Cards
                    </Link></Button>
                     </Toolbar>         

        </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar