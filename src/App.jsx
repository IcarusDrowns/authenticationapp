import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import UserProvider from "./contexts/UserProvider";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";
function App() {
  return (
    <Router history={history}>
      <UserProvider>
        <Route path="/" component={MenuBar} />
        <Route path="/profile" component={Profile} />
      </UserProvider>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
