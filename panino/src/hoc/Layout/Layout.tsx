import React, { FC, useState } from "react";
import Aux from "../Auxilliary/Auxilliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

const Layout: FC = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const _sideDrawerClosed = () => setShowSideDrawer(false);

    const _sideDrawerToggle = () => setShowSideDrawer((prevState) => !prevState);

    return (
        <Aux>
            <Toolbar drawToggleClicked={_sideDrawerToggle} />
            <SideDrawer open={showSideDrawer} closed={_sideDrawerClosed} />
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
};

export default Layout;

// export default  Layout extends Component<LayoutProps, LayoutState> {
//     state = {
//         showSideDrawer: true
//     };

//     _sideDrawerClosed = () => {
//         this.setState({
//             showSideDrawer: false
//         });
//     };

//     /**
//      * REMEMBER!!!
//      * ===========
//      * If the new state depends on the condition on the old state, like a boolean change for
//      * passing the change in state as a function like so is the correct way of changing state
//      * its asynchronous nature.
//      */
//     _sideDrawerToggle = () => {
//         this.setState(prevState => {
//             return { showSideDrawer: !prevState.showSideDrawer };
//         });
//     };

//     render() {
//         return (
//             <Aux>
//                 <Toolbar drawToggleClicked={this._sideDrawerToggle} />
//                 <SideDrawer
//                     open={this.state.showSideDrawer}
//                     closed={this._sideDrawerClosed}
//                 />
//                 <main className={classes.Content}>{this.props.children}</main>
//             </Aux>
//         );
//     }
// }
