import { IOrderForm } from "../interfaces";

export const orderFormDefinition: IOrderForm= {
    name: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Your Name"
        },
        // value: "",
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
        // value: "",
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
            // value: "",
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
            // value: "",
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
            // value: "",
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
        // value: "",
        validation: {
            name: "deliveryMethod",
            required: true
        }
    }
}