import React, { ReactElement, Component } from "react";
import Aux from "../Auxilliary/Auxilliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

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

    /**
     * REMEMBER!!!
     * ===========
     * If the new state depends on the condition on the old state, like a boolean change for
     * passing the change in state as a function like so is the correct way of changing state
     * its asynchronous nature.
     */
    _sideDrawerToggle = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawToggleClicked={this._sideDrawerToggle} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this._sideDrawerClosed}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}