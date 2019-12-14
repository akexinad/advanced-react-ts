import React, { FC, useState } from "react";

import "./App.css";

import Person from "../Person/Person";
import TodoList from "../TodoList/TodoList";
import Button from "../Button/Button";

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

const mock = [{ foo: "yes", bar: 34, baz: true }];

const App: FC = () => {
    const [profileState, setProfileState] = useState<Profile[]>(
        initialProfileData
    );
    const [todoState] = useState<TodoItem[]>(initialTodoData);

    const editProfileHandler = () => {
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
            <button onClick={ editProfileHandler }>Switch Name</button>
            {/* <Button buttonClick={mock} /> */} 
            <Person 
                click={editProfileHandler}
                user={profileState[0]}
            >
                props.children
            </Person>
            <Person 
                click={editProfileHandler}
                user={profileState[1]}
            >
                props.children
            </Person>
            <Person 
                click={editProfileHandler}
                user={profileState[2]}
            >
                props.children
            </Person>
            <br />
            <br />
            <br />
            <TodoList todos={todoState} />
        </div>
    );
};

export default App;
