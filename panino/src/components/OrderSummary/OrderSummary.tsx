import React, { FC } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { Ingredients } from "../../containers/BurgerBuilder/BurgerBuilder";
import Button from "../UI/Button/Button";

interface OrderSummaryProps {
    ingredients: Ingredients;
    purchaseCancelled: () => void;
    purchaseContinued: () => void;
    price: number;
}

const OrderSummary: FC<OrderSummaryProps> = ({
    ingredients,
    purchaseCancelled,
    purchaseContinued,
    price
}) => {
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
            <p>
                <strong>Total Price: ${price.toFixed(2)}</strong>
            </p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={purchaseContinued}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default OrderSummary;
