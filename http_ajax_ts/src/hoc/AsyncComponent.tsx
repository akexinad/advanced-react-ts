import React from "react";

type Module = {
    default: React.Component;
};

const AsyncComponent = (importComponent: Function) => {
    class AsyncComponent extends React.Component {
        state = {
            component: () => <div>...Loading...</div>
        };

        componentDidMount = () => {
            importComponent().then((cmp: Module) => {
                this.setState({
                    component: cmp.default
                });
            });
        };

        render() {
            const C: React.ReactType = this.state.component;

            return <C {...this.props} />;
        }
    }

    return AsyncComponent;
};

export default AsyncComponent;
