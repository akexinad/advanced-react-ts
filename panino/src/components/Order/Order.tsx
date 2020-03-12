import React, { FC } from "react";

import { IIngredients } from "../../interfaces";

import styles from "./Order.module.css";

interface OrderProps {
    ingredients: IIngredients;
    price: number;
}

const Order: FC<OrderProps> = ({ ingredients, price }) => {

    const renderIngredients = () => {
        
    }
    
    return (
        <div className={styles.Order}>
            <p>INGREDIENTS</p>
            <p>
                Price: <strong>EUR {price}</strong>
            </p>
        </div>
    );
};

export default Order;
