import React, { ChangeEvent } from "react";

interface UserInputProps {
    username: string;
    changed: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UserInput: React.FC<UserInputProps> = ({ changed, username }) => {

    const inputStyle = {
        border: '2px solid red',
    }
    
    return (
        <div>
            <h3>UserInput</h3>
            <input
                style={inputStyle}
                onChange={changed}
                type="text"
                value={username}
            />
        </div>
    );
};

export default UserInput;
