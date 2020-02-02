import React, { FC } from "react";

import styles from "./Backdrop.module.css";

interface BackdropProps {
    show: boolean;
    clicked: () => void;
}

const Backdrop: FC<BackdropProps> = props =>
    props.show ? (
        <div onClick={props.clicked} className={styles.Backdrop}>
            {props.children}
        </div>
    ) : null;

export default Backdrop;
