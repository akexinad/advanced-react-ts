import React, { ReactElement, Props, PropsWithChildren, FC, ReactNode } from "react";
import Aux from "../../hoc/Auxilliary";

const Layout = (props: PropsWithChildren<ReactNode>) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>{props.children}</main>        
    </Aux>
    
);

export default Layout;