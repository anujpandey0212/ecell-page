import "./App.css";
import * as React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar/index";
import LandingPage from "./components/landing_page";
import WhatIsSection from "./components/what-is-section";
import InformationSection from "./components/Information-section";
import lineRocket from "./assets/line-rocket.png";
import lineMen from "./assets/businessmen.png";

const startupList = [
  "Promotions on social media, newspapers, online blogs etc.",
  "Display stalls for the startup in The Startup Fair event, to be held in IIT Hyderabad campus.",
  "Opportunities to interact with experienced professionals from different fields like venture capitalists, consultancy firms, banks etc.",
  "Sponsorship collaboration opportunities with E-Cell IIT Hyderabad for extra promotion and other benefits.",
  "Other negotiable deliverables.",
];
const investorsList = [
  "Opportunities to interact with all the startups.",
  "Promotions on social media, newspapers, online blogs etc.",
  "Invest in the startup of your own choice, with no upper limit of collaboration.",
  "3 Free passes for the E-Summit event that include KeyNote talk sessions and Powertalks on entrepreneurship by professionals from across the globe and a variety of companies.",
  "Other negotiable deliverables.",
];

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <LandingPage />
      <WhatIsSection />
      <InformationSection
        titlep1="START"
        titlep2="UP"
        image={lineRocket}
        items={startupList}
      />
      <InformationSection
        titlep1="INVEST"
        titlep2="ORS"
        image={lineMen}
        items={investorsList}
      />
    </div>
  );
}

export default App;
