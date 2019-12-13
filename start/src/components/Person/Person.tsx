import React, { FC } from "react";

interface ProfileProps {
    info: {
        name: string;
        age: number;
    }
}

const Person: FC<ProfileProps> = ({ info }) => {
    return (
        <h2>
            Hello my name is {info.name} I am {info.age} years
            old.
        </h2>
    );
};

export default Person;
