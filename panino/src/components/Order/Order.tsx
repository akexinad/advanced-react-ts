import React, { FC } from "react";

import { IIngredients } from "../../interfaces";

import styles from "./Order.module.css";

interface OrderProps {
    ingredients: IIngredients;
    price: number;
}

interface IIngredientDetails {
    ingredient: string;
    quantity: number;
}

const Order: FC<OrderProps> = ({ ingredients, price }) => {
    const renderIngredients = () => {
        const ingredientsList: IIngredientDetails[] = [];

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

export default Order;
