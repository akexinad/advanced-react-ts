import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
    link: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ children, link }) => (
    <li className={styles.NavigationItem}>
        <NavLink exact activeClassName={styles.active} to={link}>
            {children}
        </NavLink>
    </li>
);

export default NavigationItem;
