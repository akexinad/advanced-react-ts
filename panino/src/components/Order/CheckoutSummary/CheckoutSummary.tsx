import React, { FC } from "react";

import { Ingredients } from "../../../containers/BurgerBuilder/BurgerBuilder";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import styles from "./CheckoutSummary.module.css";

interface CheckoutSummaryProps {
    ingredients: Ingredients;
}

const CheckoutSummary: FC<CheckoutSummaryProps> = ({ ingredients }) => {
    const _click = () => {
        console.log("Hello");
    };

    return (
        <div className={styles.CheckoutSummary}>
            <h1>Enjoy!</h1>
            <div className={styles.Container}>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Danger" clicked={_click}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={_click}>
                CONTINUE
            </Button>
        </div>
    );
};

export default CheckoutSummary;
