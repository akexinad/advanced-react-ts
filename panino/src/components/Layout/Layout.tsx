import React, { FC, ReactElement } from "react";
import Aux from "../../hoc/Auxilliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";

interface LayoutProps {
    children: ReactElement | ReactElement[];
}

const Layout: FC<LayoutProps> = (props: ReactElement["props"]) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default Layout;
