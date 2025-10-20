"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

function CategoryThree() {
    const categories = [
        { id: 1, name: "Retreats", image: "/assets/img/category/category_1_1.jpg" },
        { id: 2, name: "Harvest", image: "/assets/img/category/category_1_2.jpg" },
        { id: 3, name: "Heritage", image: "/assets/img/category/category_1_3.jpg" },
        { id: 4, name: "Wellness", image: "/assets/img/category/category_1_4.jpg" },
        { id: 5, name: "Sanctuary", image: "/assets/img/category/category_1_5.jpg" },
        { id: 6, name: "Harmony", image: "/assets/img/category/category_1_1.jpg" },
        { id: 7, name: "Legacy", image: "/assets/img/category/category_1_2.jpg" },
        { id: 8, name: "Serenity", image: "/assets/img/category/category_1_3.jpg" },
        { id: 9, name: "Faith", image: "/assets/img/category/category_1_4.jpg" },
        { id: 10, name: "Journey", image: "/assets/img/category/category_1_5.jpg" },
    ];

    return (
        <section
            className="category-area3 bg-smoke space"
            style={{ backgroundImage: "url(/assets/img/bg/line-pattern3.png)" }}
        >
            <div className="container th-container">
                <div className="title-area text-center">
                    <span className="sub-title">The House of Andalus</span>
                    <h2 className="sec-title">Book Your Stay</h2>
                </div>
                <div className="slider-area">
                    <Swiper
                        modules={[ Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 },
                            1400: { slidesPerView: 5 },
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="th-slider has-shadow category-slider3"
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <div className="category-card single2">
                                    <div className="box-img global-img">
                                        <img src={category.image} alt={category.name} />
                                    </div>
                                    <h3 className="box-title">
                                        <Link href="/destination">{category.name}</Link>
                                    </h3>
                                    <Link className="line-btn" href="/destination">
                                        Explore
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default CategoryThree;
