import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileSidenav from "../components/MobileSidenav";
import { useState } from "react";
function Home() {
  const [showSidenav, setShowSidenav] = useState(false);
  return (
    <>
      <div className="app">
        <Header showSidenav={showSidenav} setShowSidenav={setShowSidenav} />
        <Hero />
        <MobileSidenav showSidenav={showSidenav} setShowSidenav={setShowSidenav} />
      </div>
    </>
  );
}

export default Home;
