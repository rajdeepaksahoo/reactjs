import React,{Component} from 'react'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import Auxilary from '../../hoc/Auxilary'
import SideDrawer from '../Navigations/SideDrawer/SideDrawer'
import Toolbar from '../Navigations/Toolbar/Toolbar'
import classes from './Layout.module.css'

class Layout extends React.Component{
    state={
        showSideDrawer: false
    }

    SideDrawerClosed=()=>{
        this.setState(
            {
                showSideDrawer: false
            }
        )
    }
    SideDrawer=()=>{
    
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    render(){
    return(
    <Auxilary>
        {/* <div>Toolbar, Sidebar, Backdrop </div> */}
        <Toolbar show={this.SideDrawer}></Toolbar>
        <SideDrawer cancel={this.SideDrawerClosed} show={this.state.showSideDrawer}></SideDrawer>
        <main className={classes.Layout}>
            {/* {props.children} */}
            <BurgerBuilder></BurgerBuilder>
        </main>
    </Auxilary>
    )
}
}
export default Layout