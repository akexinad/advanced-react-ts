import React, { FC } from "react";
import { Ingredients } from "../../containers/BurgerBuilder/BurgerBuilder";

import styles from "./Order.module.css";

interface OrderProps {
    ingredients: Ingredients;
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
