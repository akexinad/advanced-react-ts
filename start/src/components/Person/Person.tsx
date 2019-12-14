import React, { FC, Fragment } from "react";

interface PersonProps {
    user: {
        name: string;
        age: number;
    };
    click: () => void;
}


const Person: FC<PersonProps> = ({ user, click, children }) => {
    return (
        <Fragment>
            <h2 onClick={click}>
                Hello my name is {user.name} I am {user.age} years old.
            </h2>
            <p>{children}</p>
        </Fragment>
    );
};

export default Person;
