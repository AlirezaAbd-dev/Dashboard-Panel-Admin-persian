import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import Header from "../Header";
import { tokens } from "../../utils/tokens.js";

const DashboardTitle = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="داشبورد" subtitle="به داشبورد پنل ادمین خوش آمدید" />

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            paddin: "10p 20px",
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          بارگیری گزارشات
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardTitle;
