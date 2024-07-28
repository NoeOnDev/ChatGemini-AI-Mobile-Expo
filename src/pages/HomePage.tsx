import React from "react";
import Header from "../components/organism/Header";
import logoDark from "../assets/logo_dark.svg";
import logoLight from "../assets/logo_light.svg";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header
        siteName="World community"
        logoDarkSrc={logoDark}
        logoLightSrc={logoLight}
        logoAlt="World community"
      />
      <div></div>
    </div>
  );
};

export default HomePage;
