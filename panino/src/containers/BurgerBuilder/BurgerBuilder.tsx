import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <h2>Burger Builder</h2>
                <Burger />
            </Aux>
        );
    }
}
