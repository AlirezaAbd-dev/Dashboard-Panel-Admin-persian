import { Box, Typography, useTheme } from "@mui/material";
import GeoChart from "../GeoChart";
import { tokens } from "../../utils/tokens.js";

const DashboardGeoChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
    >
      <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
        جغرافیا بر پایه ترافیک
      </Typography>
      <Box height="250px">
        <GeoChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default DashboardGeoChart;
