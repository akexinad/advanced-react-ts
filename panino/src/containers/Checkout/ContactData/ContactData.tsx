import React, { useState, FC, FormEvent, ChangeEvent } from "react";
import axios from "../../../axios-orders";
import { RouteComponentProps } from "react-router-dom";

import { IIngredients, ICustomer, IOrderForm } from "../../../interfaces";

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
            value: ""
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Your Email"
            },
            value: ""
        },
        address: {
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street"
                },
                value: ""
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Zip Code"
                },
                value: ""
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: ""
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
            value: ""
        }
    });
    const [loading, setLoading] = useState(false);

    const _submitOrder = (e: FormEvent) => {
        e.preventDefault();
        console.log("ingredients", ingredients);

        setLoading(true);

        const order = {
            createdAt: new Date(),
            ingredients: ingredients,
            price: totalPrice,
            customer: {
                name: "Fellini",
                address: {
                    street: "123 fake st",
                    zipCode: "12345",
                    country: "italy"
                },
                email: "fellini@ex.it"
            },
            deliveryMethod: "fedex"
        };

        axios
            .post("/orders.json", order)
            .then(() => {
                setLoading(false);
                routeProps.history.push("/");
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    const _inputChanged = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
        inputIdentifier: string
    ) => {
        console.log(e.target.value);

        const updatedOrderForm = { ...orderForm };

        if (
            inputIdentifier === "street" ||
            inputIdentifier === "zipCode" ||
            inputIdentifier === "country"
        ) {
            updatedOrderForm.address[inputIdentifier].value = e.target.value;
            setOrderForm(updatedOrderForm);
        }

        if (
            inputIdentifier === "name" ||
            inputIdentifier === "email" ||
            inputIdentifier === "deliveryMethod"
        ) {
            updatedOrderForm[inputIdentifier].value = e.target.value;
            setOrderForm(updatedOrderForm);
        }
    };

    const renderOrderForm = () => {
        const orderFormArray: {
            id: string;
            config: IOrderForm;
        }[] = [];

        Object.entries(orderForm).map(([id, config]) => {
            if (id === "address") {
                const addressEntries: [string, IOrderForm][] = Object.entries(
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

        return orderFormArray.map(item => (
            <Input
                key={item.id}
                elementType={item.config.elementType}
                elementConfig={item.config.elementConfig}
                value={item.config.value}
                changed={e => _inputChanged(e, item.id)}
            />
        ));
    };

    const renderSpinnerOrForm = () => {
        if (loading) return <Spinner />;

        return (
            <form>
                {renderOrderForm()}
                <Button btnType="Success" clicked={e => _submitOrder(e)}>
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
