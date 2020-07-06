import React, { FC, useEffect, useState } from "react";

import axios from "../../axios-orders";

import { IOrder } from "../../interfaces";

import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import { orderDefinition } from "../../utils/definitions";

const Orders: FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([orderDefinition]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("orders.json")
            .then(res => {
                setLoading(false);

                const response: { order: IOrder } = res.data;

                const orders: IOrder[] = Object.entries(response).map(entry => {
                    return {
                        ...entry[1]
                    };
                });

                setOrders(orders);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const renderSpinnerOrOrders = () => {
        if (loading) return <Spinner />;

        return orders.map(order => (
            <Order
                key={order.id}
                orderId={order.id}
                ingredients={order.ingredients}
                price={+order.price.toFixed(2)}
            />
        ));
    };

    return <div>{renderSpinnerOrOrders()}</div>;
};

export default WithErrorHandler(Orders, axios);
