import React from "react";

import "./UserOutput.css";

interface UsernameProps {
    username: string;
}

const UserOutput: React.FC<UsernameProps> = ({ username }) => {
    return (
        <div className="UserOutput">
            <h3>UserOutput</h3>
            <h4>{username}</h4>
            <p>Lorem ipsum</p>
        </div>
    );
};

export default UserOutput;
