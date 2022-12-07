import { Box } from "@mui/material";

import Searchbar from "../../components/topbar/Searchbar";
import IconsSection from "../../components/topbar/IconsSection";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Searchbar />
      <IconsSection />
    </Box>
  );
};

export default Topbar;
