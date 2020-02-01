import React, { FC } from "react";
import Aux from "../../hoc/Auxilliary";

interface BurgerIngredientsProps {
    type: string;
}

import styles from "./BurgerIngredients.module.css";

const BurgerIngredients: FC<BurgerIngredientsProps> = props => {
    let ingredient: JSX.Element | null;

    switch (props.type) {
        case "bread-bottom":
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case "bread-top":
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case "meat":
            ingredient = <div className={styles.Meat}></div>;
            break;
        case "cheese":
            ingredient = <div className={styles.Cheese}></div>;
            break;
        case "salad":
            ingredient = <div className={styles.Salad}></div>;
            break;
        case "Bacon":
            ingredient = <div className={styles.Bacon}></div>;
            break;
        default:
            ingredient = null;        
    }

    return ingredient;
};

export default BurgerIngredients;
