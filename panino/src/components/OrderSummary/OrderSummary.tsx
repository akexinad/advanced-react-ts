import React, { FC } from "react";
import Aux from "../../hoc/Auxilliary";
import { Ingredients } from "../../containers/BurgerBuilder/BurgerBuilder";

interface OrderSummaryProps {
    ingredients: Ingredients;
}

const OrderSummary: FC<OrderSummaryProps> = ({ ingredients }) => {
    const ingredientSummary = Object.entries(ingredients).map(
        (ingredient, index) => (
            <li key={index}>
                <span
                    style={{
                        textTransform: "capitalize"
                    }}
                >
                    {ingredient[0]}
                </span>
                : {ingredient[1]}
            </li>
        )
    );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious panino with the following ingredients</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    );
};

export default OrderSummary;
