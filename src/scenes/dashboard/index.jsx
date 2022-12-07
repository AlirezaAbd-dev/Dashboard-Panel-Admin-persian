import { Box } from "@mui/material";

import DashboardTitle from "../../components/dashboard/DashboardTitle";
import DashboardStatusCards from "../../components/dashboard/DashboardStatusCards";
import DashboardLineChart from "../../components/dashboard/DashboardLineChart";
import DashboardTransactions from "../../components/dashboard/DashboardTransactions";
import DashboardCampaignCard from "../../components/dashboard/DashboardCampaignCard";
import DashboardBarChart from "../../components/dashboard/DashboardBarChart";
import DashboardGeoChart from "../../components/dashboard/DashboardGeoChart";

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* TITLE */}
      <DashboardTitle />

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <DashboardStatusCards />

        <DashboardLineChart />

        <DashboardTransactions />

        <DashboardCampaignCard />

        <DashboardBarChart />

        <DashboardGeoChart />
      </Box>
    </Box>
  );
};

export default Dashboard;
