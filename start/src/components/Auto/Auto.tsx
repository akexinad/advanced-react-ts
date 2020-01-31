import React, { Component, Fragment } from "react";
import { AppState } from "../../containers/App/App";
import AuthContext from "../../context/AuthContext";

interface AutoProps {
    cars: {
        make: string;
        model: string;
    }[];
}

class Auto extends Component<AutoProps, AppState> {
    /**
     * This gives us access to the context OUTSIDE of the JSX
     * and can can be found in this.context
     */
    static contextType = AuthContext;

    componentDidMount = () => {
        console.log(this.context);
    };

    shouldComponentUpdate = (nextProps: AutoProps, nextState: AppState) => {
        console.log("Auto.tsx: shouldComponentUpdate()");

        if (nextProps.cars !== this.props.cars) {
            return true;
        } else {
            return false;
        }
    };

    getSnapshotBeforeUpdate = () => {
        console.log("Auto.tsx: getSnapshotBeforeUpdate()");
    };

    componentDidUpdate = () => {
        console.log("Auto.tsx: componentDidUpdate()");
    };

    render() {
        console.log("AutoComponent:", this.context);
        
        return (
            <Fragment>
                {this.context.authenticated ? (
                    <ul>
                        {this.props.cars.map((car, index) => {
                            return (
                                <li key={index}>
                                    {car.make} {car.model}
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>
                        You have to be logged in to see my beautiful car
                        collection
                    </p>
                )}
            </Fragment>
        );
    }
}

export default Auto;
