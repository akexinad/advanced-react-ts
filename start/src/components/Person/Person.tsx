import React, { FC, Fragment } from "react";

interface ProfileProps {
    info: {
        name: string,
        age: number
    };
}

const Person: FC<ProfileProps> = ({ info, children }) => {
    return (
        <Fragment>
            <h2>
                Hello my name is {info.name} I am {info.age} years old.
            </h2>
            <p>{children}</p>
        </Fragment>
    );
};

export default Person;
