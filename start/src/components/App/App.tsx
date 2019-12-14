import React, { FC, useState } from "react";

import "./App.css";

import Person from "../Person/Person";
import TodoList from "../TodoList/TodoList";
import Button from "../Button/Button";

interface Profile {
    name: string;
    age: number;
}

export interface TodoItem {
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
    const [profileList, setProfile] = useState<Profile[]>(initialProfileData);
    const [todoList, setTodo] = useState<TodoItem[]>(initialTodoData);

    const editProfileHandler = () => {
        setProfile([
            { name: "fellini", age: 99999 },
            { name: "paso", age: 34 },
            { name: "danny", age: 22 }
        ]);
    };

    const addTodoHandler = (text: TodoItem["text"]) => {
        
        const id = Math.floor(Math.random() * 1000).toString();

        const newItem = {
            id,
            text
        }

        setTodo(todoList => [...todoList, newItem]);
    };

    console.log(todoList);
    

    return (
        <div className="App">
            <h1>Hello World</h1>
            <h2>Working</h2>
            <button onClick={editProfileHandler}>Switch Name</button>
            {/* <Button buttonClick={mock} /> */}
            <Person click={editProfileHandler} user={profileList[0]} todo={addTodoHandler}>
                props.children
            </Person>
            <Person click={editProfileHandler} user={profileList[1]} todo={addTodoHandler}>
                props.children
            </Person>
            <Person click={editProfileHandler} user={profileList[2]} todo={addTodoHandler}>
                props.children
            </Person>
            <br />
            <br />
            <br />
            <TodoList todos={todoList} />
        </div>
    );
};

export default App;
