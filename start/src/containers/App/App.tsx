import React, { Component } from "react";

import "./App.css";

import TodoList from "../../components/TodoList/TodoList";
import PersonList from "../../components/Persons/PersonList/PersonList";
import Cockpit from "../../components/Cockpit/Cockpit";
import Auto from "../../components/Auto/Auto";
import StyledDiv from "../../hoc/StyledDiv";
import WithClass from "../../hoc/WithClasses";
import AuthContext from "../../context/AuthContext";

export interface TodoItem {
    id: string;
    text: string;
}

export interface AppProps {
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
    randomCounter: number;
    authenticated: boolean;
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
            ],
            randomCounter: 0,
            authenticated: false
        };
    }

    static getDerivedStateFromProps(props: AppProps, state: AppState) {
        console.log("App.tsx: getDerivedStateFromProps()", props);
        return state;
    }

    componentDidMount = () => {
        console.log("App.tsx: componentDidMount()");
        setTimeout(() => {
            this.setState((prevState: AppState, props: AppProps) => {
                return {
                    randomCounter: prevState.randomCounter + 1
                };
            });
        }, 5000);
    };

    _deletePerson = (id: string) => {
        const persons = [...this.state.profileList];
        const personIndex = persons.findIndex(person => person.id === id);
        persons.splice(personIndex, 1);
        this.setState({
            profileList: persons
        });
    };

    _addTodo = (text: TodoItem["text"]) => {
        const id: TodoItem["id"] = "00" + (this.state.todoList.length + 1);

        const newItem = {
            id,
            text
        };

        this.setState({
            todoList: [...this.state.todoList, newItem]
        });
    };

    _changeUsername = (
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

    _toggleProfileList = (toggle: boolean) => {
        toggle = !toggle;

        this.setState({
            showPersons: toggle
        });
    };

    _addCar = () => {
        const newCar: AppState["cars"] = [
            {
                make: "foo",
                model: "bar"
            }
        ];

        this.setState({
            cars: [...this.state.cars, ...newCar]
        });
    };

    _login = () => {
        this.setState({
            authenticated: true
        });
    };

    render() {
        console.log("App.tsx: render()");
        return (
            <StyledDiv backgroundColor="none">
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this._login
                    }}
                >
                    <Cockpit
                        profileListLength={this.state.profileList.length}
                        showProfileList={this.state.showPersons}
                        toggleProfileList={this._toggleProfileList}
                    />
                    {this.state.showPersons ? (
                        <PersonList
                            profiles={this.state.profileList}
                            deleteProfile={this._deletePerson}
                            changeProfileName={this._changeUsername}
                            addTodo={this._addTodo}
                        />
                    ) : null}
                    <br />
                    <br />
                    <br />
                    <TodoList todos={this.state.todoList} />
                    <button onClick={this._addCar}>Add car</button>
                <Auto cars={this.state.cars} />
                </AuthContext.Provider>
            </StyledDiv>
        );
    }
}

const style = {
    textAlign: "center",
    backgroundColor: "pink"
};

export default WithClass(App, style);
