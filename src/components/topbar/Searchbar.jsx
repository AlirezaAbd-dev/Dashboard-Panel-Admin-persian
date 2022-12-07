import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens } from "../../utils/tokens.js";

const Searchbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="جستجو" />
      <IconButton type="button" sx={{ p: 1 }}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default Searchbar;
