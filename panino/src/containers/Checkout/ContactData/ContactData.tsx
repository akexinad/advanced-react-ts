import React, { useState, FC, FormEvent } from "react";
import axios from "../../../axios-orders";
import { RouteComponentProps } from "react-router-dom";

import { IIngredients, ICustomer } from "../../../interfaces";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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
    const [orderFom, setOrderForm] = useState<ICustomer>({
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

    const renderSpinnerOrForm = () => {
        if (loading) return <Spinner />;

        return (
            <form>
                <Input
                    type="text"
                    inputtype="input"
                    name="name"
                    placeholder="Your Name"
                />
                <Input
                    type="text"
                    inputtype="input"
                    name="email"
                    placeholder="Your Email"
                />
                <Input
                    type="text"
                    inputtype="input"
                    name="street"
                    placeholder="Your Street"
                />
                <Input
                    type="text"
                    inputtype="input"
                    name="postCode"
                    placeholder="Your Post Code"
                />
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
