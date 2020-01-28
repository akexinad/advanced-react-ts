import React, { FC, Fragment } from "react";
import Person from "../Person/Person";

interface PersonListProps {
    profiles: {
        id: string;
        name: string;
        age: number;
    }[];
    editProfile: (
        event: React.MouseEvent<Element, MouseEvent>,
        id: string
    ) => void;
    deleteProfile: (id: string) => void;
    changeProfileName: (
        value: React.ChangeEvent["target"]["nodeValue"],
        id: string
    ) => void;
    addTodo: (text: string) => void;
}

const PersonList: FC<PersonListProps> = ({
    profiles,
    editProfile,
    deleteProfile,
    changeProfileName,
    addTodo
}) => {
    return (
        <Fragment>
            <h2>PersonList Component</h2>
            {profiles.map(profile => {
                return (
                    <Person
                        key={profile.id}
                        user={profile}
                        changeDetails={editProfile}
                        changeUserName={changeProfileName}
                        deletePerson={deleteProfile}
                        todo={addTodo}
                    />
                );
            })}
        </Fragment>
    );
};

export default PersonList;
