import React, { FC } from "react";
import Aux from "../../../hoc/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.css";

interface ModalProps {
    show: boolean;
    modalClosed: () => void;
}

const Modal: FC<ModalProps> = props => (
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

export default Modal;
