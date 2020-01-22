import React, { FC } from "react";

interface InputCharProps {
    propKey: string | number;
    inputCharacter: string;
    deleteCharacter: (key: string | number) => void;
}

export const Char: FC<InputCharProps> = ({
    propKey,
    inputCharacter,
    deleteCharacter
}) => {
    const style = {
        display: "inline-block",
        textalign: "center",
        border: "1px solid black",
        padding: "16px",
        margin: "16px"
    };

    return (
        <div style={style} onClick={() => deleteCharacter(propKey)}>
            <h3>{inputCharacter}</h3>
        </div>
    );
};
