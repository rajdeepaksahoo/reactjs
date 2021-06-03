import React from 'react'
import classes from './BackDrop.module.css'
const BackDrop = (props) => (
    props.show ? <div className={classes.backdrop} onClick={props.cancel}></div> : null
)
export default BackDrop