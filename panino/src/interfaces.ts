export interface IIngredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

type HTMLElementTypes = "input" | "label" | "select" | "textarea";
type HTMLConfigTypes = "text" | "number" | "email";

type DeliveryMethod = "deliveroo" | "uber eats" | "fedex" | "auspost";

export interface IOrderFormConfig {
    elementType: HTMLElementTypes;
    elementConfig: {
        options?: [
            {
                value: "fastest";
                displayValue: "Fastest";
            },
            {
                value: "cheapest";
                displayValue: "Cheapest";
            }
        ];
        type?: HTMLConfigTypes;
        placeholder?: string;
    };
    value: string;
    validation: {
        required: true;
        minLength?: number;
        maxLength?: number;
    };
    valid: boolean;
}

export interface ICustomer {
    name: IOrderFormConfig;
    email: IOrderFormConfig;
    address: {
        street: IOrderFormConfig;
        zipCode: IOrderFormConfig;
        country: IOrderFormConfig;
    };
    deliveryMethod: IOrderFormConfig;
}

export interface IOrder {
    id: string;
    createdAt: Date;
    ingredients: IIngredients;
    price: number;
    customer: {
        name: ICustomer["name"]["value"];
        address: {
            street: ICustomer["address"]["street"]["value"];
            zipCode: ICustomer["address"]["zipCode"]["value"];
            country: ICustomer["address"]["country"]["value"];
        };
        email: ICustomer["email"]["value"];
    };
    deliveryMethod: DeliveryMethod;
}

export interface INewOrder {
    createdAt: Date;
    ingredients: IIngredients;
    name: ICustomer["name"]["value"];
    email: ICustomer["email"]["value"];
    street: ICustomer["address"]["street"]["value"];
    zipCode: ICustomer["address"]["zipCode"]["value"];
    country: ICustomer["address"]["country"]["value"];
    deliveryMethod: ICustomer["deliveryMethod"]["value"];
    price: number;
}