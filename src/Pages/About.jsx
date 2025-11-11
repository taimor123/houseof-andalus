"use client";
import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutFour from '../Components/About/AboutFour'
import OfferTwo from '../Components/Offer/OfferTwo'
import ElementSection from '../Components/Elements/ElementSection'
import TourOne from '../Components/Tour/TourOne';
import TourGuideTwo from '../Components/Guide/TourGuideTwo'
import TestimonialOne from '../Components/Testimonials/TestimonialOne'
import BrandOne from '../Components/Brand/BrandOne'
import GalleryFive from '../Components/Gallery/GalleryFive'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About Us"
            />
            <AboutFour />
            {/* <OfferTwo /> */}
            
            {/* <TourOne/> */}
            {/* <ElementSection /> */}
            
            {/* <TourGuideTwo />
                <AboutFour />
                {/* <OfferTwo /> */}
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default About
