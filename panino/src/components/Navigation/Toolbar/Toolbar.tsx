import React, { FC } from "react";

import styles from "./Toolbar.module.css";

const Toolbar: FC = () => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>... links go here.</nav>
    </header>
);

export default Toolbar;
