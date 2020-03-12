import React, { FC, InputHTMLAttributes, DetailedHTMLProps } from "react";

import styles from "./Input.module.css"

interface InputProps {
    type: "text" | "number",
    name: string;
    placeholder: string;
    label?: string;
    inputtype: "input" | "textarea";
}

const Input: FC<InputProps> = (props) => {
    let inputElement: JSX.Element = <input className={styles.InputElement} { ...props } />;

    switch (props.inputtype) {
        case "input":
            return inputElement;
        case "textarea":
            inputElement = <textarea className={styles.InputElement} { ...props } />;
            break;
        default:
            return inputElement;
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
