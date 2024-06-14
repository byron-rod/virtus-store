import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HomeScreen />
    </Router>
  );
};

export default App;
