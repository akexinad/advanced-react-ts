import React, { Fragment, FC, useState } from "react";
import styled from "styled-components";

interface CockpitProps {
    profileList: {
        id: string;
        name: string;
        age: number;
    }[];
    showProfileList: boolean;
}

export interface StyledButtonProps {
    alt: string | undefined;
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${props => (props.alt ? "red" : "green")};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
        color: black;
    }
`;

const Cockpit: FC<CockpitProps> = ({ profileList, showProfileList }) => {
    const [showProfiles, setShowProfiles] = useState(showProfileList);
    
    const classes = [];

    if (profileList.length <= 2) {
        classes.push("orange");
    }

    if (profileList.length <= 1) {
        classes.push("red");
    }

    const togglePersonsHandler = () => {
        setShowProfiles(!showProfiles);
    };

    return (
        <Fragment>
            <h1>Hello World</h1>
            <h2 className={classes.join(" ")}>This class binding is working</h2>
            <StyledButton
                alt={showProfileList ? "false" : undefined}
                onClick={togglePersonsHandler}
            >
                {showProfileList ? "Hide Persons" : "Show Persons"}
            </StyledButton>
        </Fragment>
    );
};

export default Cockpit;
