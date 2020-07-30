export interface IIngredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

type HTMLElementTypes = "input" | "label" | "select" | "textarea";
type HTMLConfigTypes = "text" | "number" | "email";
type FormNames =
    | "name"
    | "email"
    | "street"
    | "zipCode"
    | "country"
    | "deliveryMethod";

type DeliveryMethod = "deliveroo" | "uber eats" | "fedex" | "auspost";

export interface ICSSStyles {
    readonly [key: string]: string;
}

export interface IOrderFormConfigItem {
    id: string;
    config: IOrderFormConfig;
}

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
    validation: {
        name: FormNames;
        required: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
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

export type ActionType = "ADD_INGREDIENT" | "REMOVE_INGREDIENT";

export interface IState {
    ingredients: IIngredients;
    totalPrice: number;
}

export interface IInjectedProps {
    ings: IState["ingredients"];
}

export interface IAction {
    type: ActionType;
    payload: keyof IIngredients;
}

export type ActionDispatch = (action: IAction) => void;

export interface IDispatch {
    onIngredientAdded: (payload: IAction["payload"]) => void
    onIngredientRemoved: (payload: IAction["payload"]) => void;
}

export type DispatchMap = (dispatch: ActionDispatch) => IDispatch;  

