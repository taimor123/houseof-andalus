"use client";
import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import Link from 'next/link'
import AboutFour from '../Components/About/AboutFour'
import InvolvementSection from '../Components/Engagement/InvolvementSection'
import OfferTwo from '../Components/Offer/OfferTwo'
import ElementSection from '../Components/Elements/ElementSection'
import TourOne from '../Components/Tour/TourOne';
import TourGuideTwo from '../Components/Guide/TourGuideTwo'
import TestimonialOne from '../Components/Testimonials/TestimonialOne'
import BrandOne from '../Components/Brand/BrandOne'
import GalleryFive from '../Components/Gallery/GalleryFive'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About Us"
            />
            <AboutFour />
            <InvolvementSection />
            {/* <OfferTwo /> */}
            
            {/* <TourOne/> */}
            {/* <ElementSection /> */}
            
            {/* <TourGuideTwo />
                <AboutFour />
                {/* <OfferTwo /> */}
            <FooterOne />

            <ScrollToTop />
        </>
    )
}

export default About
