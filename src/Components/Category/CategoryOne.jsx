"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';

const CategoryOne = () => {
  const swiperRef = useRef(null);

  const categories = [
    { id: 1, title: "Heritage Harvest", imgSrc: "/assets/img/Home/Book your stay/1 Book Your Stay 312x311 (1) Current farmhouse.png" }, 
    { id: 2, title: "Al Andalus Pathways", imgSrc: "/assets/img/Home/Book your stay/2 Book Your Stay 313x313 (2) Envisaged Retreat centre.png" },
    { id: 3, title: "Leadership Journeys", imgSrc: "/assets/img/Home/Book your stay/3 Book Your Stay 312x310 (1) Andalucian tours.png" },
    { id: 4, title: "Sacred Land", imgSrc: "/assets/img/Home/Book your stay/4 Book Your Stay 312x310 (2) Retreat Inside.png" },
    { id: 5, title: "The House and Its History ", imgSrc: "/assets/img/Home/Book your stay/5 Book Your Stay 312x311 (2) Andalucian tours.png" }, 
    { id: 6, title: "Culture and Society", imgSrc: "/assets/img/Home/Book your stay/6 Book Your Stay 312x311 (3) Andalucian tours.png" }, 
    { id: 7, title: "Art and Architecture", imgSrc: "/assets/img/Home/Book your stay/7 Book Your Stay 312x309 (1) Andalucian farm.png" },
    // { id: 8, title: "Andalus Echoes", imgSrc: "/assets/img/Home/Book your stay/8 Book Your Stay 312x309 (2) Hill side.png" },
    // { id: 9, title: "Harvest", imgSrc: "/assets/img/Home/Book your stay/9 Book Your Stay 312x311 (4) Hill side.png" },
    // { id: 10, title: "Holiday Home", imgSrc: "/assets/img/Home/Book your stay/10 Book Your Stay 313x313 (1) Andalucian tours.png" },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    // ✅ Start autoplay properly
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
    // ✅ Custom pagination with numbers
    if (swiperInstance.pagination) {
      swiperInstance.pagination.renderBullet = function (index, className) {
        let formattedNumber = index + 1 < 10 ? "0" + (index + 1) : index + 1;
        return `<span class="${className} number">${formattedNumber}</span>`;
      };
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
    // ✅ Custom wheel effect for category slider
    const multiplier = {
      translate: 0.1,
      rotate: 0.01,
    };

    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };

    raf();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="category-area bg-top-center"
      style={{ backgroundImage: "url(/assets/img/Home/Book your stay/Book Your Stay Background Pic.png)", backgroundRepeat: "no-repeat" }}
    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">The House of Andalus</span>
          <h2 className="sec-title">Book Your Stay</h2>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5 },
          }}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets"
          }} // ✅ Defined renderBullet inside pagination
          className="th-slider has-shadow categorySlider"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category.imgSrc} alt={category.title} loading="lazy" />
                </div>
                <h3 className="box-title">
                  <Link href="/destination">{category.title}</Link>
                </h3>
                <Link className="line-btn" href="/the-house">
                  See more
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controller w-100 justify-content-center">
            <div className="swiper-pagination" style={{maxWidth:"100%"}}></div>
          </div>
        </Swiper>

      </div>
    </section>
  );
};

export default CategoryOne;
