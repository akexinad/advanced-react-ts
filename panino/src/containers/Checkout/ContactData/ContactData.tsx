import React, { useState, FC, ChangeEvent, Fragment } from "react";
import axios from "../../../axios-orders";
import { RouteComponentProps } from "react-router-dom";
import produce from "immer";
import { useForm } from "react-hook-form";

import {
    IIngredients,
    ICustomer,
    INewOrder,
    IOrderFormConfig,
    IReactHookFormOrderData
} from "../../../interfaces";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import styles from "./ContactData.module.css";

interface ContactDataProps {
    ingredients: IIngredients;
    totalPrice: number;
    routeProps: RouteComponentProps;
}

type InputIdentifier =
    | "name"
    | "email"
    | "street"
    | "zipCode"
    | "country"
    | "deliveryMethod";

const ContactData: FC<ContactDataProps> = ({
    ingredients,
    totalPrice,
    routeProps
}) => {
    const [orderForm, setOrderForm] = useState<ICustomer>({
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Your Name"
            },
            value: "",
            validation: {
                name: "userName",
                required: true
            }
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Your Email"
            },
            value: "",
            validation: {
                name: "email",
                required: true
            }
        },
        address: {
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street"
                },
                value: "",
                validation: {
                    name: "street",
                    required: true
                }
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Zip Code"
                },
                value: "",
                validation: {
                    name: "zipCode",
                    required: true,
                    minLength: 5,
                    maxLength: 5
                }
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: "",
                validation: {
                    name: "country",
                    required: false
                }
            }
        },
        deliveryMethod: {
            elementType: "select",
            elementConfig: {
                options: [
                    {
                        value: "fastest",
                        displayValue: "Fastest"
                    },
                    {
                        value: "cheapest",
                        displayValue: "Cheapest"
                    }
                ]
            },
            value: "",
            validation: {
                name: "deliveryMethod",
                required: true
            }
        }
    });
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm<
        IReactHookFormOrderData
    >();

    const _inputChanged = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
        inputIdentifier: string
    ) => {
        const updatedOrderForm = produce(orderForm, draft => {
            if (
                inputIdentifier === "street" ||
                inputIdentifier === "zipCode" ||
                inputIdentifier === "country"
            ) {
                draft.address[inputIdentifier].value = e.target.value;
            } else if (
                inputIdentifier === "name" ||
                inputIdentifier === "email" ||
                inputIdentifier === "deliveryMethod"
            ) {
                draft[inputIdentifier].value = e.target.value;
            } else {
                console.warn(
                    `inputIdentifier ${inputIdentifier} does not exist on the orderForm object.`
                );
                return;
            }
        });

        console.log("updatedOrderForm", updatedOrderForm);

        setOrderForm(updatedOrderForm);
    };

    const _handleSubmit = (data: IReactHookFormOrderData) => {
        // e.preventDefault();
        console.log("ingredients", ingredients);

        console.log("data", data);

        setLoading(true);

        const newOrder: INewOrder = {
            createdAt: new Date(),
            ingredients: ingredients,
            price: totalPrice,
            name: data.userName,
            street: data.street,
            zipCode: data.zipCode,
            country: data.country,
            email: data.email,
            deliveryMethod: orderForm.deliveryMethod.value
        };

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
        const orderFormArray: {
            id: string;
            config: IOrderFormConfig;
        }[] = [];

        Object.entries(orderForm).map(([id, config]) => {
            if (id === "address") {
                const addressEntries: [
                    string,
                    IOrderFormConfig
                ][] = Object.entries(config);

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
                        value={item.config.value}
                        onChange={e => _inputChanged(e, item.id)}
                    />
                    {errors[item.config.validation.name] && errors.required && (
                        <p>There was error</p>
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
                            value={item.config.value}
                            onChange={e => _inputChanged(e, item.id)}
                        />
                    );
                    break;
                case "select":
                    console.log("SELECT ME");

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
                            value={item.config.value}
                            onChange={e => _inputChanged(e, item.id)}
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
        </div>
    );
};

export default ContactData;
