import React from "react"
import {Typography} from "@mui/material";

function MuiTypography(){
    return (<div>
        <Typography variant="h1">h1 heading </Typography>
        <Typography variant="h2" gutterBottom>h2 heading </Typography>
        <Typography variant="h3" component='h1'>h3 heading </Typography>
        <Typography variant="h4">h4 heading </Typography>
        <Typography variant="h5">h5 heading </Typography>
        <Typography variant="h6">h6 heading </Typography>

        <Typography variant="subtitle">subtitle </Typography>
        <Typography variant="subtitle1"> subtitle1 **a pansexual person “has the potential for emotional, romantic, or sexual 
        attraction to people of any gender.” The term pansexual consists of two words: </Typography>
        <Typography variant="subtitle2"> subtitle2** a pansexual person “has the potential for emotional, romantic, or sexual 
        attraction to people of any gender.” The term pansexual consists of two words: </Typography>

        <Typography variant="body1">body1**According to the Human Rights Campaign, 
        a pansexual person “has the potential for emotional, romantic, or sexual 
        attraction to people of any gender.” The term pansexual consists of two words:
        pan and sexual. Pan means all, 
        so pansexuality means sexual attraction to a variety of, or all, genders.</Typography>
        <Typography variant="body2"> body2** According to the Human Rights Campaign, 
        a pansexual person “has the potential for emotional, romantic, or sexual 
        attraction to people of any gender.” The term pansexual consists of two words:
        pan and sexual. Pan means all, 
        so pansexuality means sexual attraction to a variety of, or all, genders. </Typography>


    </div>
    )
}
export default MuiTypography;