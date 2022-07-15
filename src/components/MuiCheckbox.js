import {FormControlLabel,Checkbox,Box} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
function MuiCheckbox(){
    const [checked,setChecked] = useState(false)
    console.log({checked})
    const handleChange=(event)=>{
        setChecked(event.target.checked)
    }
    return(
    <Box>

                <FormControlLabel label='Accept terms n conditions' value='' control={<Checkbox/>}/>
                <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} onChange={handleChange} checked={checked}/>
               
            
    </Box>
    )
}

export default MuiCheckbox;