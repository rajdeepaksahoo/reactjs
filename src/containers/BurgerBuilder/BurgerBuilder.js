import React ,{Component} from 'react';
import BuildControls from '../../components/Burger/buildcontrols/BuildControls';
import Burger from '../../components/Burger/Burger';
import CheckOut from '../../components/CheckOut/CheckOut';
import Modal from '../../components/UI/Modal/Modal';
import Auxilary from '../../hoc/Auxilary';


const INGREDIANT_PRICE = {
    bacon: 25,
    salad: 20,
    meat: 30,
    cheese: 25,
    }


class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingrediants:{
                bacon: 0,
                salad: 0,
                meat: 0,
                cheese: 0,
                },
                totalPrice: 20,
                purchasable: false,
                purchasing : false
            }
    }
    Purchase=()=> {
        this.setState(
            {
                purchasing:true
            }
        )
    }
    updatePurchaseState (ingrediants) {
        
        const sum = Object.keys(ingrediants).map(igKey => {
            return ingrediants[igKey]
        }).reduce((sum,el)=>{
            return sum + el
        },0)
        this.setState({purchasable: sum > 0})
    }

    addIngrediantHandeller = (type) => {
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        }
        updatedIngrediants[type] = updatedCount;
        const priceAdition = INGREDIANT_PRICE[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdition;
        this.setState({
            totalPrice:newPrice, ingrediants: updatedIngrediants
        })
        this.updatePurchaseState(updatedIngrediants);
    }
    removeIngrediantHandeller = (type) => {
        const oldCount = this.state.ingrediants[type];
        // if (oldCount<=0){
        //     return;
        // }
        const updatedCount = oldCount - 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        }
        updatedIngrediants[type] = updatedCount;
        const priceDeduction = INGREDIANT_PRICE[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice:newPrice, ingrediants: updatedIngrediants
        })
        this.updatePurchaseState(updatedIngrediants);
    }
    clearall = () => {
        const defaultIngrediants = {
            bacon: 0,
            salad: 0,
            meat: 0,
            cheese: 0,
        }
        const defaultPrice = 20
        this.setState(
            {
                ingrediants:defaultIngrediants ,
                    totalPrice: defaultPrice
            }
            
        )
    }
    cancelHandeller=()=>{
        this.setState(
            {
                purchasing: false
            }
        )
    }
    continueHandeller=()=>{
        alert('You Continue !!!')
    }
    render(){
        const disabledIngrediants ={
            ...this.state.ingrediants
        }
        for (let key in disabledIngrediants){
            disabledIngrediants[key] = disabledIngrediants[key] <= 0
        }
        return(
        <Auxilary>
            <Modal show={this.state.purchasing} cancel={this.cancelHandeller}>
                <CheckOut cancel={this.cancelHandeller} ingrediants={this.state.ingrediants}
                price= {this.state.totalPrice}
                continue={this.continueHandeller}></CheckOut>
            </Modal>
            <Burger ingrediants={this.state.ingrediants}></Burger>
            <BuildControls ingrediantAdded= {this.addIngrediantHandeller}
                ingrediantRemoved={this.removeIngrediantHandeller}
                disabled = {disabledIngrediants}
                price= {this.state.totalPrice}
                purchasable={this.state.purchasable}
                purchasing={this.Purchase}
                clrarall={this.clearall}>
            </BuildControls>
        </Auxilary>
        )
}
}
export default BurgerBuilder