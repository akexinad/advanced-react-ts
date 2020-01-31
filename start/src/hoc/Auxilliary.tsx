import { ReactElement } from "react";

interface AuxilliaryProps {
    children: ReactElement[];
}

const Auxilliary= (props: AuxilliaryProps) => {
    console.log(props);
    return props.children;
};

export default Auxilliary;
