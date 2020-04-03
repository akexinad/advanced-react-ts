import React, { Component } from "react";
import { connect } from "react-redux";

import {
    INCREMENT,
    DECREMENT,
    ADD_FIVE,
    SUBTRACT_FIVE,
    STORE_RESULT,
    DELETE_RESULT
} from "../../store/reducer";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
    state = {
        counter: 0
    };

    counterChangedHandler = (action, value) => {
        switch (action) {
            case "inc":
                this.setState(prevState => {
                    return { counter: prevState.counter + 1 };
                });
                break;
            case "dec":
                this.setState(prevState => {
                    return { counter: prevState.counter - 1 };
                });
                break;
            case "add":
                this.setState(prevState => {
                    return { counter: prevState.counter + value };
                });
                break;
            case "sub":
                this.setState(prevState => {
                    return { counter: prevState.counter - value };
                });
                break;
        }
    };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl label="Add 5" clicked={this.props.onAddFive} />
                <CounterControl
                    label="Subtract 5"
                    clicked={this.props.onSubtractFive}
                />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((item, index) => (
                        <li
                            key={index * 1234}
                            onClick={() => this.props.onDeleteResult(item.id)}
                        >
                            {item.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () =>
            dispatch({
                type: INCREMENT
            }),
        onDecrementCounter: () =>
            dispatch({
                type: DECREMENT
            }),
        onAddFive: () =>
            dispatch({
                type: ADD_FIVE,
                payload: 5
            }),
        onSubtractFive: () =>
            dispatch({
                type: SUBTRACT_FIVE,
                payload: 5
            }),
        onStoreResult: () => dispatch({ type: STORE_RESULT }),
        onDeleteResult: id => dispatch({ type: DELETE_RESULT, payload: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
