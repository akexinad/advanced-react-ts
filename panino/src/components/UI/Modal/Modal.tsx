import React, { PropsWithChildren, ReactNode } from "react";

import styles from "./Modal.module.css";

const Modal = (props: PropsWithChildren<ReactNode>) => (
    <div className={styles.Modal}>{props.children}</div>
);

export default Modal;
