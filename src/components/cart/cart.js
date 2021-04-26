import React, { useState } from 'react'
import {Button,Radio,TextField, RadioGroup,FormControlLabel, Container,Divider,List,ListItem,ButtonGroup,FormControl,FormLabel, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import './cart.scss'
import phone from '../../image/phone.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      fontFamily: 'sans-serif'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    forms: {
        '& > *': {
          margin: theme.spacing(1),
          width: '55ch',
        },
      },
  }));
const Cart = () => {
    const classes = useStyles();
    
    const [qty,setQty] = useState(1)
    const [pickMethod, setPickMethod] = useState('site')
      
    return (
        <div className={classes.root} style={{paddingTop:'150px', paddingBottom:'80px'}}>
        <Container  fixed maxWidth="sm" disableGutters>
            
            <Grid container>
            <Grid item xs={8}><Link className="link" to='/'><i className="fas fa-chevron-left"></i> Buy More Products</Link></Grid>
            <Grid  item xs={4}>My Cart</Grid>
            </Grid>
            <div className="cart__container">
               <Grid container>
                <Grid item xs={3}>
                <List component='nav' disablePadding>
                    <ListItem><img className="image" src={phone} alt='products'/></ListItem>
                    <ListItem>
                    <span style={{color:'#666',fontSize:'12px'}}> <i className="fas fa-times"></i> Remove
                    </span></ListItem>
                    
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List component='nav' disablePadding>
                        <ListItem>MI Note 10</ListItem>      
                        <ListItem>
                        <span style={{color:'#666',fontSize:'12px'}}>
                        Offer Combo of supplies (Wires from indoor unit to outdoor unit, Simili, up to 5 meters of copper pipe, free of charge) and Free Installation
                        </span>
                        </ListItem> 
                        <ListItem>
                            <span style={{color:'#666',fontSize:'12px'}}>
                            Pink
                            </span>
                            </ListItem>     
                    </List>
                </Grid>
                <Grid item xs={3} style={{paddingLeft:'10px'}}>
                    <List component='nav' disablePadding>
                        <ListItem>
                            <span style={{color:'#e0343c',fontSize:'15px'}}>{`${qty * 13.990}₫`}</span>
                            
                        </ListItem>
                        <ListItem>
                        <span style={{color:'#666',fontSize:'15px', textDecoration:'line-through'}}>23.990₫</span>
                        </ListItem>
                        <ListItem>
                        <ButtonGroup fullWidth color="inherit" aria-label="outlined primary button group">
                        <Button disabled={qty===1} onClick={()=> setQty(qty - 1)}  variant='outlined'>-</Button>
                        <Button variant='outlined' >{qty}</Button>
                        <Button variant='outlined' onClick={()=>setQty(qty + 1) } >+</Button>
                        </ButtonGroup>
                        </ListItem>
                    </List>
                </Grid>
               </Grid>
               <Divider/>
               <Grid container>
                   <Grid item xs={9}>
                   <List component='nav' disablePadding>
                       <ListItem>
                           <Link className='link'>Use Discount Code</Link>
                       </ListItem>
                       <ListItem>
                       Provisional ({qty} product):
                       </ListItem>
                       <ListItem>
                           <strong> Total Item:</strong>
                      </ListItem>
                   </List>
                   </Grid>
                   <Grid item xs={3}>
                   <List component='nav' disablePadding>
                       <ListItem>
                          Price
                       </ListItem>
                       <ListItem>
                       <span style={{color:'#000',fontSize:'15px'}}>{`${qty * 13.990}₫`}</span>
                       </ListItem>
                       <ListItem>
                       <strong style={{color:'#e0343c',fontSize:'15px'}}>{`${qty * 13.990}₫`}</strong>
                       </ListItem>
                       </List>
                   </Grid>
               </Grid>
               <Divider/>
               
        <form style={{marginTop:'5px',display:'flex',flexDirection:'column',paddingBottom:'20px'}} className={classes.forms} noValidate autoComplete="off">
        <FormControl component="fieldset">
      <FormLabel component="legend">Customer Information</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <FormControl variant='standard'>
    <TextField   id="outlined-basic" label="Name" variant="outlined" />
    </FormControl>
    <FormControl variant='standard'>
    <TextField   id="outlined-basic" label="Phone Number" variant="outlined" />
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">CHOOSE HOW TO RECEIVE GOODS:</FormLabel>
      <RadioGroup aria-label="method" name="method1" value={pickMethod} onChange={e=> setPickMethod(e.target.value)} >
        <FormControlLabel value="site" control={<Radio />} label="Assigned site" />
        <FormControlLabel value="superMarket" control={<Radio />} label="Pick up at supermarket" />
      </RadioGroup>
    </FormControl>
    {pickMethod === 'site' &&
    <>
     <FormLabel component="legend">Select the address for delivery time and shipping fee (if applicable)</FormLabel>
    <FormControl variant='standard'>
    <TextField   id="outlined-basic" label="City" variant="outlined" />
    </FormControl>
    <FormControl variant='standard'>
    <TextField   id="outlined-basic" label="District" variant="outlined" />
    </FormControl>
    <FormControl variant='standard'>
    <TextField   id="outlined-basic" label="Ward/ Commune" variant="outlined" />
    </FormControl>
    <FormControl variant='standard'>
    <TextField   id="outlined-basic" label="House Number, Street name" variant="outlined" />
    </FormControl>
    </>
    }
    {pickMethod === 'superMarket' && 
    <Paper style={{padding:'20px'}} elevation={3}>
        Shopping cart has products that do not support receiving goods at supermarkets.
        This product falls on same category. Please use Assigned site
        </Paper>}
        <FormControl variant='standard'>
    <TextField   id="outlined-basic" label="Optional" variant="outlined"  />
    </FormControl>
    <Divider/>
    <div className="form__last">
        <strong>Total Amount: <span style={{color:'red'}}>{`${qty * 13.990}₫`}</span></strong>
        <Button size='large' color='secondary' style={{marginTop:'15px'}} variant="contained">Order</Button>
        <p>You can choose your payment method after placing your order</p>
    </div>


    </form>
    </div>
           
        </Container>
        </div>
    )
}

export default Cart
