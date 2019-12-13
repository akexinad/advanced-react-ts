import React, { FC, Fragment } from "react";

interface ProfileProps {
    user: {
        name: string,
        age: number
    };
}

const Person: FC<ProfileProps> = ({ user, children }) => {
    console.log(user);
    
    
    return (
        <Fragment>
            <h2>
                Hello my name is {user.name} I am {user.age} years old.
            </h2>
            <p>{children}</p>
        </Fragment>
    );
};

export default Person;
