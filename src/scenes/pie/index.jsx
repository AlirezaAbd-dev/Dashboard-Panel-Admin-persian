import { Box } from "@mui/material";
import Header from "../../components/Header";

import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="نمودار دایره ای" subtitle="نمونه ساده از نمودار دایره ای" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
