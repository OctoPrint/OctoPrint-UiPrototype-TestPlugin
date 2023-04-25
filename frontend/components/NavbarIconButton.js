import React from "react";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AutoAwesome from "@mui/icons-material/AutoAwesome";

const NavbarIconButton = () => {
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <IconButton color="inherit" onClick={handleClick}>
            <Badge badgeContent={counter} color="error">
                <AutoAwesome />
            </Badge>
        </IconButton>
    );
};

export default NavbarIconButton;
