import React, { useState, FC, Fragment } from "react";
import axios from "../../../axios-orders";
import { RouteComponentProps } from "react-router-dom";
import produce from "immer";
import { useForm } from "react-hook-form";

import {
    IIngredients,
    INewOrder,
    IOrderFormConfig,
    IReactHookFormOrderData,
    IOrderForm
} from "../../../interfaces";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import { orderFormDefinition } from "../../../utils/definitions";

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
    const [orderForm] = useState<IOrderForm>(orderFormDefinition);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm<
        IReactHookFormOrderData
    >();

    const orderFormArray: {
        id: string;
        config: IOrderFormConfig;
    }[] = [];

    Object.entries(orderForm).map(([id, config]) => {
        if (id === "address") {
            const addressEntries: [string, IOrderFormConfig][] = Object.entries(
                config
            );

            return addressEntries.map(([id, config]) => {
                orderFormArray.push({
                    id,
                    config
                });

                return orderFormArray;
            });
        }

        orderFormArray.push({
            id,
            config
        });

        return orderFormArray;
    });

    const _handleSubmit = (data: IReactHookFormOrderData) => {
        console.log("ingredients", ingredients);

        console.log("data", data);

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

        // axios
        //     .post("/orders.json", newOrder)
        //     .then(() => {
        //         setLoading(false);
        //         routeProps.history.push("/");
        //     })
        //     .catch(err => {
        //         console.error(err);
        //         setLoading(false);
        //     });
    };

    const renderOrderForm = () => {
        if (!orderFormArray) return;

        return orderFormArray.map((item, index) => {
            let inputElement: JSX.Element = (
                <Fragment key={index}>
                    <input
                        name={item.config.validation.name}
                        ref={register({
                            required: item.config.validation.required,
                            minLength: item.config.validation.minLength,
                            maxLength: item.config.validation.maxLength
                        })}
                        className={styles.InputElement}
                        {...item.config.elementConfig}
                    />
                    {errors[item.config.validation.name] && (
                        <p className={styles.Error}>
                            <strong>
                                Your {item.config.validation.name} is required!
                            </strong>
                        </p>
                    )}
                    {errors[item.config.validation.name]?.type ===
                        "minLength" && (
                        <p className={styles.Error}>
                            <strong>
                                {item.config.validation.name} must be{" "}
                                {item.config.validation.minLength} characters
                            </strong>
                        </p>
                    )}
                </Fragment>
            );

            switch (item.config.elementType) {
                case "input":
                    return inputElement;
                case "textarea":
                    inputElement = (
                        <textarea
                            key={index}
                            name={item.config.validation.name}
                            ref={register({
                                required: item.config.validation.required,
                                minLength: item.config.validation.minLength,
                                maxLength: item.config.validation.maxLength
                            })}
                            className={styles.InputElement}
                            {...item.config.elementConfig}
                        />
                    );
                    break;
                case "select":
                    inputElement = (
                        <select
                            key={index}
                            name={item.config.validation.name}
                            ref={register({
                                required: item.config.validation.required,
                                minLength: item.config.validation.minLength,
                                maxLength: item.config.validation.maxLength
                            })}
                            className={styles.InputElement}
                            {...item.config.elementConfig}
                        >
                            {item.config.elementConfig.options?.map(
                                (option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.displayValue}
                                    </option>
                                )
                            )}
                        </select>
                    );
                    break;
                default:
                    return inputElement;
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
            {/* {loading ? (
                <Spinner />
            ) : (
                <form onSubmit={handleSubmit(_handleSubmit)}>
                    {orderFormArray.map((item, index) => {
                        let inputElement: JSX.Element = (
                            <Fragment key={index}>
                                <input
                                    name={item.config.validation.name}
                                    ref={register({
                                        required:
                                            item.config.validation.required,
                                        minLength:
                                            item.config.validation.minLength,
                                        maxLength:
                                            item.config.validation.maxLength
                                    })}
                                    className={styles.InputElement}
                                    {...item.config.elementConfig}
                                />
                                {errors[item.config.validation.name] && (
                                    <p className={styles.Error}>
                                        <strong>
                                            Your {item.config.validation.name}{" "}
                                            is required!
                                        </strong>
                                    </p>
                                )}
                            </Fragment>
                        );

                        switch (item.config.elementType) {
                            case "input":
                                return inputElement;
                            case "textarea":
                                inputElement = (
                                    <textarea
                                        key={index}
                                        name={item.config.validation.name}
                                        ref={register({
                                            required:
                                                item.config.validation.required,
                                            minLength:
                                                item.config.validation
                                                    .minLength,
                                            maxLength:
                                                item.config.validation.maxLength
                                        })}
                                        className={styles.InputElement}
                                        {...item.config.elementConfig}
                                    />
                                );
                                break;
                            case "select":
                                inputElement = (
                                    <select
                                        key={index}
                                        name={item.config.validation.name}
                                        ref={register({
                                            required:
                                                item.config.validation.required,
                                            minLength:
                                                item.config.validation
                                                    .minLength,
                                            maxLength:
                                                item.config.validation.maxLength
                                        })}
                                        className={styles.InputElement}
                                        {...item.config.elementConfig}
                                    >
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
                                );
                                break;
                            default:
                                return inputElement;
                        }

                        return inputElement;
                    })}

                    <Button btnType="Success" clicked={e => e}>
                        ORDER
                    </Button>
                </form>
            )} */}
        </div>
    );
};

export default ContactData;
