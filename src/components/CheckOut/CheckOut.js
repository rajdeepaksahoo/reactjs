import Reaxt from 'react'
import Auxilary from '../../hoc/Auxilary'
import Button from '../UI/Button/Button'

const CheckOut = (props) => {
    let ingrediantsSummery = Object.keys(props.ingrediants).map(igKey=>{
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingrediants[igKey]}</li>
    })
        return ( <Auxilary>
            <h3>Your Order</h3>
            <p>A Delicious Burger With Ingrediants: </p>
            <ul>
                {ingrediantsSummery}
                <p>TOTAL PRICE : {props.price}</p>
                <p>Wanna Checkout?</p>
            </ul>
            <Button type='Success' clicked={props.continue}>Proceed</Button>
            <Button type='Danger' clicked={props.cancel}>Cancel</Button>
        </Auxilary>
    )
}
export default CheckOut