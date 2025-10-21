"use client";
import React from 'react';
import HeaderOne from '../../src/Components/Header/HeaderOne';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import ActivitiesDetailsMain from '../../src/Components/Activities/ActivitiesDetailsMain';
import FooterFour from '../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../src/Components/ScrollToTop';

export default function ActivitiesDetailsPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Activities Details" />
      <ActivitiesDetailsMain />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
