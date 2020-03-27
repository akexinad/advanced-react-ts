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
    // value: string;
    validation: {
        name:
            | "name"
            | "email"
            | "street"
            | "zipCode"
            | "country"
            | "deliveryMethod";
        required: boolean;
        minLength?: number;
        maxLength?: number;
    };
}

export interface IOrderForm {
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
        name: string;
        address: {
            street: string;
            zipCode: string;
            country: string;
        };
        email: string;
    };
    deliveryMethod: DeliveryMethod;
}

export interface INewOrder {
    createdAt: Date;
    ingredients: IIngredients;
    name: string;
    email: string;
    street: string;
    zipCode: string;
    country: string;
    deliveryMethod: string;
    price: number;
}

export interface IReactHookFormOrderData {
    name: string;
    email: string;
    street: string;
    zipCode: string;
    country: string;
    deliveryMethod: string;
}
