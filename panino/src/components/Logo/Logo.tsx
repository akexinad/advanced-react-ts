import React, { FC } from "react";

import burgerLogo from "../../assets/images/burger-logo.png";

import styles from "./Logo.module.css"

interface LogoProps {
    height: string;
}

const Logo: FC<LogoProps> = ({height}) => (
    <div className={styles.Logo} style={{height}}>
        <img src={burgerLogo} alt="Burger Logo" />
    </div>
);

export default Logo;
