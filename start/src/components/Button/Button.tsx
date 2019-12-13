import React, { FC } from 'react'

interface MockProps {
    foo: string
    bar: number
    baz: boolean
}

interface ButtonClickProps {
    buttonClick: MockProps[]
}

const Button: FC<ButtonClickProps> = ({ buttonClick }) => {

    const clickHandler = () => {
        console.log(buttonClick);
        
        console.log("clicked!");
    }

    return  (
        <button onClick={clickHandler}>
            Btn Component
        </button>
    )

}

export default Button;