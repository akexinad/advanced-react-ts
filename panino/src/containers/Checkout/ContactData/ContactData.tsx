import React, {
    useState,
    FC,
    Fragment,
    useEffect,
    HTMLAttributes
} from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm, ValidationOptions } from "react-hook-form";
import axios from "../../../axios-orders";

import {
    IIngredients,
    INewOrder,
    IOrderFormConfig,
    IReactHookFormOrderData,
    IOrderForm,
    IOrderFormConfigItem
} from "../../../interfaces";

import { orderFormDefinition } from "../../../utils/definitions";
import reactHookFormErrors from "../../../utils/reactHookFormErrors";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import styles from "./ContactData.module.css";

interface ContactDataProps {
    ingredients: IIngredients;
    totalPrice: number;
    routeProps: RouteComponentProps;
}

const ContactData: FC<ContactDataProps> = ({
    ingredients,
    totalPrice,
    routeProps
}) => {
    const [orderFormArray, setOrderFormArray] = useState<
        Array<IOrderFormConfigItem>
    >([]);
    const [orderForm] = useState<IOrderForm>(orderFormDefinition);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, errors } = useForm<
        IReactHookFormOrderData
    >();
    const [validData, setValidData] = useState(false);

    useEffect(() => {
        const ingredientQty = Object.values(ingredients).reduce(
            (sum, value) => sum + value,
            0
        );

        if (ingredientQty === 0) {
            console.error("No ingredients selected");
            routeProps.history.push("/");
        }

        const orderFormArrayCOPY: Array<IOrderFormConfigItem> = [];

        Object.entries(orderForm).map(([id, config]) => {
            if (id === "address") {
                const addressEntries: [
                    string,
                    IOrderFormConfig
                ][] = Object.entries(config);

                return addressEntries.map(([id, config]) => {
                    orderFormArrayCOPY.push({
                        id,
                        config
                    });

                    return orderFormArrayCOPY;
                });
            }

            orderFormArrayCOPY.push({
                id,
                config
            });

            setOrderFormArray(orderFormArrayCOPY);

            return orderFormArrayCOPY;
        });
    }, [ingredients, routeProps, orderForm]);

    const _handleSubmit = (data: IReactHookFormOrderData) => {
        setLoading(true);

        const newOrder: INewOrder = {
            createdAt: new Date(),
            ingredients: ingredients,
            price: totalPrice,
            name: data.name,
            street: data.street,
            zipCode: data.zipCode,
            country: data.country,
            email: data.email,
            deliveryMethod: data.deliveryMethod
        };

        const dataValues = Object.values(newOrder);

        if (dataValues.includes(undefined)) setValidData(false);

        if (!validData) {
            console.error(
                "There are data values that are undefined. See data object:",
                newOrder
            );
            setLoading(false);
            return;
        }

        axios
            .post("/orders.json", newOrder)
            .then(() => {
                setLoading(false);
                routeProps.history.push("/");
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    const renderOrderForm = () => {
        if (!orderFormArray) return;

        return orderFormArray.map((item, index) => {
            const elementType = item.config.elementType;
            
            const validationOptios: ValidationOptions = {
                pattern: item.config.validation.pattern,
                minLength: item.config.validation.minLength,
                maxLength: item.config.validation.maxLength,
                required: item.config.validation.required
            };

            let errorStyling: HTMLAttributes<HTMLInputElement>["style"] = {};

            if (errors[item.config.validation.name]) {
                errorStyling.border = "1px solid red";
                errorStyling.backgroundColor = "#fda49a";
            }

            let inputElement: JSX.Element = (
                <Fragment key={index}>
                    <input
                        name={item.config.validation.name}
                        ref={register(validationOptios)}
                        className={styles.InputElement}
                        style={errorStyling}
                        {...item.config.elementConfig}
                    />
                    {reactHookFormErrors(errors, item, styles)}
                </Fragment>
            );

            if (elementType === "textarea") {
                inputElement = (
                    <textarea
                        key={index}
                        name={item.config.validation.name}
                        ref={register(validationOptios)}
                        className={styles.InputElement}
                        style={errorStyling}
                        {...item.config.elementConfig}
                    />
                );
            }

            if (elementType === "select") {
                inputElement = (
                    <Fragment key={index}>
                        <select
                            name={item.config.validation.name}
                            ref={register(validationOptios)}
                            className={styles.InputElement}
                            {...item.config.elementConfig}
                            style={errorStyling}
                        >
                            <option value="">
                                {item.config.elementConfig.placeholder}
                            </option>
                            {item.config.elementConfig.options?.map(
                                (option, index) => (
                                    <option
                                        key={index}
                                        value={option.value}
                                    >
                                        {option.displayValue}
                                    </option>
                                )
                            )}
                        </select>
                        {reactHookFormErrors(errors, item, styles)}
                    </Fragment>
                );
            }

            return inputElement;
        });
    };

    const renderSpinnerOrForm = () => {
        if (loading) return <Spinner />;

        return (
            <form onSubmit={handleSubmit(_handleSubmit)}>
                {renderOrderForm()}
                <Button btnType="Success" clicked={e => e}>
                    ORDER
                </Button>
            </form>
        );
    };

    return (
        <div className={styles.ContactData}>
            <h4>Enter Your Contact Details</h4>
            {renderSpinnerOrForm()}
        </div>
    );
};

export default ContactData;
