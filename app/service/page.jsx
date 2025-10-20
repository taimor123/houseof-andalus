import React from "react";
import HeaderOne from "../../src/Components/Header/HeaderOne";
import Breadcrumb from "../../src/Components/BreadCrumb/Breadcrumb";
import ServiceInner from "../../src/Components/Services/ServiceInner";
import TourTwo from "../../src/Components/Tour/TourTwo";
import PricingPlan from "../../src/Components/Services/PricingPlan";
import FooterFour from "../../src/Components/Footer/FooterFour";
import ScrollToTop from "../../src/Components/ScrollToTop";

export const metadata = {
  title: "Services | Tourm",
  description: "Discover the range of travel services we offer",
};

export default function ServicePage() {
  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Services" />
      <ServiceInner />
      <TourTwo />
      <PricingPlan className="space-bottom" />
      <FooterFour />
      <ScrollToTop />
    </div>
  );
}
