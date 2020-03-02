import React, { Component, Props, FC, memo, ReactPropTypes } from "react";
import Aux from "../../../hoc/Auxilliary/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.css";

interface ModalProps {
    show: boolean;
    modalClosed: () => void;
}

const Modal: FC<ModalProps> = ({ show, modalClosed, children }) => {
    return (
        <Aux>
            <Backdrop show={show} clicked={modalClosed} />
            <div
                className={styles.Modal}
                style={{
                    transform: show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: show ? "1" : "0"
                }}
            >
                {children}
            </div>
        </Aux>
    );
};

export default memo(
    Modal,
    (prevProps, nextProps) =>
        prevProps.show === nextProps.show &&
        prevProps.children === nextProps.children
);
