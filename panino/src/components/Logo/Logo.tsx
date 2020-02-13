import React, { FC } from "react";

import burgerLogo from "../../assets/images/burger-logo.png";

import styles from "./Logo.module.css"

const Logo: FC = () => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="Burger Logo" />
    </div>
);

export default Logo;
