import React, { FC, useState } from "react";

import "./App.css";

import Person from "./components/Person/Person";
import TodoList from "./components/TodoList/TodoList";

interface Profile {
    name: string;
    age: number;
}

interface TodoItem {
    id: string;
    text: string;
}

const initialProfileData = [
    { name: "fellini", age: 44 },
    { name: "pasolini", age: 34 },
    { name: "benigni", age: 22 }
];

const initialTodoData = [
    { id: "001", text: "get milk" },
    { id: "002", text: "eggs" }
];

const App: FC = () => {
    const [profileState, setProfileState] = useState<Profile[]>(
        initialProfileData
    );
    const [todoState] = useState<TodoItem[]>(initialTodoData);

    const switchNameHandler = () => {
        setProfileState([
            { name: "fellini", age: 99999 },
            { name: "paso", age: 34 },
            { name: "danny", age: 22 }
        ]);
    };

    return (
        <div className="App">
            <h1>Hello World</h1>
            <h2>Working</h2>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person user={profileState[0]}>LALALALALALAALAL</Person>
            <Person user={profileState[1]}></Person>
            <Person user={profileState[2]}></Person>
            <TodoList todos={todoState} />
        </div>
    );
};

export default App;
