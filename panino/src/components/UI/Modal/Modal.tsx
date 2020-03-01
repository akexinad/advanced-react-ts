import React, { FC, memo, Component, ReactElement, ReactNode } from "react";
import Aux from "../../../hoc/Auxilliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.css";

interface ModalProps {
    show: boolean;
    modalClosed: () => void;
}

const Modal: FC<ModalProps> = memo(
    props => {
        console.log("props.show", props.show);
        return (
            <Aux>
                <Backdrop show={props.show} clicked={props.modalClosed}>
                    <div
                        className={styles.Modal}
                        style={{
                            transform: props.show
                                ? "translateY(0)"
                                : "translateY(-100vh)",
                            opacity: props.show ? "1" : "0"
                        }}
                    >
                        {props.children}
                    </div>
                </Backdrop>
            </Aux>
        );
    },
    (prevProps, nextProps) => {
        // console.log("nextProps", nextProps);
        // console.log("prevProps", prevProps);
        // console.log("prevProps.children", prevProps.children);
        // console.log("nextProps.children", nextProps.children);
        
        return prevProps.show === nextProps.show && prevProps.children === nextProps.children;
    }
);

export default Modal;
