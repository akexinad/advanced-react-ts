import React, { Component } from "react";
import axios from "../../axios-orders";

import Aux from "../../hoc/Auxilliary/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

import styles from "./BurgerBuilder.module.css";

export type IngredientLabels = "Salad" | "Bacon" | "Cheese" | "Meat";
export type IngredientTypes = "salad" | "bacon" | "cheese" | "meat";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

export interface Ingredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

interface AppState {
    ingredients: Ingredients;
    totalPrice: number;
    purchasable: boolean;
    purchasing: boolean;
    loading: boolean;
}

export type DisabledInfo = {
    [key in IngredientTypes]: boolean;
};

export default class BurgerBuilder extends Component {
    state: AppState = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    };

    updatePurchaseState = (updatedIngredients: Ingredients) => {
        const sum = Object.values(updatedIngredients).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({
            purchasable: sum > 0 ? true : false
        });
    };

    updateDisabledIngredients = (updatedIngredients: Ingredients) => {
        const disabledIngredients: any = {};

        for (let [ingredient, quantity] of Object.entries(updatedIngredients)) {
            disabledIngredients[ingredient] = Boolean(quantity);
        }

        return disabledIngredients;
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

    _purchase = () => {
        this.setState({
            purchasing: true
        });
    };

    _purchaseCancelled = () => {
        this.setState({
            purchasing: false
        });
    };

    _purchaseContinued = () => {
        this.setState({
            loading: true
        });

        const order = {
            createdAt: new Date(),
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Fellini",
                address: {
                    street: "123 fake st",
                    zipCode: "12345",
                    country: "italy"
                },
                email: "fellini@ex.it"
            },
            deliveryMethod: "fedex"
        };

        axios
            .post("/orders.json", order)
            .then(() =>
                this.setState({
                    loading: false,
                    purchasing: false
                })
            )
            .catch(() =>
                this.setState({
                    loading: false,
                    purchasing: false
                })
            );
    };

    renderOrderSummarySpinner = () => {
        return this.state.loading ? (
            <Spinner />
        ) : (
            <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancelled={this._purchaseCancelled}
                purchaseContinued={this._purchaseContinued}
                price={this.state.totalPrice}
            />
        );
    };

    render() {
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this._purchaseCancelled}
                >
                    {this.renderOrderSummarySpinner()}
                </Modal>
                <h1 className={styles.Heading}>Oh Look! Panini!</h1>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this._addIngredient}
                    ingredientRemoved={this._removeIngredient}
                    disabledInfo={this.updateDisabledIngredients(
                        this.state.ingredients
                    )}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this._purchase}
                />
            </Aux>
        );
    }
}
