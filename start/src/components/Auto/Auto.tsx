import React, { Component } from "react";

interface AutoProps {
    cars: {
        make: string;
        model: string;
    }[];
}

class Auto extends Component<AutoProps> {

    shouldComponentUpdate = (nextProps: any, nextState: any) => {
        console.log("Auto.tsx: shouldComponentUpdate()");
        
        return true;
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
