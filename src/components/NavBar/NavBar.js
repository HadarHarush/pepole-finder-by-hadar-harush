import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from "react-router";

const routesMap = ["/", "/favorites"];

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();
  const [currRouteIdx, setCurrRouteIdx] = React.useState(0);

  useEffect(() => {
    if (location.pathname === "/favorites") {
      setCurrRouteIdx(routesMap.findIndex((currRoute) => currRoute === "/favorites"));
    } else {
      setCurrRouteIdx(routesMap.findIndex((currRoute) => currRoute === "/"));
    }
  }, [location.pathname]);

  const navigate = (to) => {
    history.push(to);
    setCurrRouteIdx(routesMap.findIndex((currRoute) => currRoute === to));
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={currRouteIdx}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab onClick={() => navigate("/")} label="Home" />
        <Tab onClick={() => navigate("/favorites")} label="Favorites" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
