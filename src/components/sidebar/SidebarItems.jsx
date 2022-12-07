import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

import SidebarItem from "./SidebarItem.jsx";
import { tokens } from "../../utils/tokens.js";

const SidebarItems = ({ isCollapsed, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
      <SidebarItem
        title="داشبورد"
        to="/"
        icon={<HomeOutlined />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography
        variant="h5"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px", textAlign: "left" }}
      >
        داده ها
      </Typography>
      <SidebarItem
        title="تیم مدیریت"
        to="/team"
        icon={<PeopleOutline />}
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarItem
        title="اطلاعات کاربران"
        to="/contacts"
        icon={<ContactsOutlined />}
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarItem
        title="فاکتور ها"
        to="/invoices"
        icon={<ReceiptOutlined />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography
        variant="h5"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px", textAlign: "left" }}
      >
        صفحات
      </Typography>
      <SidebarItem
        title="ساخت کاربر جدید"
        to="/form"
        icon={<PersonOutlined />}
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarItem
        title="سوالات متداول"
        to="/faq"
        icon={<HelpOutlined />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography
        variant="h5"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px", textAlign: "left" }}
      >
        نمودارها
      </Typography>
      <SidebarItem
        title="نمودار عمودی"
        to="/bar"
        icon={<BarChartOutlined />}
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarItem
        title="نمودار دایره ای"
        to="/pie"
        icon={<PieChartOutlined />}
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarItem
        title="نمودار خطی"
        to="/line"
        icon={<TimelineOutlined />}
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarItem
        title="نمودار جغرافیایی"
        to="/geography"
        icon={<MapOutlined />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
};

export default SidebarItems;
