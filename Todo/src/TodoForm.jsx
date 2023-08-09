import { ListItem } from "@mui/material";
import {TextField} from "@mui/material";
import { useState } from "react";
import { Create } from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {InputAdornment} from "@mui/material";

export default function TodoForm({addTodo}){
    const [Text, setText]=useState("")
    const handChange=(evt)=>{
        setText(evt.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(Text);
        setText=""
    }
    return(
        <form onSubmit={handleSubmit}>
        <ListItem>
           <TextField id="outlined-basic" label="Add" variant="outlined" onChange={handChange} value={Text}
           InputProps={{
            endAdornment:  (<InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              type="submit"
            >
                <Create/>
            </IconButton>
          </InputAdornment>
            ),
           }}
           />
        </ListItem>
        </form>
    )
   
}
