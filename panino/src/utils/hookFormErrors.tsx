import React from "react";
import { NestDataObject, FieldError } from "react-hook-form";

import {
    IReactHookFormOrderData,
    IOrderFormConfigItem,
    ICSSStyles
} from "../interfaces";

export const reactHookFormErrorMsg = (
    errors: NestDataObject<IReactHookFormOrderData, FieldError>,
    item: IOrderFormConfigItem,
    styles: ICSSStyles
): false | JSX.Element => {
    let errorType = errors[item.config.validation.name]?.type;

    if (errorType === "pattern") {
        return (
            <p className={styles.Error}>
                <strong>
                    {item.config.elementConfig.placeholder} must only contain numbers.
                </strong>
            </p>
        );
    }

    if (errorType === "minLength" || errorType === "maxLength") {
        return (
            <p className={styles.Error}>
                <strong>
                    {item.config.elementConfig.placeholder} must be{" "}
                    {item.config.validation.minLength} characters
                </strong>
            </p>
        );
    }

    if (errorType === "required") {
        return (
            <p className={styles.Error}>
                <strong>
                    {item.config.elementConfig.placeholder} is required!
                </strong>
            </p>
        );
    }
    
    return false;
};
