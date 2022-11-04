import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Introduction from "../../components/Introduction/Introduction";
import Purpose from "../../components/Purpose/Purpose";
import AboutMe from "../../components/AboutMe/AboutMe";
import Mission from "../../components/Mission/Mission";
import Certificates from "../../components/Certificates/Certificates";
import Pricing from "../../components/Pricing/Pricing";
import Reviews from "../../components/Reviews/Reviews";
import FAQ from "../../components/FAQ/FAQ";
import MessageMe from "../../components/MessageMe/MessageMe";
import Footer from "../../components/Footer/Footer";

function AppRu() {
  return (
    <Fragment>
      <Nav />
      <Introduction />
      <Purpose />
      <AboutMe />
      <Mission />
      <Certificates />
      <Pricing />
      <Reviews />
      <FAQ />
      <MessageMe />
      <Footer />
    </Fragment>
  );
}

export default AppRu;
