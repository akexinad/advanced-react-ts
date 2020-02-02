import React, { FC } from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const Toolbar: FC = () => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>... links go here.</nav>
    </header>
);

export default Toolbar;
