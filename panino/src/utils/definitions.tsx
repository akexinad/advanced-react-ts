import { IOrderForm, IOrder } from "../interfaces";

export const orderDefinition: IOrder = {
    id: "",
    createdAt: new Date(),
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    price: 0,
    customer: {
        name: "",
        address: {
            street: "",
            zipCode: "",
            country: ""
        },
        email: ""
    },
    deliveryMethod: "deliveroo"
};

export const orderFormDefinition: IOrderForm = {
    name: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Your Name"
        },
        validation: {
            name: "name",
            required: true
        }
    },
    email: {
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Your Email"
        },
        validation: {
            name: "email",
            required: true
        }
    },
    address: {
        street: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Street"
            },
            validation: {
                name: "street",
                required: true
            }
        },
        zipCode: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Zip Code"
            },
            validation: {
                name: "zipCode",
                required: true,
                minLength: 5,
                maxLength: 5
            }
        },
        country: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Country"
            },
            validation: {
                name: "country",
                required: true
            }
        }
    },
    deliveryMethod: {
        elementType: "select",
        elementConfig: {
            options: [
                {
                    value: "fastest",
                    displayValue: "Fastest"
                },
                {
                    value: "cheapest",
                    displayValue: "Cheapest"
                }
            ]
        },
        validation: {
            name: "deliveryMethod",
            required: true
        }
    }
};
