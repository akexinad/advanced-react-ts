import React, { FC } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import styles from "./Toolbar.module.css";

const Toolbar: FC = () => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo height="80%" />
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;
