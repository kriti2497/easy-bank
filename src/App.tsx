import "./styles/scss/styles.css";

import Articles from "./components/Articles";
import Body from "./components/Body";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleHamburgerOpen = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <>
      <Header handleOpen={handleHamburgerOpen} openHamburger={openHamburger} />
      <Body openHamburger={openHamburger} />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
