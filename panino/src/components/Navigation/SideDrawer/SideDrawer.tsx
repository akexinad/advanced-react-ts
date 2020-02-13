import React, { FC } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Auxilliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

import styles from "./SideDrawer.module.css";

interface SideDrawerProps {
    closed: () => void;
    open: boolean;
}

const SideDrawer: FC<SideDrawerProps> = ({ closed, open }) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];

    if (open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Aux>
            <Backdrop show={open} clicked={closed} />
            <div className={attachedClasses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;
