import { TextareaAutosize, TextField } from '@mui/material';
import React from 'react';

const Review = () => {
    return (
        <div style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
           
            <div style={{width:'50%'}}>
                <h3>Give your valuable Rating & Review</h3>
            <TextField sx={{width:'100%'}} placeholder='Your Name' id="outlined-basic" label="Your Name" variant="outlined" />
            <TextField sx={{width:'100%', mt:2}} placeholder='Rating number(0 to 5)'  id="outlined-basic" label="Rating number" variant="outlined" type='number' />
            <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder="your comment"
                style={{ width: "100% ", marginTop:'10px'}}
               
/>
            </div>
</div>
        
    );
};

export default Review;