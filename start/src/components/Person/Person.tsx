import React, { FC, useState } from "react";
import Radium from "radium";

import { TodoItem } from "../App/App";

import "./Person.css";

interface PersonProps {
    user: {
        id: string;
        name: string;
        age: number;
    };
    changeDetails: (event: React.MouseEvent, id: string) => void;
    changeUserName: (
        value: React.ChangeEvent["target"]["nodeValue"],
        id: string
    ) => void;
    deletePerson: (id: string) => void;
    todo: (text: TodoItem["text"]) => void;
}

const Person: FC<PersonProps> = ({
    user,
    changeDetails,
    deletePerson,
    changeUserName,
    todo,
    children
}) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;

        setNewTodo(text);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newTodo.length === 0) {
            return;
        }

        todo(newTodo);
    };

    const style = {
        "@media (min-width: 500px)": {
            "width": "450px"
        }
    };

    return (
        <div className="Person">
            <h2 onClick={e => changeDetails(e, user.id)}>
                Hello my name is {user.name} I am {user.age} years old.
            </h2>
            <p>{children}</p>
            <form onSubmit={submitHandler}>
                <input type="text" value={newTodo} onChange={todoHandler} />
                <input type="submit" value="Add Todo" />
            </form>
            <button onClick={e => deletePerson(user.id)}>Delete Person</button>
            <br />
            <input
                type="text"
                placeholder="change name"
                onChange={e => changeUserName(e.target.value, user.id)}
            />
        </div>
    );
};

export default Radium(Person);
