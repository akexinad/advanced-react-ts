import React, { FC, ReactElement } from "react";
import Aux from "../../hoc/Auxilliary";

interface LayoutProps {
    children: ReactElement;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>{props.children}</main>        
    </Aux>
    
);

export default Layout;