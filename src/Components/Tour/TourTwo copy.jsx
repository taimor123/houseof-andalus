"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import Link from 'next/link';

// Retains TourItem for other tabs (Hotel, Transport) if needed; first tab now uses retreat cards from TourOne.
const TourItem = ({ image, title, link, rating, price, duration, bookLink }) => (
    <div className="tour-box th-ani gsap-cursor">
        <div className="tour-box_img global-img">
            <img src={image} alt={title} />
        </div>
        <div className="tour-content">
            <h3 className="box-title">
                <Link href={link}>{title}</Link>
            </h3>
            <div className="tour-rating">
                <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
                    <span style={{ width: `${rating * 20}%` }}>
                        Rated <strong className="rating">{rating}</strong> out of 5
                    </span>
                </div>
                <Link href={link} className="woocommerce-review-link">
                    (<span className="count">{rating}</span> Rating)
                </Link>
            </div>
            <h4 className="tour-box_price">
                <span className="currency">${price}</span>/Person
            </h4>
            <div className="tour-action">
                <span>
                    <i className="fa-light fa-clock" /> {duration} Days
                </span>
                <Link href={bookLink} className="th-btn style4 th-icon">
                    Book Now
                </Link>
            </div>
        </div>
    </div>
);

function TourTwo() {
    const [activeTab, setActiveTab] = useState('nav-step1');

    // Retreat content adapted from TourOne component
    const retreats = [
        {
            key: 'couple',
            title: 'Couple Retreat',
            image: '/assets/img/Home/Most Popular Tour/1 Most Popular Tour Couple Retreat.png',
            description: 'Find balance and connection in Andalusia’s serene embrace.',
            icon: 'fa-heart',
            label: 'Together'
        },
        {
            key: 'writer',
            title: 'Writer Retreat',
            image: '/assets/img/Home/Most Popular Tour/2 Most Popular Tour Writer Retreat.png',
            description: 'Let inspiration awaken where silence meets the soul.',
            icon: 'fa-feather',
            label: 'Inspire'
        },
        {
            key: 'leadership',
            title: 'Leadership Retreat',
            image: '/assets/img/Home/Most Popular Tour/3 Most Popular Tour Leadership Retreat.png',
            description: 'Lead with clarity born from stillness and reflection.',
            icon: 'fa-chess-king',
            label: 'Empower'
        },
        {
            key: 'men',
            title: 'Men Retreat',
            image: '/assets/img/Home/Most Popular Tour/4 Most Popular Tour Men Retreat.png',
            description: 'Renew strength and spirit through brotherhood and faith.',
            icon: 'fa-people-arrows',
            label: 'Strength'
        },
        {
            key: 'women',
            title: 'Women Retreat',
            image: '/assets/img/Home/Most Popular Tour/5 Most Popular Tour Women Retreat.png',
            description: 'Awaken inner grace through calm, care, and reflection.',
            icon: 'fa-dove',
            label: 'Grace'
        },
        {
            key: 'custom',
            title: 'Custom Retreat',
            image: '/assets/img/Home/Most Popular Tour/6 Most Popular Tour Customer Retreat.png',
            description: 'Shape your own path to peace, purpose, and renewal.',
            icon: 'fa-pen-nib',
            label: 'Create'
        }
    ];

    return (
        <section
            className="tour-area3 position-relative bg-top-center overflow-hidden space"
            id="service-sec"
            style={{ backgroundImage: "url('/assets/img/bg/tour_bg_1.jpg", backgroundRepeat:"no-repeat" }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="title-area text-center">
                            <span className="sub-title">Best Experience</span>
                            <h2 className="sec-title">Amazing Travel Experience</h2>
                        </div>
                    </div>
                </div>
                <div className="nav nav-tabs tour-tabs" id="nav-tab" role="tablist">
                    <button
                        className={`nav-link th-btn ${activeTab === 'nav-step1' ? 'active' : ''}`}
                        id="nav-step1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-step1"
                        type="button"
                        onClick={() => setActiveTab('nav-step1')}
                    >
                        <img src="/assets/img/icon/tour_icon_1.svg" alt="" />
                        Tour Package
                    </button>
                    <button
                        className={`nav-link th-btn ${activeTab === 'nav-step2' ? 'active' : ''}`}
                        id="nav-step2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-step2"
                        type="button"
                        onClick={() => setActiveTab('nav-step2')}
                    >
                        <img src="/assets/img/icon/tour_icon_2.svg" alt="" />
                        Hotel
                    </button>
                    <button
                        className={`nav-link th-btn ${activeTab === 'nav-step3' ? 'active' : ''}`}
                        id="nav-step3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-step3"
                        type="button"
                        onClick={() => setActiveTab('nav-step3')}
                    >
                        <img src="/assets/img/icon/tour_icon_3.svg" alt="" />
                        Transport
                    </button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className={`tab-pane fade ${activeTab === 'nav-step1' ? 'show active' : ''}`} id="nav-step1" role="tabpanel">
                        <div className="slider-area tour-slider slider-drag-wrap">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={24}
                                slidesPerView={4}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 3 },
                                    1400: { slidesPerView: 4 },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                className="swiper th-slider has-shadow"
                            >
                                {retreats.map((r) => (
                                    <SwiperSlide key={r.key}>
                                        <div className="tour-box th-ani gsap-cursor">
                                            <div className="tour-box_img global-img">
                                                <img src={r.image} alt={r.title} />
                                            </div>
                                            <div className="tour-content">
                                                <h3 className="box-title">
                                                    <Link href="/tour-details">{r.title}</Link>
                                                </h3>
                                                <p className="tour-description">{r.description}</p>
                                                <div className="tour-action">
                                                    <span>
                                                        <i className={`fa-solid ${r.icon}`} aria-hidden="true" /> {r.label}
                                                    </span>
                                                    <Link href="/contact" className="th-btn style4 th-icon">
                                                        Book Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'nav-step2' ? 'show active' : ''}`} id="nav-step2" role="tabpanel">
                        <div className="slider-area tour-slider slider-drag-wrap">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={24}
                                slidesPerView={4}
                                breakpoints={{
                                    576: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 4 },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                className="swiper th-slider has-shadow"
                            >
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_5.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_6.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_7.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_8.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_9.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_10.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_11.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_12.jpg"
                                        title="The Plaza, New York"
                                        link="/tour-details"
                                        rating={4.8}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                {/* Add more SwiperSlide items here */}
                            </Swiper>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'nav-step3' ? 'show active' : ''}`} id="nav-step3" role="tabpanel">
                        <div className="slider-area tour-slider slider-drag-wrap">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={24}
                                slidesPerView={4}
                                breakpoints={{
                                    576: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 4 },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                className="swiper th-slider has-shadow"
                            >
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_13.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_14.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_15.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_16.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_17.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_18.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_19.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TourItem
                                        image="/assets/img/tour/tour_box_20.jpg"
                                        title="Caravan Trip Package"
                                        link="/tour-details"
                                        rating={5.0}
                                        price={980}
                                        duration={7}
                                        bookLink="/tour-guider-details"
                                    />
                                </SwiperSlide>
                                {/* Add more SwiperSlide items here */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TourTwo;
