import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

export type IngredientLabels = "Salad" | "Bacon" | "Cheese" | "Meat"; 
export type IngredientTypes = "salad" | "bacon" | "cheese" | "meat";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

interface AppState {
    ingredients: {
        salad: number;
        bacon: number;
        cheese: number;
        meat: number;
    };
    totalPrice: number;
}

export default class BurgerBuilder extends Component {
    state: AppState = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },
        totalPrice: 4
    };

    _addIngredient = (type: IngredientTypes) => {
        const oldCount: number = this.state.ingredients[type];
        const updatedCount: number = oldCount + 1;
        const updatedIngredients: AppState["ingredients"] = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceToBeAdded: number = INGREDIENT_PRICES[type];
        const originalPrice: number = this.state.totalPrice;
        const newPrice: number = originalPrice + priceToBeAdded;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    };

    _removeIngredient = () => {};

    render() {
        return (
            <Aux>
                <h2>Burger Builder</h2>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this._addIngredient}
                />
            </Aux>
        );
    }
}
