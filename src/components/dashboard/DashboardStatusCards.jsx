import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import StatBox from "../StatBox";
import { tokens } from "../../utils/tokens.js";

const DashboardStatusCards = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subtitle="ایمیل های ارسالی"
          progress="0.75"
          increase="+14%"
          icon={
            <Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="431,225"
          subtitle="به فروش رسیده"
          progress="0.5"
          increase="+21%"
          icon={
            <PointOfSale
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="32,441"
          subtitle="کاربران جدید"
          progress="0.30"
          increase="+5%"
          icon={
            <PersonAdd
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="1,324,986"
          subtitle="میزان ترافیک"
          progress="0.80"
          increase="+43%"
          icon={
            <Traffic
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </>
  );
};

export default DashboardStatusCards;
