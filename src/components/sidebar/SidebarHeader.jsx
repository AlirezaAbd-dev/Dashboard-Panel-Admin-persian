import { MenuOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import {useTheme} from "@mui/material";
import {tokens} from "../../utils/tokens.js";


const SidebarHeader = ({isCollapsed, setIsCollapsed}) => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  ml: "15px",
                }}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  پنل ادمین
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
    );
}

export default SidebarHeader;
