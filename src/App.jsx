import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Routing from "./containers/Routing";
import ThemeProviderLayout from "./layouts/ThemeProviderLayout";

function App() {

  return (
    <ThemeProviderLayout>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routing />
          </main>
        </div>
    </ThemeProviderLayout>
  );
}

export default App;
