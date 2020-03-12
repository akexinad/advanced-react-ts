import React, { FC } from 'react'

import Order from '../../components/Order/Order';

const ingredients = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
}

const Orders: FC = () => {
    return (
        <div>
            <Order ingredients={ingredients} price={1234} />
            <Order ingredients={ingredients} price={1234} />
        </div>
    )
}

export default Orders;