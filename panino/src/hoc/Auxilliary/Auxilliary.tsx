import { FC, Props, ReactElement, ReactNode } from "react";

const Aux: FC<Props<ReactElement["props"]>> = (props) => {
    return props.children;
};

export default Aux;
