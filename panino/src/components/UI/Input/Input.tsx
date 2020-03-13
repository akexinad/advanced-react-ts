import React, { FC, ChangeEvent } from "react";

import { IOrderForm } from "../../../interfaces";

import styles from "./Input.module.css";

interface InputProps {
    key: JSX.Element["key"];
    elementType: IOrderForm["elementType"];
    elementConfig: IOrderForm["elementConfig"];
    value: IOrderForm["value"];
    changed: (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void;
}

const Input: FC<InputProps> = ({
    elementType,
    elementConfig,
    value,
    changed
}) => {
    let inputElement: JSX.Element = (
        <input
            className={styles.InputElement}
            {...elementConfig}
            value={value}
            onChange={changed}
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
                    onChange={changed}
                />
            );
            break;
        case "select":
            inputElement = (
                <select
                    className={styles.InputElement}
                    {...elementConfig}
                    value={value}
                    onChange={changed}
                >
                    {elementConfig.options?.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            return inputElement;
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}></label>
            {inputElement}
        </div>
    );
};

export default Input;
