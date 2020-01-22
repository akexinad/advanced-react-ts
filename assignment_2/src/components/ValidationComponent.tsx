import React, { FC } from "react";

interface InputProps {
    userInput: string;
}

export const Validation: FC<InputProps> = ({ userInput }) => {
    return (
        <div>
            <h2>Validation</h2>
            <p>
                {userInput.length < 5 ? "Text too short" : "Text Long Enough"}
            </p>
        </div>
    );
};
