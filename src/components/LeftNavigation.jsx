import { ListItemIcon, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AnimationIcon from "@mui/icons-material/Animation";

export default function () {
  return (
    <MenuList>
      <MenuItem component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        Home
      </MenuItem>
      <MenuItem component={Link} to="transitions">
        <ListItemIcon>
          <AnimationIcon />
        </ListItemIcon>
        Transitions
      </MenuItem>
    </MenuList>
  );
}
