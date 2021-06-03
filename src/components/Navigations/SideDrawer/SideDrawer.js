import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation Items/NavigationItems'
import classes from './SideDrawer.module.css'
import Auxilary from '../../../hoc/Auxilary'
import BackDrop from '../../UI/BackDrop/BackDrop'
const SideDrawer = (props) => {
   let attachedClasses
    if (props.show) {
        attachedClasses= [classes.SideDrawer,classes.Open]
    }else{
        attachedClasses = [classes.SideDrawer,classes.Close]
    }
    return (
        <Auxilary>
            <BackDrop show={props.show} cancel={props.cancel}></BackDrop>
            <div className={attachedClasses.join(' ')}>
                    <Logo Logo={classes.Logo}/>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
    </Auxilary>
    )
}
export default SideDrawer