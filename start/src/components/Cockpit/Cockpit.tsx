import React, { Fragment, FC, useEffect, memo } from "react";
import styled from "styled-components";

interface CockpitProps {
    profileListLength: number;
    showProfileList: boolean;
    toggleProfileList: (toggle: boolean) => void;
    login: () => void;
}

interface StyledButtonProps {
    alt: string | undefined;
}

interface LoginButtonProps {
    backgroundColor: string;
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

const LoginButton = styled.button<LoginButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: white;
    font: inherit;
    border: 1px solid black;
    padding: 8px;
    cursor: pointer;
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
    profileListLength,
    showProfileList,
    toggleProfileList,
    login
}) => {
    useEffect(() => {
        console.log("Cockpit.tsx: useEffect()");

        const timer = setTimeout(() => {
            alert("Saved data to cloud!");
        }, 500);

        return () => {
            clearTimeout(timer);
            console.log("Cockpit.tsx: Cleanup in useEffect()");
        };
    }, [showProfileList]);

    const classes = [];

    if (profileListLength <= 2) {
        classes.push("orange");
    }

    if (profileListLength <= 1) {
        classes.push("red");
    }

    return (
        <Fragment>
            <h1>Cockpit component</h1>
            <StyledH2 profileListLength={profileListLength}>
                This class binding is working
            </StyledH2>
            <StyledButton
                color="white"
                alt={showProfileList ? "false" : undefined}
                onClick={() => toggleProfileList(showProfileList)}
            >
                {showProfileList ? "Hide Persons" : "Show Persons"}
            </StyledButton>
            <LoginButton backgroundColor="blue" onClick={login}>Login Button</LoginButton>
        </Fragment>
    );
};

// memo is the equivalent of the shouldComponentUpdate found in class-based components for functional components.
export default memo(Cockpit);
