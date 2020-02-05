import React, { FC, ReactElement, Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

interface LayoutProps {
    children: ReactElement | ReactElement[];
}

interface LayoutState {
    showSideDrawer: boolean;
}

export default class Layout extends Component<LayoutProps, LayoutState> {
    state = {
        showSideDrawer: true
    };

    _sideDrawerClosed = () => {
        this.setState({
            showSideDrawer: false
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this._sideDrawerClosed}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}
