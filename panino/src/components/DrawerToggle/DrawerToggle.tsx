import React, { FC } from 'react';

interface DrawerToggleProps {
    clicked: () => void;
}

const DrawerToggle: FC<DrawerToggleProps> = ({clicked}) => {

    return (
        <div onClick={clicked} >MENU</div>
    )
}

export default DrawerToggle;