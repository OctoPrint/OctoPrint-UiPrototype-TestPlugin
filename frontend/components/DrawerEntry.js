import React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Assistant from "@mui/icons-material/Assistant";

const DrawerEntry = ({children}) => {
    return (
        <ListItemButton>
            <ListItemIcon>
                <Assistant />
            </ListItemIcon>
            <ListItemText primary="Magic!" />
        </ListItemButton>
    );
};

export default DrawerEntry;
