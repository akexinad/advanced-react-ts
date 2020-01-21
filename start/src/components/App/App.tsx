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
            { name: "fellini", age: 44 },
            { name: "pasolini", age: 34 },
            { name: "benigni", age: 22 }
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
                { name: "jerry", age: 99999 },
                { name: "george", age: 34 },
                { name: "kramer", age: 22 }
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
                <Person
                    click={this.editProfileHandler}
                    user={this.state.profileList[0]}
                    todo={this.addTodoHandler}
                >
                    props.children
                </Person>
                <Person
                    click={this.editProfileHandler}
                    user={this.state.profileList[1]}
                    todo={this.addTodoHandler}
                >
                    props.children
                </Person>
                <Person
                    click={this.editProfileHandler}
                    user={this.state.profileList[2]}
                    todo={this.addTodoHandler}
                >
                    props.children
                </Person>
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
                    Show Persons
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
