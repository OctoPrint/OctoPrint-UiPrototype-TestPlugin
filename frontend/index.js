import NavbarButton from "./components/NavbarButton";
import NavbarIcon from "./components/NavbarIcon";
import NavbarIconButton from "./components/NavbarIconButton";
import DrawerEntry from "./components/DrawerEntry";

export default {
    extensionPoints: {
        "Dashboard.Navigation.NavigationBar.Icons": [
            NavbarButton,
            NavbarIcon,
            NavbarIconButton
        ],
        "Dashboard.Navigation.NavigationDrawer.List": [DrawerEntry]
    }
};
