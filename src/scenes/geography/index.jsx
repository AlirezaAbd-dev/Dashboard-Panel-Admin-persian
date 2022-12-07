import { Box, colors, useTheme } from "@mui/material";
import Header from "../../components/Header";

import GeoChart from "../../components/GeoChart";
import { tokens } from "../../utils/tokens.js";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="نمودار جغرافیایی" subtitle="نمونه ساده نمودار جغرافیایی" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;
