import React, { FC } from "react";

import styles from "./BuildControls.module.css";
import BuildControl from "../BuildControl/BuildControl";
import {
    IngredientLabels,
    IngredientTypes
} from "../../containers/BurgerBuilder/BurgerBuilder";

interface BuildControlsProps {
    ingredientAdded: (type: Control["type"]) => void;
}

type Control = {
    label: IngredientLabels;
    type: IngredientTypes;
}

type Controls = Array<Control>;

const controls: Controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const BuildControls: FC<BuildControlsProps> = ({ ingredientAdded }) => (
    <div className={styles.BuildControls}>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => ingredientAdded(control.type)}
            />
        ))}
    </div>
);

export default BuildControls;
