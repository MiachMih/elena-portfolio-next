import React, { Fragment } from "react";
import NavEN from "../../components/Nav/NavEN";
import IntroductionEN from "../../components/Introduction/IntroductionEN";
import PurposeEN from "../../components/Purpose/PurposeEN";
import AboutMeEN from "../../components/AboutMe/AboutMeEN";
import MissionEN from "../../components/Mission/MissionEN";
import PricingEN from "../../components/Pricing/PricingEN";
import ReviewsEN from "../../components/Reviews/ReviewsEN";
import FAQEN from "../../components/FAQ/FAQEN";
import MessageMeEN from "../../components/MessageMe/MessageMeEN";
import FooterEN from "../../components/Footer/FooterEN";
import CertificatesEN from "../../components/Certificates/CertificatesEN";

function AppEn() {
  return (
    <Fragment>
      <NavEN />
      <IntroductionEN />
      <PurposeEN />
      <AboutMeEN />
      <MissionEN />
      <CertificatesEN />
      <PricingEN />
      <ReviewsEN />
      <FAQEN />
      <MessageMeEN />
      <FooterEN />
    </Fragment>
  );
}

export default AppEn;
