/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Argon Dashboard 2 MUI themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Argon Dashboard 2 MUI routes
import routes from "routes";

// Argon Dashboard 2 MUI contexts
import { useArgonController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

// Icon Fonts
import "assets/css/nucleo-icons.css";
import "assets/css/nucleo-svg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "Home/Components/Main";
import Topbar from "Home/Components/Topbar";
import Carousel from "Home/Components/Carousel";
import Home from "Home/Components/Home";
import Map from "Home/Components/Map";
import Solutions from "Home/Components/Solutions";
import Cards from "Home/Components/Cards";
import Footer from "Home/Components/Footer";
import Login from "Home/Authentication/Login";
import About from "Home/Pages/About";
import Services from "Home/Pages/Services";
import Branches from "Home/Pages/Branches";
import Contact from "Home/Pages/Contact";
import Pickup from "Home/Pages/Pickup";
import { Toaster } from "react-hot-toast";
import OrderPage2 from "layouts/Pages/OrderPage2";



export default function App() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <ArgonBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </ArgonBox>
  );

  const isDashboardRoute = useMemo(() => {
    // Check if the current pathname matches any dashboard routes
    return routes.some((route) => route.route && pathname.startsWith(route.route));
  }, [pathname]);

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={darkSidenav || darkMode ? brand : brandDark}
              brandName=""
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Main/>} />
       <Route exact path='/nav' element={<Topbar/>} />
  
       <Route exact path='/corousel' element={<Carousel/>} />
       <Route exact path='/home' element={<Home/>} />
       <Route exact path='/map' element={<Map/>} />
       <Route exact path='/solution' element={<Solutions/>} />
       <Route exact path='/cards' element={<Cards/>} />
  
       <Route exact path='/footer' element={<Footer/>} />
       <Route exact path='/login' element={<Login/>} />
  
  
       <Route exact path='/about' element={<About/>} />
       <Route exact path='/service' element={<Services/>} />
       <Route exact path='/branches' element={<Branches/>} />
       <Route exact path='/contact' element={<Contact/>} />
       <Route exact path='/pickup' element={<Pickup/>} />
       {/* <Route exact path='/order2' element={<OrderPage2/>} /> */}


      </Routes>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && isDashboardRoute && (
        <ThemeProvider theme={darkMode ? themeDark : theme}>
          <CssBaseline />
          <Sidenav
            color={sidenavColor}
            brand={darkSidenav || darkMode ? brand : brandDark}
            // brandName="Marshal Cargo"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </ThemeProvider>
      )}
      {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
        </Routes>
        <Toaster />

      </ThemeProvider>
    </div>
  );
  
}
