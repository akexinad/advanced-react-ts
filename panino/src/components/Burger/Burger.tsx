import React, { FC } from "react";

import styles from "./Burger.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

interface BurgerIngredientProps {
    ingredients: {
        salad: number;
        bacon: number;
        cheese: number;
        meat: number;
    };
}

const burgerIngredients = {
    breadTop: "bread-top",
    breadBottom: "bread-bottom",
    meat: "meat",
    cheese: "cheese",
    salad: "bacon",
    bacon: "bacon"
};

const Burger: FC<BurgerIngredientProps> = ({ ingredients }) => {
    const totalIngredients: string[] = [];

    for (const [ingredient, igQty] of Object.entries(ingredients)) {
        let initalQty = 0;
        while (initalQty < igQty) {
            totalIngredients.push(ingredient);
            initalQty++;
        }
    }

    const renderBurgerIngredient = () => {
        if (totalIngredients.length === 0) {
            return <p>Please start adding ingredients</p>;
        }

        return totalIngredients.map((ingredient, index) => (
            <BurgerIngredient key={index} type={ingredient} />
        ));
    };

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={burgerIngredients.breadTop} />
            {renderBurgerIngredient()}
            <BurgerIngredient type={burgerIngredients.breadBottom} />
        </div>
    );
};

export default Burger;
