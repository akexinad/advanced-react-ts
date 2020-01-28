import React, { Fragment, FC } from "react";
import styled from "styled-components";

interface CockpitProps {
    profileList: {
        id: string;
        name: string;
        age: number;
    }[];
    showProfileList: boolean;
    toggleProfileList: (toggle: boolean) => void;
}

interface StyledButtonProps {
    alt: string | undefined;
}

interface StyledH2Props {
    profileListLength: number;
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

const StyledH2 = styled.h2<StyledH2Props>`
    color: ${({ profileListLength }) => {
        if (profileListLength <= 1) {
            return "red";
        } else if (profileListLength <= 2) {
            return "orange";
        } else {
            return "black";
        }
    }};
`;

const Cockpit: FC<CockpitProps> = ({
    profileList,
    showProfileList,
    toggleProfileList
}) => {
    const classes = [];

    if (profileList.length <= 2) {
        classes.push("orange");
    }

    if (profileList.length <= 1) {
        classes.push("red");
    }

    return (
        <Fragment>
            <h1>Hello World</h1>
            <StyledH2 profileListLength={profileList.length}>
                This class binding is working
            </StyledH2>
            <StyledButton
                alt={showProfileList ? "false" : undefined}
                onClick={() => toggleProfileList(showProfileList)}
            >
                {showProfileList ? "Hide Persons" : "Show Persons"}
            </StyledButton>
        </Fragment>
    );
};

export default Cockpit;
