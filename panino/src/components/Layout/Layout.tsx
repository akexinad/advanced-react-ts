import React, { FC, ReactElement } from "react";
import Aux from "../../hoc/Auxilliary";

import classes from "./Layout.module.css";

interface LayoutProps {
    children: ReactElement | ReactElement[];
}

const Layout: FC<LayoutProps> = (props: ReactElement["props"]) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;
