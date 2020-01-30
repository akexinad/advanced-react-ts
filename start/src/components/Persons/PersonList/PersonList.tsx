import React, { FC, Fragment } from "react";
import Person from "../Person/Person";

interface PersonListProps {
    profiles: {
        id: string;
        name: string;
        age: number;
    }[];
    deleteProfile: (id: string) => void;
    changeProfileName: (
        value: React.ChangeEvent["target"]["nodeValue"],
        id: string
    ) => void;
    addTodo: (text: string) => void;
    isAuthenticated: boolean;
}

const PersonList: FC<PersonListProps> = ({
    profiles,
    deleteProfile,
    changeProfileName,
    addTodo,
    isAuthenticated
}) => {
    return (
        <Fragment>
            <h2>PersonList Component</h2>
            {profiles.map(profile => {
                return (
                    <Person
                        key={profile.id}
                        user={profile}
                        changeUserName={changeProfileName}
                        deletePerson={deleteProfile}
                        todo={addTodo}
                        isAuth={isAuthenticated}
                    />
                );
            })}
        </Fragment>
    );
};

export default PersonList;
