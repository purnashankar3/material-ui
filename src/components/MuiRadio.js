import {Box, FormControl,FormLabel, FormControlLabel,RadioGroup,Radio} from "@mui/material"
import { useState } from "react";
function MuiRadio(){
    const [value,setValue] = useState('')
    console.log({value})
    const handleRadio=(event)=>{
        setValue(event.target.value)
    }
    return(
    <Box>
        <FormControl>
            <FormLabel id='form-group-radio-btn'>Years Of Expereince</FormLabel>
            <RadioGroup aria-labelledby="form-group-radio-btn" value={value} onChange={handleRadio} row>
                <FormControlLabel control={<Radio/>} label='0-3' value='0-3'/>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio/>} label='5-10' value='5-10'/>
            </RadioGroup>
        </FormControl>
    </Box>
    )
}

export default MuiRadio;