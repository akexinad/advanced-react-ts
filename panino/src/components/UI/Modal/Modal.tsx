import React, { FC } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
    show: boolean;
}

const Modal: FC<ModalProps> = props => (
    <div
        className={styles.Modal}
        style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0"
        }}
    >
        {props.children}
    </div>
);

export default Modal;
