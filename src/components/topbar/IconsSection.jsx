import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, PersonOutlined, SettingsOutlined } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import {ColorModeContext} from "../../context/context.js";


const IconsSection = () => {

    const theme = useTheme()
    const colorMode= useContext(ColorModeContext)
    return (
        <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    );
}

export default IconsSection;
