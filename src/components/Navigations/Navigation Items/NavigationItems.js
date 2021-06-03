import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from '../../Navigations/NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Check Out</NavigationItem>
    </ul>
)
export default NavigationItems