import React, { useState, FC, FormEvent, ChangeEvent } from "react";
import axios from "../../../axios-orders";
import { RouteComponentProps } from "react-router-dom";
import produce from "immer";
import { useForm } from 'react-hook-form'

import {
    IIngredients,
    ICustomer,
    INewOrder,
    IOrderFormConfig
} from "../../../interfaces";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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
                required: true
            },
            valid: false
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Your Email"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false
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
                    required: true
                },
                valid: false
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Zip Code"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false
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
                required: true
            },
            valid: false
        }
    });
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const checkValidity = (
        value: IOrderFormConfig["value"],
        rules: IOrderFormConfig["validation"]
    ) => {
        if (rules.required && value.trim() !== "") {
            return true;
        }

        if (rules.minLength && value.length > rules.minLength) {
            return true;
        }

        return false;
    };

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
                draft.address[inputIdentifier].valid = checkValidity(
                    e.target.value,
                    draft.address[inputIdentifier].validation
                );
                draft.address[inputIdentifier].value = e.target.value;
            } else if (
                inputIdentifier === "name" ||
                inputIdentifier === "email" ||
                inputIdentifier === "deliveryMethod"
            ) {
                draft[inputIdentifier].valid = checkValidity(
                    e.target.value,
                    draft[inputIdentifier].validation
                );
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

    const _submitOrder = () => {
        // e.preventDefault();
        console.log("ingredients", ingredients);

        setLoading(true);

        const newOrder: INewOrder = {
            createdAt: new Date(),
            ingredients: ingredients,
            price: totalPrice,
            name: orderForm.name.value,
            street: orderForm.address.street.value,
            zipCode: orderForm.address.zipCode.value,
            country: orderForm.address.country.value,
            email: orderForm.email.value,
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

        return orderFormArray.map(item => (
            <Input
                key={item.id}
                elementType={item.config.elementType}
                elementConfig={item.config.elementConfig}
                value={item.config.value}
                changed={e => _inputChanged(e, item.id)}
                ref={register}
            />
        ));
    };

    const renderSpinnerOrForm = () => {
        if (loading) return <Spinner />;

        return (
            <form onSubmit={handleSubmit(_submitOrder)}>
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
            <input type="text" />
        </div>
    );
};

export default ContactData;
