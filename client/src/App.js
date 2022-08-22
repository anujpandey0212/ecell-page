import "./App.css";
import * as React from "react";
import Homepage from "./components/Homepage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Form1 from "./components/StartupForm/Form";
import Form2 from "./components/VCForm/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Start-up-form" element={<Form1 />} />
          <Route path="/VC-form" element={<Form2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
