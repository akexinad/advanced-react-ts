import React, { FC, useState } from "react";
import { TodoItem } from "../App/App";

import "./Person.css";

interface PersonProps {
    user: {
        name: string;
        age: number;
    };
    click: () => void;
    todo: (text: TodoItem["text"]) => void;
}

const Person: FC<PersonProps> = ({ user, click, todo, children }) => {
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

    return (
        <div className="Person">
            <h2 onClick={click}>
                Hello my name is {user.name} I am {user.age} years old.
            </h2>
            <p>{children}</p>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={todoHandler}
                />
                <input
                    type="submit"
                    value="submit"
                />
            </form>
        </div>
    );
};

export default Person;
