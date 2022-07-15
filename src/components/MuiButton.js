import React from "react"
import {Button,Stack,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

function MuiButton(){
    const [formats,setFormats] = useState([])
   console.log({formats})
    const handleFormats=(_event,updatedFormats)=>{
        setFormats(updatedFormats)
    }
    return (
    <Stack spacing={2}>
    <Stack display='flex' spacing={5} direction="column">
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" href='https://google.com'>Contained</Button>

    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'> Primary</Button>
        <Button variant='contained' color='warning'> Warning</Button>
        <Button variant='contained' color='error'> Error</Button>
        <Button variant='contained' color='info'> Primary</Button>
        <Button variant='contained' color='success'> Success</Button>
        <Button variant='contained' color='secondary'> Secondary</Button>

    </Stack>
    <Stack display='block' spacing={2} direction='row'>
        <Button variant="contained" size='small'>Small</Button>
        <Button variant="contained" size='medium'>Medium</Button>
        <Button variant="contained" size='large'>Large</Button>
    </Stack>
    <Stack direction='row'>
        <Button variant='contained' size='large' startIcon={<SendIcon/>} disableElevation>Send</Button>
        <Button variant='contained' size='large' endIcon={<SendIcon/>} disableRipple>Send</Button>
        <IconButton variant='outlined' color='success' size="small"><SendIcon/></IconButton>
        <IconButton  variant='contained' size='medium' color="error"><MailOutlineIcon/></IconButton>
        <ButtonGroup variant='contained' color='secondary'  aria-label='button group'>
            <Button onClick={()=>alert('Clicked First one')}>First</Button>
            <Button variant="outlined">Second</Button>
            <Button>Third</Button>

        </ButtonGroup>
    </Stack>
    <Stack>
        <ToggleButtonGroup color="primary" value={formats} onChange={handleFormats} exclusive>
            <ToggleButton value='bold123' aria-label="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='italic123' aria-label="italic"><FormatItalicIcon/></ToggleButton>
            <ToggleButton value='underlined123' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    </Stack>
    )
}
export default MuiButton;