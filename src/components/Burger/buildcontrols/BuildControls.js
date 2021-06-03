import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './builscontrol/BuildControl'
const controls = [
    {label: 'Salad (20)', type: 'salad'},
    {label: 'Meat (30)' , type: 'meat'},
    {label: 'Cheese(25)', type: 'cheese'},
    {label: 'Bacon(25)', type: 'bacon'}
]

const BuildControls = (props) => (
    
    <div className={classes.BuildControls}>
        <p><strong>Price:- {props.price}</strong></p>
        {controls.map(cntrl=>(
            <BuildControl key={cntrl.label} label= {cntrl.label}
            added={()=>props.ingrediantAdded(cntrl.type)}
            removed={()=>props.ingrediantRemoved(cntrl.type)}
           disabled = {props.disabled[cntrl.type]} />
        ))}
       
        {/* <button className={classes.ClearButton} onClick={props.clrarall}>Clear All</button> */}
       
       <button className={classes.OrderButton}
       disabled={!props.purchasable} onClick={props.purchasing} >ORDER NOW</button>
    </div>
    
)
export default BuildControls