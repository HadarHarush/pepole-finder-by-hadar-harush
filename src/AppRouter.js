import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Favorites from "./pages/Favorites";
import AppNotification from "./components/AppNotifications";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./theme";
import { Home } from "./pages";

const Page = styled.div`
  height: 100%;
  max-height: 100%;
`;

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <AppNotification />
        <Page>
          <Switch>
            <Route path="/favorites" component={Favorites} />
            <Route path="/" component={Home} />
          </Switch>
        </Page>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
