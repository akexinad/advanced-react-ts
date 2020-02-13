import React, { FC } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../DrawerToggle/DrawerToggle";

import styles from "./Toolbar.module.css";

interface ToolbarProps {
    drawToggleClicked: () => void;
}

const Toolbar: FC<ToolbarProps> = ({ drawToggleClicked }) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={drawToggleClicked} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;
