import React, { FC } from "react";
import Aux from "../../hoc/Auxilliary";

import styles from "./Burger.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

const burgerIngredients = {
    breadTop: "bread-top",
    breadBottom: "bread-bottom",
    meat: "meat",
    cheese: "cheese",
    salad: "bacon",
    bacon: "bacon"
}

const Burger: FC = () => {
    return (<div className={styles.Burger}>
        <BurgerIngredient type={burgerIngredients.breadTop}/>
        <BurgerIngredient type={burgerIngredients.cheese}/>
        <BurgerIngredient type={burgerIngredients.meat}/>
        <BurgerIngredient type={burgerIngredients.breadBottom}/>
    </div>);
};

export default Burger;
