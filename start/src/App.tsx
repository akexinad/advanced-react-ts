import React, { Component } from "react";
import "./App.css";

import Person from "./components/Person/Person";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
    state = {
        profile: [
            { name: "fellini", age: 44 },
            { name: "pasolini", age: 34 }
        ],
        todos: [
            { id: "001", text: "get milk" },
            { id: "002", text: "eggs" }
        ]
    };

    switchNameHandler = () => {
        this.setState({
            profile: [
                { name: "fellini", age: 44349656 },
                { name: "benigni", age: 34 }
            ]
        });

        console.log("clicked");
    };

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <h2>Working</h2>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person info={this.state.profile[0]}>LALALALALALAALAL</Person>
                <Person info={this.state.profile[1]}></Person>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
