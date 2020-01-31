import { ReactElement, FC } from "react";

interface AuxProps {
    children: ReactElement[];
}

const Aux: FC<AuxProps> = (props: ReactElement["props"]) => props.children;

export default Aux;
