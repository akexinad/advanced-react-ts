import React, { Component } from "react";

import "./App.css";

import TodoList from "../TodoList/TodoList";
import PersonList from "../Persons/PersonList/PersonList";
import Cockpit from "../Cockpit/Cockpit";

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

    render() {
        
        return (
            <div className="App">
                <Cockpit 
                    profileList={this.state.profileList}
                    showProfileList={this.state.showPersons}
                />
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
