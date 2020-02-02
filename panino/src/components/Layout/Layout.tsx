import React, { FC, ReactElement } from "react";
import Aux from "../../hoc/Auxilliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

interface LayoutProps {
    children: ReactElement | ReactElement[];
}

const Layout: FC<LayoutProps> = (props: ReactElement["props"]) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;
