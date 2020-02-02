import React, { FC } from "react";

import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
    link: string;
    active: boolean;
}

const NavigationItem: FC<NavigationItemProps> = ({
    children,
    link,
    active
}) => (
    <li className={styles.NavigationItem}>
        <a href={link} className={active ? styles.active : undefined}>
            {children}
        </a>
    </li>
);

export default NavigationItem;
