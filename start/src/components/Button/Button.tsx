import React, { FC } from "react";

interface MockProps {
    foo: string;
    bar: number;
    baz: boolean;
}

interface ButtonClickProps {
    buttonClick: MockProps[];
}

const Button: FC<ButtonClickProps> = ({ buttonClick }) => {
    const clickHandler = () => {
        console.log(buttonClick);

        console.log("clicked!");
    };

    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer"
    };

    return (
        <button
            onClick={clickHandler}
            style={style}
        >
            Btn Component
        </button>
    );
};

export default Button;
