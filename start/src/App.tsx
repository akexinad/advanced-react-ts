import React, { Component, Props } from "react";
import "./App.css";

import Person from "./components/Person/Person";
import TodoList from "./components/TodoList/TodoList";


class App extends Component {

    
    public render() {
        const profile = {
            name: "fellini",
            age: 44
        }

        const todos = [
            {
                id: "001",
                text: "get milk"
            },
            {
                id: "002",
                text: "eggs"
            }
        ];
    
        
        return (
            <div className="App">
                <h1>Hello World</h1>
                <h2>Working</h2>
                <Person info={ profile } />
                <TodoList todos={ todos }/>
            </div>
        );
    }
}

export default App;
