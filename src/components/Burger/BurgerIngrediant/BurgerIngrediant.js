import React, {Component} from 'react'
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

class BurgerIngrediant extends Component {
    render(){
    let ingtrediant = null
    switch(this.props.type){
        case('bread-bottom'):
        ingtrediant = <div className={classes.BreadBottom}></div>
        break;
        
        case('bread-top'):
        ingtrediant = 
            <div className={classes.BreadTop}>
                <div className = {classes.Seeds1}></div>
                <div className = {classes.Seeds2}></div>
            </div>
        break;
        
        case('meat'):
        ingtrediant = <div className={classes.Meat}></div>
        break;

        case('cheese'):
        ingtrediant = <div className={classes.Cheese}></div>
        break;

        case('salad'):
        ingtrediant = <div className={classes.Salad}></div>
        break;

        case('bacon'):
        ingtrediant = <div className={classes.Bacon}></div>
        break;

        default:
            ingtrediant = null;
    }
    return ingtrediant;}
}
// BurgerIngrediant.proptypes = {
//     type:PropTypes.string.isRequired
// };

export default BurgerIngrediant