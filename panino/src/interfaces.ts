export interface IIngredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

type IDeliveryMethod = "fedex" | "deliveroo" | "auspost" | "amazon" | "uber eats";

export interface ICustomer {
    name: string;
    address: {
        street: string;
        zipCode: string;
        country: string;
    },
    email: string;
}

export interface IOrder {
    id: string;
    createdAt: Date;
    ingredients: IIngredients;
    price: number;
    customer: ICustomer
    deliveryMethod: IDeliveryMethod;
}
