import React, { FC, useState } from "react";
import styled from "styled-components";

import { TodoItem } from "../App/App";

// import "./Person.css";

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

    const StyledDiv = styled.div`
        width: 60%;
        margin: auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px salmon;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px) {
            width: 450px;
        }
    `;

    return (
        <StyledDiv>
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
        </StyledDiv>
    );
};

export default Person;
