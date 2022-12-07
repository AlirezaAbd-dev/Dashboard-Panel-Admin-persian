import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

import avatar from "../../assets/user.png";
import { tokens } from "../../utils/tokens.js";

const UserProfile = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {!isCollapsed && (
        <Box marginBottom="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={avatar}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{
                m: "10px 0 0 0",
              }}
            >
              علیرضا عابدی
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              داشبورد پنل ادمین
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default UserProfile;
