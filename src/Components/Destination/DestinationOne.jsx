"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Link from 'next/link';

const destinations = [
  { id: 1, name: "Retreats", listings: 15, image: "/assets/img/Home/Reserve Your Retreat/1 Reserve Your Retreat 423x636.png" },
  { id: 2, name: "Architecture", listings: 22, image: "/assets/img/Home/Reserve Your Retreat/2 Reserve Your Retreat Architecture.png" },
  { id: 3, name: "History", listings: 25, image: "/assets/img/Home/Reserve Your Retreat/3 Reserve Your Retreat 247x372 History.png" },
  { id: 4, name: "Culture", listings: 28, image: "/assets/img/Home/Reserve Your Retreat/4 Reserve Your Retreat 337x506 Culture.png" },
  { id: 5, name: "Artifacts", listings: 30, image: "/assets/img/Home/Reserve Your Retreat/5 Reserve Your Retreat 337x506 Artifacts.png" },
  { id: 6, name: "Preservation", listings: 15, image: "/assets/img/Home/Reserve Your Retreat/6 Reserve Your Retreat 423x636 Preservation.png" },
  { id: 7, name: "Monastery", listings: 22, image: "/assets/img/Home/Reserve Your Retreat/7 Reserve Your Retreat 337x506 Monastery.png" },
  { id: 8, name: "Symbolism", listings: 25, image: "/assets/img/Home/Reserve Your Retreat/8 Reserve Your Retreat 247x372 Symbolism.png" },
  { id: 9, name: "Antiquity", listings: 28, image: "/assets/img/Home/Reserve Your Retreat/9 Reserve Your Retreat 247x372 Antiquity.png" },
  { id: 10, name: "Landmark", listings: 30, image: "/assets/img/Home/Reserve Your Retreat/10 Reserve Your Retreat 337x506 Landmark.png" },
];

const sliderOptions = {
    modules: [EffectCoverflow],
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "5",
    initialSlide: 0,
    grabCursor: true,
    loop: true, // Change from "true" to true
    speed: 1500,
    coverflowEffect: {
      rotate: 0,
      stretch: 95,
      depth: 212,
      modifier: 1,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    },
  };
  

function DestinationOne() {
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    // Add event listeners for hover effect
    const sliderWrap = document.querySelector(".slider-drag-wrap");
    const sliderLink = document.querySelectorAll(".slider-drag-wrap a");

    const handleMouseEnter = () => setCursorActive(true);
    const handleMouseLeave = () => setCursorActive(false);
    
    if (sliderWrap) {
      sliderWrap.addEventListener("mouseenter", handleMouseEnter);
      sliderWrap.addEventListener("mouseleave", handleMouseLeave);
    }
    
    sliderLink.forEach(link => {
      link.addEventListener("mouseenter", () => setCursorActive(false));
      link.addEventListener("mouseleave", () => setCursorActive(true));
    });

    // Clean up event listeners on component unmount
    return () => {
      if (sliderWrap) {
        sliderWrap.removeEventListener("mouseenter", handleMouseEnter);
        sliderWrap.removeEventListener("mouseleave", handleMouseLeave);
      }
      
      sliderLink.forEach(link => {
        link.removeEventListener("mouseenter", () => setCursorActive(false));
        link.removeEventListener("mouseleave", () => setCursorActive(true));
      });
    };
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">The Andalus Haven</span>
          <h2 className="sec-title">Reserve Your Retreat</h2>
        </div>

        <div className={`slider-drag-wrap ${cursorActive ? 'active' : ''}`}>
          <Swiper {...sliderOptions} className="destination-slider">
            {destinations.map((dest) => (
              <SwiperSlide key={dest.id}>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src={dest.image} alt={dest.name} />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <Link href="/destination/1">{dest.name}</Link>
                        </h4>
                        <span className="destination-subtitle">{dest.listings} Listing</span>
                      </div>
                      <div>
                        <Link href="/book-your-stay" className="th-btn style2 th-icon">
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DestinationOne;
