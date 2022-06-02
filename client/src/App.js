import './App.css';
import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar/index'
import LandingPage from './components/landing_page';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <LandingPage/>
    </div>
  );
}

export default App;
