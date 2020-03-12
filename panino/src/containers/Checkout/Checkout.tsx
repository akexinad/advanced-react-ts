import React, { FC, useState } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Ingredients } from "../BurgerBuilder/BurgerBuilder";
import { RouteComponentProps } from "react-router-dom";

interface CheckoutProps extends RouteComponentProps {
    ingredients: Ingredients;
}

const Checkout: FC<CheckoutProps> = ({ history }) => {
    const [ingredients, setIngredients] = useState<Ingredients>({
        salad: 1,
        bacon: 1,
        cheese: 1,
        meat: 1
    });

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
