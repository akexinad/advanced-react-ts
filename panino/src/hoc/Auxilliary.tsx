import { PropsWithChildren, ExoticComponent } from "react";

const Aux = (props: PropsWithChildren<ExoticComponent | any>) => props.children;

export default Aux;