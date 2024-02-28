import "./styles/scss/styles.css";

import Body from "./components/Body";
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
    </>
  );
}

export default App;
