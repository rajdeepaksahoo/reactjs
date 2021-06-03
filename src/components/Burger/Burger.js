import React from 'react'
import classes from './Burger.module.css'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant'
const Burger =(props)=>{
   let transformedIngrediants = Object.keys(props.ingrediants).map(igKey=>{
       return [...Array(props.ingrediants[igKey])].map((_,index)=> {return <BurgerIngrediant key={igKey+index} type={igKey}/>})
   }).reduce((arr,ing)=>{
       return arr.concat(ing)
   })
   if (transformedIngrediants.length===0){
       transformedIngrediants= <p>Please Add Ingrediants</p>
   }
    return(<div className={classes.Burger}>
        <BurgerIngrediant type='bread-top' />
            {transformedIngrediants}
        <BurgerIngrediant type='bread-bottom' />
    </div>)
    
}
export default Burger