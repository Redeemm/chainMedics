'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../public/logo.png';


export default function MenuAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="inherit">
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            Height: 64
                        }}
                        alt='Logo'
                        src={Logo}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}