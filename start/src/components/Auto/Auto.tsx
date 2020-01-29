import React, { Component } from "react";
import { AppState } from "../../containers/App/App";

interface AutoProps {
    cars: {
        make: string;
        model: string;
    }[];
}

class Auto extends Component<AutoProps, AppState> {

    shouldComponentUpdate = (nextProps: AutoProps, nextState: AppState) => {
        console.log("Auto.tsx: shouldComponentUpdate()");
        
        if (nextProps.cars !== this.props.cars) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate = () => {
        console.log("Auto.tsx: getSnapshotBeforeUpdate()");
    }

    componentDidUpdate = () => {
        console.log("Auto.tsx: componentDidUpdate()");
    }
    
    render() {
        return (
            <ul>
                {this.props.cars.map((car, index) => {
                    return (
                        <li key={index}>
                            {car.make} {car.model}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Auto;
