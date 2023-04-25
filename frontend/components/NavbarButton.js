import React from "react";

import Button from "@mui/material/Button";

const NavbarButton = () => {
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <Button
            color="inherit"
            onClick={handleClick}
        >{`Clicked ${counter} times`}</Button>
    );
};

export default NavbarButton;
