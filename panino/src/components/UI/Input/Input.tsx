import React, { FC } from "react";

import { IOrderForm } from "../../../interfaces";

import styles from "./Input.module.css";

interface InputProps {
    elementType: IOrderForm["elementType"];
    elementConfig: IOrderForm["elementConfig"];
    value: IOrderForm["value"];
    // type: "text" | "number",
    // name: string;
    // placeholder: string;
    // label?: string;
    // inputtype: "input" | "textarea";
}

const Input: FC<InputProps> = ({ elementType, elementConfig, value }) => {
    let inputElement: JSX.Element = (
        <input
            className={styles.InputElement}
            {...elementConfig}
            value={value}
        />
    );

    switch (elementType) {
        case "input":
            return inputElement;
        case "textarea":
            inputElement = (
                <textarea
                    className={styles.InputElement}
                    {...elementConfig}
                    value={value}
                />
            );
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
