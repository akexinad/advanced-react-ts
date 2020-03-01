import React, { Component, Props } from "react";
import Aux from "../../../hoc/Auxilliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.css";

interface ModalProps extends Props<any> {
    show: boolean;
    modalClosed: () => void;
}

export default class Modal extends Component<ModalProps> {
    shouldComponentUpdate = (nextProps: any) => {
        return (
            nextProps.show !== this.props.show ||
            // @ts-ignore
            nextProps.children.type !== this.props.children.type
        );
    };

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show
                            ? "translateY(0)"
                            : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

// const Modal: FC<ModalProps> = memo(
//     props => {
//         return (
//             <Aux>
//                 <Backdrop show={props.show} clicked={props.modalClosed}>
//                     <div
//                         className={styles.Modal}
//                         style={{
//                             transform: props.show
//                                 ? "translateY(0)"
//                                 : "translateY(-100vh)",
//                             opacity: props.show ? "1" : "0"
//                         }}
//                     >
//                         {props.children}
//                     </div>
//                 </Backdrop>
//             </Aux>
//         );
//     },
//     (prevProps, nextProps) => {
//         // console.log("nextProps", nextProps);
//         // console.log("prevProps", prevProps);
//         // console.log("prevProps.children", prevProps.children);
//         // console.log("nextProps.children", nextProps.children);

//         return prevProps.show === nextProps.show && prevProps.children === nextProps.children;
//     }
// );

// export default Modal;
