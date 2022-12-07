import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "../ProgressCircle";
import { tokens } from "../../utils/tokens.js";

const DashboardCampaignCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
    >
      <Typography variant="h5" fontWeight="600">
        پویش
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
        <ProgressCircle size="125" />
        <Typography
          variant="h5"
          color={colors.greenAccent[500]}
          sx={{ mt: "15px" }}
        >
          $49,275 درآمد
        </Typography>
        <Typography>شامل گسترش و هزینه های اضافی متفرقه</Typography>
      </Box>
    </Box>
  );
};

export default DashboardCampaignCard;
