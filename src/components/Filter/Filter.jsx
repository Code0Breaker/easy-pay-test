import React, { useState } from "react";
import { Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import style from './Filter.module.css'
import filter from '../../images/filter.png'
const useStyles = makeStyles((theme) => ({
    formControl: {
      width: 130
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Filter(){
    const classes = useStyles()
    const [opt, setOpt] = useState('');

  const handleChange = (event) => {
    setOpt(event.target.value);
  };
    return(
        <div className={style.filter_block}>
            <div className={style.add_block}>
                <Typography variant={'h3'}>Overview</Typography>
                <Button variant={'outlined'} color={'primary'}>+ Add product</Button>
            </div>
            <div className={style.add_filter}>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                style={{height:40, background:'white', borderRadius:10}}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={opt}
                onChange={handleChange}
              >
                <MenuItem value={'Popular'}>Popular</MenuItem>
                <MenuItem value={'Popular'}>Popular</MenuItem>
                <MenuItem value={'Popular'}>Popular</MenuItem>
              </Select>
            </FormControl>
            <div className={style.filterBtn}>
                <IconButton>
                    <img src={filter} alt="filter" width='15' height='15'/>
                </IconButton>
            </div>
            
            </div>
        </div>
    )
}