import React, { FC } from "react";

import { IIngredients, IOrder } from "../../interfaces";

import styles from "./Order.module.css";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface OrderProps extends RouteComponentProps {
    orderId: IOrder["id"];
    ingredients: IIngredients;
    price: number;
}

interface IIngredientDetails {
    ingredient: string;
    quantity: number;
}

const Order: FC<OrderProps> = ({ orderId, ingredients, price, history, match, location }) => {
    const renderIngredients = () => {
        const ingredientsList: IIngredientDetails[] = [];

        if (!ingredients) {
            console.error(
                `Ingredients for order id ${orderId} is null or undefined.`
            );
            history.goBack();
            return;
        }

        Object.entries(ingredients).forEach(entry =>
            ingredientsList.push({
                ingredient: entry[0],
                quantity: entry[1]
            })
        );

        return (
            <ul>
                {ingredientsList.map((ingredient, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                textTransform: "capitalize",
                                display: "inline-block",
                                margin: "0 8px",
                                border: "1px solid #ccc",
                                padding: "5px"
                            }}
                        >
                            {ingredient.ingredient}:{" "}
                            <strong>{ingredient.quantity}</strong>
                        </span>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className={styles.Order}>
            <h4>INGREDIENTS</h4>
            {renderIngredients()}
            <p>
                Price: <strong>EUR {price}</strong>
            </p>
        </div>
    );
};

export default withRouter(Order);
