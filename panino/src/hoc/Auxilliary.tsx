import { ReactElement, FC } from "react";

interface AuxProps {
    children: ReactElement | ReactElement[];
}

const Aux: FC<AuxProps> = (props: ReactElement["props"]) => {
    return props.children;
};

export default Aux;
