import React from 'react'
import Auxilary from '../../../hoc/Auxilary'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Modal.module.css'
const modal =(props)=>{
    return <Auxilary>
        <BackDrop show={props.show} cancel={props.cancel}></BackDrop>
        <div className={classes.Modal}
            style={{transform:props.show ? 'translateY(0)':'translateY(-100vh',
            opacity: props.show ? '1': '0' }}>
                {props.children}
    </div>
    </Auxilary>
}
export default modal