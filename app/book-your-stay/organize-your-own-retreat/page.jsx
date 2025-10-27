"use client";
import React from 'react';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterFour from '../../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../../src/Components/ScrollToTop';
import Breadcrumb from '../../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';
import OrganizeRetreatForm from '../../../src/Components/Retreat/OrganizeRetreatForm';



export default function OrganizeYourOwnRetreatPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Organise Your Own Retreat" />
      <main className="space-top space-extra-bottom">
        <OrganizeRetreatForm />
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
