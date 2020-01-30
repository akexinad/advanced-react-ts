import React, { FC, useState, useEffect, createRef, RefObject, useRef, MutableRefObject } from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import { TodoItem } from "../../../containers/App/App";
import WithClass from "../../../hoc/WithClasses";

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

    // let inputElement: HTMLInputElement | null;
    /**
     * I've commented out the first way we can handle reference objects.
     * Both approaches are ok.
     */
    
    // let inputElementRef: RefObject<HTMLInputElement> = createRef();

    // The above examples are how you would use these in a class based component.
    // The ref would be instantiated in the constructor and then referenced accordingly in the componentDidMount lifecycle method.

    // This is an example of how it is done in a functional component.
    let inputElementRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

    
    useEffect(() => {
        // if (!inputElement) return;
        // inputElement.focus();

        if (!inputElementRef.current) return;
        inputElementRef.current.focus();
    });

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
                // ref={refEl => (inputElement = refEl)}
                ref={inputElementRef}
            />
        </StyledDiv>
    );
};

// If you weren't using TS, this is how you would manage your prop types.
// Person.propTypes = {
//     user: {
//         id: PropTypes.string,
//         name: PropTypes.string,
//         age: PropTypes.number
//     },
//     changeUserName: PropTypes.func,
//     deletePerson: PropTypes.func,
//     todo: PropTypes.func
// }

const style = {
    backgroundColor: "green"
};

export default WithClass(Person, style);
