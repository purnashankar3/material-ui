import { Stack ,TextField,InputAdornment} from "@mui/material"
import React, { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function MuiTextField(){
    const [pswd,setPswd] = useState(null)
    const [flag,setFlag] = useState(true)
    const [value,setValue] = useState('')
   
    const showPassword =() =>{
      alert(pswd)
    }
    console.log(pswd)
    
    return(
    <Stack spacing={2} direction='column'>
        <Stack spacing={2} >
        <TextField label='Name' variant="outlined"></TextField>
        <TextField label='Name' variant="filled"></TextField>
        <TextField label='Name' variant="standard" disabled></TextField>
        <TextField label='read only' InputProps={{readOnly:true}}/>
        </Stack>
        <Stack direction='row'>
        <TextField label='weight' type='number' required  helperText="I's mandatory " error
        InputProps={{endAdornment:<InputAdornment>kg</InputAdornment>}} ></TextField>
        </Stack>

        <Stack display='block'  direction='column'>
        <TextField label='Password' type={flag?'password':''} 
        value={pswd}  onChange={(e)=>setPswd(e.target.value)}
         InputProps={{endAdornment:<InputAdornment>
         <VisibilityOffIcon onClick={()=>setFlag(!flag)}/>
         </InputAdornment>}}/>

         <TextField label='details' error={!value} helperText={!value?'Please fill this field':"Do not share it "}  onChange={(e)=>setValue(e.target.value)}></TextField>
        </Stack>
    </Stack>)
}
export default MuiTextField;