import React, { ReactElement, Props } from "react";
import Aux from "../../hoc/Auxilliary";

const Layout = (props: Props<ReactElement>) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>{props.children}</main>        
    </Aux>
    
);

export default Layout;