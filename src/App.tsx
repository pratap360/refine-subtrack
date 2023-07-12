import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { notificationProvider, RefineSnackbarProvider } from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { supabaseClient } from "utility";
import authProvider from "./authProvider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import Home from "./Home";
import Signup from "./Signup";
import NotFound from "./NotFound";


function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider(supabaseClient)}
              liveProvider={liveProvider(supabaseClient)}
              authProvider={authProvider}
              routerProvider={routerBindings}
              notificationProvider={notificationProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                liveMode: "auto",
              }}
            >
              {/* home or landing page  */}
              <Routes>
                <Route path="/"index element={<Home/>}/>
              </Routes>
              {/* Sign up page  */}
              <Routes>
              <Route path="/Signup" element={<Signup/>} />
              </Routes>
              {/* 404 not found  */}
              <Routes>
              <Route path="/404Error-NotFound" element={<NotFound/>} />
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
