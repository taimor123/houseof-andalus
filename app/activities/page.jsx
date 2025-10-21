"use client";
import React from 'react';
import HeaderOne from '../../src/Components/Header/HeaderOne';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import ActivitiesInner from '../../src/Components/Activities/ActivitiesInner';
import FooterFour from '../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../src/Components/ScrollToTop';

export default function ActivitiesPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Activities" />
      <ActivitiesInner />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
