"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SideMenu from './SideMenu';
import MobileMenu from './MobileMenu';

function HeaderThree() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <header className="th-header header-layout3 header-absolute">
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    {/* Main Menu Area */}
                    <div className="menu-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-xl-block">
                                        <ul>
                                            <li className="menu-item-has-children">
                                                <Link className="active" href="/">
                                                    Home
                                                </Link>
                                                <ul className="mega-menu mega-menu-content">
                                                    <li>
                                                        <div className="container">
                                                            <div className="row gy-4">
                                                                <div className="col-lg-3">
                                                                    <div className="mega-menu-box">
                                                                        <div className="mega-menu-img">
                                                                            <img
                                                                                src="/assets/img/pages/home-travel.jpg"
                                                                                alt="Home One"
                                                                            />
                                                                            <div className="btn-wrap">
                                                                                <Link href="/" className="th-btn">
                                                                                    View Demo
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="mega-menu-title">
                                                                            <Link href="/">
                                                                                <span>01.</span>Home Travel
                                                                            </Link>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="mega-menu-box">
                                                                        <div className="mega-menu-img">
                                                                            <img
                                                                                src="/assets/img/pages/home-tour.jpg"
                                                                                alt="Home Two"
                                                                            />
                                                                            <div className="btn-wrap">
                                                                                <Link href="/home-tour" className="th-btn ">
                                                                                    View Demo
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="mega-menu-title">
                                                                            <Link href="/home-tour">
                                                                                <span>02.</span>Home Tour
                                                                            </Link>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="mega-menu-box">
                                                                        <div className="mega-menu-img">
                                                                            <img
                                                                                src="/assets/img/pages/home-agency.jpg"
                                                                                alt="Home Three"
                                                                            />
                                                                            <div className="btn-wrap">
                                                                                <Link href="/home-agency" className="th-btn ">
                                                                                    View Demo
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="mega-menu-title">
                                                                            <Link href="/home-agency">
                                                                                <span>03.</span>Home Agency
                                                                            </Link>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="mega-menu-box">
                                                                        <div className="mega-menu-img">
                                                                            <img
                                                                                src="/assets/img/pages/home-yacht.jpg"
                                                                                alt="Home Four"
                                                                            />
                                                                            <div className="btn-wrap">
                                                                                <Link href="/home-yacht" className="th-btn ">
                                                                                    View Demo
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="mega-menu-title">
                                                                            <Link href="/home-yacht">
                                                                                <span>04.</span>Home Yacht
                                                                            </Link>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/about">About Us</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">Destination</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/destination">Destination</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/destination/1">Destination Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">Service</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/service">Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/service/1">Service Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link href="/">
                                            <img src="/assets/img/logo-white2.svg" alt="Tourm" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-xl-block">
                                        <ul>
                                            <li className="menu-item-has-children">
                                                <Link href="#">Activities</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/activities">activities</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/activities-details">activities Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <Link href="#">Shop</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link href="/shop">Shop</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/shop/1">Shop Details</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/cart">Cart Page</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/checkout">Checkout</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/wishlist">Wishlist</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href="/gallery">Gallery</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/tour">Our Tour</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/tour-details">Tour Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/resort">Resort page</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/resort/1">Resort Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/tour-details">Tour Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/tour-guide">Tour Guider</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/tour-guide/1">Tour Guider Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/faq">Faq Page</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/price">Price Package</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/error">Error Page</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/blog">Blog</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/1">Blog Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-xl-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                    >
                                        <i className="far fa-bars" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-right-button">
                            <button
                                type="button"
                                className="simple-btn sideMenuToggler"
                                onClick={() => setIsSideMenuOpen(true)}
                            >
                                <img src="/assets/img/icon/menu.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        </>
    )
}

export default HeaderThree
