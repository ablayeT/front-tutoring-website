import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) =>{
    return {
        footer : {
            display: 'flex', 
            justifyContent: 'center',  
            background: '#FFA500', 
            color:'black',
            fontSize: '19px', 
            height:'100px', 
        }
    }
    
})

function Index() {
    const {classes} = useStyles();
  return (
    <Box className={classes.footer}>Footer</Box>
  )
}

export default Index