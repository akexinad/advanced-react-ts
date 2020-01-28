import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";

import TodoList from "../TodoList/TodoList";
import PersonList from "../Persons/PersonList/PersonList";

export interface TodoItem {
    id: string;
    text: string;
}

export interface StyledButtonProps {
    alt: string | undefined;
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${props => (props.alt ? "red" : "green")};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
        color: black;
    }
`;

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

    editProfileHandler = (event: React.MouseEvent, id: string) => {
        this.setState({
            profileList: [
                { id: "001", name: "jerry", age: 99999 },
                { id: "002", name: "george", age: 34 },
                { id: "003", name: "kramer", age: 22 }
            ]
        });
    };

    deletePersonHandler = (id: string) => {
        const persons = [...this.state.profileList];
        persons.splice(0, 1);
        this.setState({
            profileList: persons
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

    handleUsernameChange = (
        value: React.ChangeEvent["target"]["nodeValue"],
        id: string
    ) => {
        const newProfileList = [...this.state.profileList];

        const personIndex = newProfileList.findIndex(
            person => person.id === id
        );

        const person = newProfileList[personIndex];

        if (!value) return;

        person.name = value;

        this.setState({
            profileList: newProfileList
        });
    };

    render() {
        const classes = [];

        if (this.state.profileList.length <= 2) {
            classes.push("orange");
        }

        if (this.state.profileList.length <= 1) {
            classes.push("red");
        }

        return (
            <div className="App">
                <h1>Hello World</h1>
                <h2 className={classes.join(" ")}>
                    This class binding is working
                </h2>
                <StyledButton
                    alt={this.state.showPersons ? "false" : undefined}
                    onClick={this.togglePersonsHandler}
                >
                    {this.state.showPersons ? "Hide Persons" : "Show Persons"}
                </StyledButton>
                {this.state.showPersons ? (
                    <PersonList
                        profiles={this.state.profileList}
                        editProfile={this.editProfileHandler}
                        deleteProfile={this.deletePersonHandler}
                        changeProfileName={this.handleUsernameChange}
                        addTodo={this.addTodoHandler}
                    />
                ) : null}
                <br />
                <br />
                <br />
                <TodoList todos={this.state.todoList} />
            </div>
        );
    }
}

// this is an example of a higher order component
export default App;
