import React, { FC } from "react";

import styles from "./DrawerToggle.module.css";

interface DrawerToggleProps {
    clicked: () => void;
}

const DrawerToggle: FC<DrawerToggleProps> = ({ clicked }) => {
    return <div className={styles.DrawerToggle} onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>;
};

export default DrawerToggle;
