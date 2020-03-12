import React, { FC, useState, useEffect } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Ingredients, IngredientTypes } from "../BurgerBuilder/BurgerBuilder";
import { RouteComponentProps } from "react-router-dom";

interface CheckoutProps extends RouteComponentProps {
    ingredients: Ingredients;
}

const Checkout: FC<CheckoutProps> = ({ history, location }) => {
    const [ingredients, setIngredients] = useState<Ingredients>({
        salad: 1,
        bacon: 1,
        cheese: 1,
        meat: 1
    });

    useEffect(() => {
        const query = new URLSearchParams(location.search);

        const ingredientsFromParams: any = {};

        for (let param of query.entries()) {
            ingredientsFromParams[param[0]] = param[1];
        }

        setIngredients(ingredientsFromParams);
    }, [location]);

    const _checkoutCancelled = () => {
        history.goBack();
    };

    const _checkoutContinued = () => {
        history.replace("/checkout/contact-data");
    };

    return (
        <CheckoutSummary
            ingredients={ingredients}
            cancelled={_checkoutCancelled}
            continued={_checkoutContinued}
        />
    );
};

export default Checkout;
