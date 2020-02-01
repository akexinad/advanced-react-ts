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

interface Ingredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

export interface DisabledOptions {
    salad: boolean;
    bacon: boolean;
    cheese: boolean;
    meat: boolean;
}

interface AppState {
    ingredients: Ingredients;
    totalPrice: number;
    purchasable: boolean;
}

export default class BurgerBuilder extends Component {
    state: AppState = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    };

    updatePurchaseState = (updatedIngredients: Ingredients) => {
        const sum = Object.values(updatedIngredients).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({
            purchasable: sum > 0 ? true : false
        });
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

        this.updatePurchaseState(updatedIngredients);
    };

    _removeIngredient = (type: IngredientTypes) => {
        const oldCount: number = this.state.ingredients[type];

        if (oldCount <= 0) {
            console.warn("You can't have -1 " + type);
            return;
        }

        const updatedCount: number = oldCount - 1;
        const updatedIngredients: AppState["ingredients"] = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceToBeRemoved: number = INGREDIENT_PRICES[type];
        const originalPrice: number = this.state.totalPrice;
        const newPrice: number = originalPrice - priceToBeRemoved;

        if (newPrice < 4) {
            console.warn("Minimum price is $4");
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: 4
            });
            return;
        }

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    };

    render() {
        const disabledIngredients: DisabledOptions = {
            salad: Boolean(this.state.ingredients.salad),
            bacon: Boolean(this.state.ingredients.bacon),
            cheese: Boolean(this.state.ingredients.cheese),
            meat: Boolean(this.state.ingredients.meat)
        };

        return (
            <Aux>
                <h2>Burger Builder</h2>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this._addIngredient}
                    ingredientRemoved={this._removeIngredient}
                    disabledInfo={disabledIngredients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}
