import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Exact sin nada sería true, luego sería el path exacto */}
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
