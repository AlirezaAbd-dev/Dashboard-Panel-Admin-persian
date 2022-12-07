import { Box } from "@mui/material";
import Header from "../../components/Header";

import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="نمودار خطی" subtitle="نمونه ساده نمودار خطی" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
