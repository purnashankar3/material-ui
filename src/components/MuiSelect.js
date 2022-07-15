import {Box,TextField,MenuItem} from '@mui/material'
import { useState } from 'react';

function MuiSelect(){
    const [country,setCountry] = useState([])
    console.log({country})
    const handleChange = (event) =>{
        setCountry(event.target.value)
    }
    return(<Box width='250px'>
        <TextField label='Select country' select value={country} onChange={handleChange} fullWidth
        SelectProps={{multiple:true}}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>)
}
export default MuiSelect;