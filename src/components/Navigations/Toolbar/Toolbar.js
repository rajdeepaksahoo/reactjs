import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation Items/NavigationItems'
import DrawerToggle from './DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css'
const Toolbar = (props) => {

    return(
    <header className={classes.Toolbar}>
        <DrawerToggle show={props.show}></DrawerToggle>
        <div className= {classes.Logo}>
            <Logo></Logo>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
    )
};

export default Toolbar