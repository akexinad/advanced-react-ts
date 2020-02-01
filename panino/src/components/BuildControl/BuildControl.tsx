import React, { FC } from 'react'

import styles from "./BuildControl.module.css";
import { IngredientTypes, IngredientLabels } from '../../containers/BurgerBuilder/BurgerBuilder';

interface BuildControlProps {
    label: IngredientLabels;
    added: () => void;
}

const BuildControl: FC<BuildControlProps> = ({label, added}) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{label}</div>
        <button className={styles.Less}>Less</button>
        <button className={styles.More} onClick={added}>More</button>
    </div>
)

export default BuildControl;