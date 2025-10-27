"use client";
import React from 'react';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterFour from '../../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../../src/Components/ScrollToTop';
import Breadcrumb from '../../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';
import CouplesRetreatForm from '../../../src/Components/Retreat/CouplesRetreatForm';



export default function CouplesRetreatPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Couples Retreat Expression of Interest" />
      <main className="space-top space-extra-bottom">
        <CouplesRetreatForm />
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
