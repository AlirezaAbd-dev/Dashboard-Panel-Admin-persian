import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../utils/tokens.js";

const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      active={selected === title}
    >
      <Typography variant="h5" sx={{ textAlign: "left" }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default SidebarItem;
