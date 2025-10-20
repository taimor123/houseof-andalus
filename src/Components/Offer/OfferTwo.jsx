"use client";
import React from 'react'
import Link from 'next/link'

function OfferTwo() {
    return (
        <section
            className="position-relative overflow-hidden space-bottom"
            id="destination-sec"
        >
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Services We Offer</span>
                    <h2 className="sec-title">Our Amazing services</h2>
                </div>
                <div className="row gy-4 gx-4">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_1.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Photo Shoot</Link>
                                </h3>
                                <p className="destination-text">20 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_2.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Tour Guide</Link>
                                </h3>
                                <p className="destination-text">22 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_3.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Cozy Event</Link>
                                </h3>
                                <p className="destination-text">23 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_4.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Interesting Rest</Link>
                                </h3>
                                <p className="destination-text">24 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_5.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Kayaking</Link>
                                </h3>
                                <p className="destination-text">25 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_6.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Safe Flight</Link>
                                </h3>
                                <p className="destination-text">26 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_7.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Entertainment</Link>
                                </h3>
                                <p className="destination-text">27 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="destination-item th-ani">
                            <div className="destination-item_img global-img">
                                <img src="/assets/img/destination/destination_4_8.jpg" alt="" />
                            </div>
                            <div className="destination-content">
                                <h3 className="box-title">
                                    <Link href="/service/1">Delicisious Food</Link>
                                </h3>
                                <p className="destination-text">28 Listing</p>
                                <Link href="/contact" className="th-btn style4 th-icon">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OfferTwo
