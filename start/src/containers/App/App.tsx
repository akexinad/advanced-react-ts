import React, { Component } from "react";

import "./App.css";

import TodoList from "../../components/TodoList/TodoList";
import PersonList from "../../components/Persons/PersonList/PersonList";
import Cockpit from "../../components/Cockpit/Cockpit";

export interface TodoItem {
    id: string;
    text: string;
}

interface AppProps {
    appProp: string;
}

class App extends Component<AppProps> {
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

    deletePersonHandler = (id: string) => {
        const persons = [...this.state.profileList];
        const personIndex = persons.findIndex(person => person.id === id);
        persons.splice(personIndex, 1);
        this.setState({
            profileList: persons
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

    profileListToggleHandler = (toggle: boolean) => {
        console.log("hello world");

        toggle = !toggle;

        this.setState({
            showPersons: toggle
        });
    };

    render() {
        return (
            <div className="App">
                <Cockpit
                    profileList={this.state.profileList}
                    showProfileList={this.state.showPersons}
                    toggleProfileList={this.profileListToggleHandler}
                />
                {this.state.showPersons ? (
                    <PersonList
                        profiles={this.state.profileList}
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

export default App;
