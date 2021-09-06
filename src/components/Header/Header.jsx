import React, { useState } from "react";
import style from './Header.module.css'
import logo from '../../images/logo.png'
import loop from '../../images/loop.png'
import settings from '../../images/settings.png'
import notes from '../../images/notes.png'
import { Avatar, Button, IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";
import ava from '../../images/avatar.png'

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  

export default function Header(){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return(
        <header className={style.header}>
            <div className={style.brand}>
                <img src={logo} alt="logo" />
                <div className={style.search}>
                    <img src={loop} alt="loop" />
                    <input placeholder='Search' type="text" />
                </div>
                
            </div>
            <div>
      <Button className={style.mobile_navigation} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Operations</MenuItem>
        <MenuItem>Analytics</MenuItem>
        <MenuItem>Transactions</MenuItem>
        <MenuItem className={style.mobile_profile}><IconButton><img src={settings} alt="settings" /></IconButton> Settings</MenuItem>
        <MenuItem className={style.mobile_profile}><IconButton><img src={notes} alt="notes" /></IconButton> Notifications</MenuItem>
        <MenuItem className={style.mobile_profile}>
            <div className={style.mobile_profile_image}>
                <img src={ava}/>
                <div className={style.mobile_profile_name}>
                    <p>Justin Humphery</p>
                    <span>Product designer</span>
                </div>
            </div>
        </MenuItem>
                
                
      </Menu>
    </div>
            <div className={style.navigation}>
                <a href="#">Dashboard</a>
                <a href="#">Operations</a>
                <a href="#">Analytics</a>
                <a href="#">Transactions</a>
            </div>
            <div className={style.profile}>
                <IconButton>
                    <img src={settings} alt="settings" />
                </IconButton>
                <IconButton>
                    <img src={notes} alt="notes" />
                </IconButton>
                <div className={style.profile_image}>
                    <img src={ava}/>
                    <div className={style.profile_name}>
                        <p>Justin Humphery</p>
                        <span>Product designer</span>
                    </div>
                </div>
                
            </div>
        </header>
    )
}