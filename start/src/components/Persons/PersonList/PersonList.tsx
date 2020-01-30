import React, { FC } from "react";
import Person from "../Person/Person";
import Auxilliary from "../../../hoc/Auxilliary";

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
}

const PersonList: FC<PersonListProps> = ({
    profiles,
    deleteProfile,
    changeProfileName,
    addTodo
}) => {
    return (
        <Auxilliary>
            <h2>PersonList Component</h2>
            {profiles.map(profile => {
                return (
                    <Person
                        key={profile.id}
                        user={profile}
                        changeUserName={changeProfileName}
                        deletePerson={deleteProfile}
                        todo={addTodo}
                    />
                );
            })}
        </Auxilliary>
    );
};

export default PersonList;
