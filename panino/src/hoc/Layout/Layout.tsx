import React, { FC, useState, Props, ReactPropTypes, ReactType, Component } from "react";

import Aux from "../Auxilliary/Auxilliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

const Layout: FC = (props: Component["props"]) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const _sideDrawerClosed = () => setShowSideDrawer(false);

    /**
     * REMEMBER!!!
     * ===========
     * If the new state depends on the condition on the old state, like a boolean change for
     * passing the change in state as a function like so is the correct way of changing state
     * its asynchronous nature.
     */
    const _sideDrawerToggle = () =>
        setShowSideDrawer((prevState: boolean) => !prevState);

    return (
        <Aux>
            <Toolbar drawToggleClicked={_sideDrawerToggle} />
            <SideDrawer open={showSideDrawer} closed={_sideDrawerClosed} />
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
};

export default Layout;
