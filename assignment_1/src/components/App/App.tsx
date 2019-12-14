import React, { ChangeEvent } from "react";
import "./App.css";

import UserInput from "../UserInput/UserInput";
import UserOutput from "../UserOutput/UserOutput";

class App extends React.Component {
    state = {
        users: [
            { username: "fellini" },
            { username: "pasolini" }
        ]
    };

    resetUsernameHandler = () => {
        this.setState({
            users: [
                { username: "fellini" },
                { username: "pasolini" }
            ]
        });
    };

    inputusernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        const username = e.target.value;
        
        this.setState({
            users: [
                { username },
                { username }
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Assignment 1</h1>
                <UserInput
                    changed={this.inputusernameChangeHandler}
                    username={this.state.users[0].username}
                />
                <UserOutput username={this.state.users[0].username} />
                <UserOutput username={this.state.users[1].username} />
                <button onClick={this.resetUsernameHandler}>
                    Reset
                </button>
            </div>
        );
    }
}

export default App;
