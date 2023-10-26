import React from "react";


import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import Republic from "./components/Republic";
import Headline from "./components/Headline";

const App = () => {
  return (
    <Router>
      <Republic />
      <Headline />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
