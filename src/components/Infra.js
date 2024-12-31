import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../index.css";
import { FaStore } from "react-icons/fa";
// import Chart from "react-apexcharts";
import { GiProfit } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";


function Infra() {
  return (
    <>
    <Box height={50}/>
    <Box height={50} sx={{display:'flex'}}/>
    
    <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 49+'%', height:151}} className='gradient'>
        <CiCreditCard1 style={{marginTop:'20px', marginLeft:'20px', fontSize:'20px', color:'white'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
          $500.00
        </Typography>
        <span style={{color:'white'}}>Total Earnings</span>
        
      </CardContent>
     
    </Card>
        <Card sx={{ minWidth: 49+'%', height:151}} className='gradientlight'>
        <FaShoppingBag  style={{marginTop:'20px', marginLeft:'20px', fontSize:'20px', color:'white'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
          $900.00
        </Typography>
        <span style={{color:'white'}}>Total Orders</span>
        
      </CardContent>
     
    </Card>
    </Stack>
          
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2} >
        <Card sx={{ minWidth: 345}} className='gradientlight2'>
      
      <Stack spacing={2} direction='row' >
        
          <FaStore style={{marginTop:'20px', fontSize:'20', marginLeft:'20px', color:'white'}}/>
        
      
        <div className='paddingall'>
        
          <span className='pricetitle'>$203k</span> <br/>
        <span className='pricesubtitle'>Total Income</span>
        </div>
        </Stack>
        
      
     
    </Card>
        <Card sx={{ minWidth: 345}}className='gradientlight1'>
      
      <Stack spacing={2} direction='row' >
      <GiProfit style={{marginTop:'20px', fontSize:'20', marginLeft:'20px'}}/><br/>
      <div className='paddingall'>
      <span className='pricetitle'>$12k</span><br/>
      <span className='pricesubtitle'>Total Profit</span>
      </div>
       </Stack>
      
     
    </Card>
    </Stack>
          
        </Grid>
       
      </Grid>
      <Box height={50}/> 
    <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ height: 60 +'vh' }}>
      
        <CardContent>
        
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height: 60 +'vh' }}>
      <CardContent>

      </CardContent>
     
      </Card>
        </Grid>
       
      </Grid>
    </>
  )
}

export default Infra
