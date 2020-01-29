import React, { Component } from "react";

import "./App.css";

import TodoList from "../../components/TodoList/TodoList";
import PersonList from "../../components/Persons/PersonList/PersonList";
import Cockpit from "../../components/Cockpit/Cockpit";
import Auto from "../../components/Auto/Auto";

export interface TodoItem {
    id: string;
    text: string;
}

interface AppProps {
    appProp: string;
}

export interface AppState {
    profileList: {
        id: string;
        name: string;
        age: number;
    }[];
    todoList: {
        id: string;
        text: string;
    }[];
    showPersons: boolean;
    cars: {
        make: string;
        model: string;
    }[];
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        console.log("App.tsx: constructor()");

        this.state = {
            profileList: [
                { id: "001", name: "fellini", age: 44 },
                { id: "002", name: "pasolini", age: 34 },
                { id: "003", name: "benigni", age: 22 }
            ],
            todoList: [
                { id: "001", text: "get milk" },
                { id: "002", text: "eggs" }
            ],
            showPersons: false,
            cars: [
                { make: "ferrari", model: "f40" },
                { make: "lancia", model: "stratos" },
                { make: "pagani", model: "zonda" }
            ]
        };
    }

    static getDerivedStateFromProps(props: AppProps, state: AppState) {
        console.log("App.tsx: getDerivedStateFromProps()", props);
        return state;
    }

    // componentDidMount = () => {
    //     console.log("App.tsx: componentDidMount()");
    //     this.setState({
    //         profileList: [
    //             { id: "001", name: "foo", age: 99 },
    //             { id: "002", name: "bar", age: 99 },
    //             { id: "003", name: "baz", age: 99 }
    //         ]
    //     });
    // };

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
        toggle = !toggle;

        this.setState({
            showPersons: toggle
        });
    };

    addCarHandler = () => {
        const newCar: AppState["cars"] = [{
            make: "foo",
            model: "bar"
        }];

        this.setState({
            cars: [
                ...this.state.cars,
                ...newCar
            ]
        })
    };

    render() {
        console.log("App.tsx: render()");
        return (
            <div className="App">
                <Cockpit
                    profileListLength={this.state.profileList.length}
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
                <Auto cars={this.state.cars} />
                <button onClick={this.addCarHandler}>Add car</button>
            </div>
        );
    }
}

export default App;
