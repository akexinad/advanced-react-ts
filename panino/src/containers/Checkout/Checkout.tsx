import React, { FC, useState, useEffect, Fragment } from "react";
import { RouteComponentProps, Route } from "react-router-dom";

import { Ingredients } from "../BurgerBuilder/BurgerBuilder";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

interface CheckoutProps extends RouteComponentProps {
    ingredients: Ingredients;
}

const Checkout: FC<CheckoutProps> = ({ history, location, match }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _checkoutCancelled = () => {
        history.goBack();
    };

    const _checkoutContinued = () => {
        history.replace("/checkout/contact-data");
    };

    return (
        <Fragment>
            <CheckoutSummary
                ingredients={ingredients}
                cancelled={_checkoutCancelled}
                continued={_checkoutContinued}
            />
            <Route path={match.path + "/contact-data"} component={ContactData} />
        </Fragment>
    );
};

export default Checkout;
