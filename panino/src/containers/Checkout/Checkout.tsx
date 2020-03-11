import React, { FC, useState } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Ingredients } from "../BurgerBuilder/BurgerBuilder";

interface CheckoutProps {
    ingredients: Ingredients;
}

const Checkout: FC = () => {
    const [ingredients, setIngredients] = useState<Ingredients>({
        salad: 1,
        bacon: 1,
        cheese: 1,
        meat: 1
    });

    return <CheckoutSummary ingredients={ingredients} />;
};

export default Checkout;
