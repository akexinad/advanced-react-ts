export interface IIngredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

type HTMLElementTypes = "input" | "label" | "select" | "textarea";
type HTMLConfigTypes = "text" | "number" | "email";

type DeliveryMethod = "deliveroo" | "uber eats" | "fedex" | "auspost";

export interface IOrderForm {
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
}

export interface ICustomer {
    name: IOrderForm;
    email: IOrderForm;
    address: {
        street: IOrderForm;
        zipCode: IOrderForm;
        country: IOrderForm;
    };
    deliveryMethod: IOrderForm;
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
            zipCode: ICustomer["address"]["zipCode"]["value"]
            country: ICustomer["address"]["country"]["value"]
        }
        email: ICustomer["email"]["value"];
    };
    deliveryMethod: DeliveryMethod;
}