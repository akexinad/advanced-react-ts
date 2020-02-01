import React, { FC } from "react";

import styles from "./BuildControl.module.css";
import { IngredientLabels } from "../../containers/BurgerBuilder/BurgerBuilder";

interface BuildControlProps {
    label: IngredientLabels;
    added: () => void;
    removed: () => void;
    disabled: boolean;
}

const BuildControl: FC<BuildControlProps> = ({
    label,
    added,
    removed,
    disabled
}) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{label}</div>
        <button className={styles.More} onClick={removed} disabled={!disabled}>
            Less
        </button>
        <button className={styles.More} onClick={added}>
            More
        </button>
    </div>
);

export default BuildControl;
