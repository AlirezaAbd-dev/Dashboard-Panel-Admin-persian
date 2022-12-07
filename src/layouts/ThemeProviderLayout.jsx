import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { ThemeProvider } from "@mui/material";
import { useMode } from "../theme";
import { ColorModeContext } from "../context/context";

const ThemeProviderLayout = ({ children }) => {
  const [theme, colorMode] = useMode();

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={colorMode}>
          {children}
        </ColorModeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProviderLayout;
