import React, { useState, FC, FormEvent } from "react";
import axios from "../../../axios-orders";

import { Ingredients } from "../../BurgerBuilder/BurgerBuilder";

import Button from "../../../components/UI/Button/Button";

import styles from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { RouteComponentProps } from "react-router-dom";

interface ContactDataProps {
    ingredients: Ingredients;
    totalPrice: number;
    routeProps: RouteComponentProps;
}

const ContactData: FC<ContactDataProps> = ({
    ingredients,
    totalPrice,
    routeProps
}) => {
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        address: {
            street: "",
            postCode: ""
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
            .then(res => {
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
                <input
                    className={styles.Input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <input
                    className={styles.Input}
                    type="text"
                    name="email"
                    placeholder="Your Email"
                />
                <input
                    className={styles.Input}
                    type="text"
                    name="street"
                    placeholder="Your Street"
                />
                <input
                    className={styles.Input}
                    type="text"
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