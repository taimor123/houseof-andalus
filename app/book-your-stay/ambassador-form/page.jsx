"use client";
import React from 'react';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterFour from '../../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../../src/Components/ScrollToTop';
import Breadcrumb from '../../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';
import AmbassadorForm from '../../../src/Components/Ambassador/AmbassadorForm';



export default function BookYourStayPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Ambassador" />
      <main className="space-top space-extra-bottom">
        <AmbassadorForm />
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
