import React, { FC } from "react";

import BuildControl from "../BuildControl/BuildControl";
import {
    IngredientLabels,
    IngredientTypes,
    DisabledOptions
} from "../../containers/BurgerBuilder/BurgerBuilder";

import styles from "./BuildControls.module.css";

interface BuildControlsProps {
    ingredientAdded: (type: Control["type"]) => void;
    ingredientRemoved: (type: Control["type"]) => void;
    disabledInfo: DisabledOptions;
    price: number;
    purchasable: boolean;
}

type Control = {
    label: IngredientLabels;
    type: IngredientTypes;
};

type Controls = Array<Control>;

const controls: Controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const BuildControls: FC<BuildControlsProps> = ({
    ingredientAdded,
    ingredientRemoved,
    disabledInfo,
    price,
    purchasable
}) => (
    <div className={styles.BuildControls}>
        <p>
            Current Price: <strong>${price.toFixed(2)}</strong>
        </p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => ingredientAdded(control.type)}
                removed={() => ingredientRemoved(control.type)}
                disabled={disabledInfo[control.type]}
            />
        ))}
        <button disabled={!purchasable} className={styles.OrderButton}>
            ORDER NOW
        </button>
    </div>
);

export default BuildControls;
