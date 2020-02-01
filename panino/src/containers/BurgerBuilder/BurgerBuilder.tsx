import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     salad: 1,
        //     bacon: 1,
        //     cheese: 2,
        //     meat: 2
        // }
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return (
            <Aux>
                <h2>Burger Builder</h2>
                <Burger ingredients={this.state.ingredients} />
            </Aux>
        );
    }
}
