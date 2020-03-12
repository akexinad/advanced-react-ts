import React, { FC } from "react";

import { IIngredients } from "../../../interfaces";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import styles from "./CheckoutSummary.module.css";

interface CheckoutSummaryProps {
    ingredients: IIngredients;
    cancelled: () => void;
    continued: () => void;
}

const CheckoutSummary: FC<CheckoutSummaryProps> = ({ ingredients, cancelled, continued }) => {

    return (
        <div className={styles.CheckoutSummary}>
            <h1>Enjoy!</h1>
            <div className={styles.Container}>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Danger" clicked={cancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={continued}>
                CONTINUE
            </Button>
        </div>
    );
};

export default CheckoutSummary;
