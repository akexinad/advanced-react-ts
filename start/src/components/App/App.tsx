import React, { Component, Fragment } from "react";

import "./App.css";

import Person from "../Person/Person";
import TodoList from "../TodoList/TodoList";

export interface TodoItem {
    id: string;
    text: string;
}

class App extends Component {
    state = {
        profileList: [
            { id: "001", name: "fellini", age: 44 },
            { id: "002", name: "pasolini", age: 34 },
            { id: "003", name: "benigni", age: 22 }
        ],
        todoList: [
            { id: "001", text: "get milk" },
            { id: "002", text: "eggs" }
        ],
        showPersons: false
    };

    editProfileHandler = () => {
        this.setState({
            profileList: [
                { id: "001", name: "jerry", age: 99999 },
                { id: "002", name: "george", age: 34 },
                { id: "003", name: "kramer", age: 22 }
            ]
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    addTodoHandler = (text: TodoItem["text"]) => {
        const id: TodoItem["id"] = "00" + (this.state.todoList.length + 1);

        const newItem = {
            id,
            text
        };

        this.setState({
            todoList: [...this.state.todoList, newItem]
        });
    };

    renderPersons = () => {
        return this.state.showPersons ? (
            <Fragment>
                {this.state.profileList.map(profile => {
                    return (
                        <Person
                            key={profile.id}
                            click={this.editProfileHandler}
                            user={profile}
                            todo={this.addTodoHandler}
                        />
                    );
                })}
            </Fragment>
        ) : null;
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        return (
            <div className="App">
                <h1>Hello World</h1>
                <h2>Working</h2>
                <button style={style} onClick={this.togglePersonsHandler}>
                    {this.state.showPersons ? "Hide Persons" : "Show Persons"}
                </button>
                {this.renderPersons()}
                <br />
                <br />
                <br />
                <TodoList todos={this.state.todoList} />
            </div>
        );
    }
}

export default App;
