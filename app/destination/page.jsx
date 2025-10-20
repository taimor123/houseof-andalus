import React from "react";
import HeaderOne from "../../src/Components/Header/HeaderOne";
import Breadcrumb from "../../src/Components/BreadCrumb/Breadcrumb";
import DestinationInner from "../../src/Components/Destination/DestinationInner";
import FooterFour from "../../src/Components/Footer/FooterFour";
import ScrollToTop from "../../src/Components/ScrollToTop";

export const metadata = {
  title: "Destination | Tourm",
  description: "Explore all travel destinations",
};

export default function DestinationPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Destination" />
      <DestinationInner />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
