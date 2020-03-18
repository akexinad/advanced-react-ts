import React, { FC } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
    label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
    return <div data-testid="button" className={styles.Button}>{label}</div>;
};

export default Button;
