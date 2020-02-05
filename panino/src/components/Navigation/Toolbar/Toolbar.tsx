import React, { FC } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import styles from "./Toolbar.module.css";
import DrawerToggle from "../../DrawerToggle/DrawerToggle";

interface ToolbarProps {
    drawToggleClicked: () => void;
}

const Toolbar: FC<ToolbarProps> = ({ drawToggleClicked }) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={drawToggleClicked} />
        <Logo height="80%" />
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;
