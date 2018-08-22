import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends  React.Component {

    componentWillUpdate () {
        console.log('orderSummary willUpdate')
    }

   render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingredient => {
            return <li key={ingredient}>
            <span style={{textTransform: 'capitalize'}}>
                {ingredient}: {this.props.ingredients[ingredient]}
                </span>
            </li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }
} 

export default OrderSummary;