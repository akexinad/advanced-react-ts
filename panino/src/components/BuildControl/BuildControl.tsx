import React, { FC } from 'react'

import styles from "./BuildControl.module.css";

interface BuildControlProps {
    label: string;
}

const BuildControl: FC<BuildControlProps> = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.label}>{props.label}</div>
        <button className={styles.less}>Less</button>
        <button className={styles.more}>More</button>
    </div>
)

export default BuildControl;