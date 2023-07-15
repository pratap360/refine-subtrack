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
import { ColorModeContextProvider } from "./contexts/color-mode";
import Home from "./Home";
import Signup from "./Signup";
import NotFound from "./NotFound";
import authProvider from "./authProvider";
import Dashboard from "pages/dashboard";
import Login from "Login";
import ForgotPwd from "forgotpwd";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";



// subtrack custom theme 
const subtrackTheme = createTheme({
  palette: {
      primary: {
        main: deepPurple[500],
      },
      secondary:{
          main:deepPurple[300], 
      }
    },
    typography:{
      fontFamily:`'Roboto','Jockey One','sans-serif'`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
    },

  });

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
              <ThemeProvider theme={subtrackTheme}>

              {/* home or landing page  */}
              <Routes>
                <Route path="/"index element={<Home/>}/>
              </Routes>

              {/* Sign up page  */}
              <Routes>
              <Route path="/signup" element={<Signup/>} />
              </Routes>
              {/* login page  */}
              <Routes>
              <Route path="/login" element={<Login/>} />
              </Routes>

              {/* forgot pwd page  */}
              <Routes>
              <Route path="/forgotpassword" element={<ForgotPwd/>} />
              </Routes>
       

              {/* Dashboard  */}
              <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
              </Routes>

              {/* 404 not found  */}
              <Routes>
              <Route path="/404NotFound" element={<NotFound/>} />
              </Routes>
              </ThemeProvider>

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
