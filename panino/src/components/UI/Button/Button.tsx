import React, { FC } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
    clicked: () => void;
    btnType: "Danger" | "Success";
}

const Button: FC<ButtonProps> = ({ children, clicked, btnType }) => (
    <button
        className={[styles.Button, styles[btnType]].join(" ")}
        onClick={clicked}
    >
        {children}
    </button>
);

export default Button;
