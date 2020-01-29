import React, { FC, useState } from "react";
import styled from "styled-components";

import { TodoItem } from "../../../containers/App/App";

interface PersonProps {
    user: {
        id: string;
        name: string;
        age: number;
    };
    changeUserName: (
        value: React.ChangeEvent["target"]["nodeValue"],
        id: string
    ) => void;
    deletePerson: (id: string) => void;
    todo: (text: TodoItem["text"]) => void;
}

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

const Person: FC<PersonProps> = ({
    user,
    deletePerson,
    changeUserName,
    todo
}) => {
    const [newTodo, setNewTodo] = useState<string>("");
    const [profileName, setProfileName] = useState<string>(user.name);

    const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;

        setNewTodo(text);
    };

    const profileNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;

        setProfileName(newName);

        changeUserName(newName, user.id);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newTodo.length === 0) {
            return;
        }

        todo(newTodo);
        setNewTodo("");
    };

    return (
        <StyledDiv>
            <h2>
                Hello my name is {profileName} I am {user.age} years old.
            </h2>
            <form onSubmit={submitHandler}>
                <input type="text" value={newTodo} onChange={todoHandler} />
                <input type="submit" value="Add Todo" />
            </form>
            <button onClick={() => deletePerson(user.id)}>Delete Person</button>
            <br />
            <input
                type="text"
                placeholder="change name"
                onChange={profileNameHandler}
            />
        </StyledDiv>
    );
};

export default Person;
