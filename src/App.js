import React from "react";

import Routing from "../src/routing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Routing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
