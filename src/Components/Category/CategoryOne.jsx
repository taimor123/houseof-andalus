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
    { id: 1, title: "Couples Retreat", imgSrc: "/assets/img/imagi/312x311/category_1_1.jpg" }, 
    { id: 2, title: "Writers Retreat", imgSrc: "/assets/img/imagi/312x310/category_1_2.jpg" },
    { id: 3, title: "Leadership Retreat", imgSrc: "/assets/img/imagi/313x313/category_1_3.jpg" },
    { id: 4, title: "Men Retreat", imgSrc: "/assets/img/imagi/312x309/category_1_4.jpg" },
    { id: 5, title: "Women Retreat", imgSrc: "/assets/img/imagi/312x311/category_1_1_3.jpg" },
    { id: 6, title: "Custom Retreats", imgSrc: "/assets/img/imagi/312x311/category_1_1_2.jpg" },
    { id: 7, title: "Dhikr Walks", imgSrc: "/assets/img/imagi/312x310/category_1_2_2.jpg" },
    { id: 8, title: "Cooking Class", imgSrc: "/assets/img/imagi/313x313/category_1_3_2.jpg" },
    { id: 9, title: "Harvest", imgSrc: "/assets/img/imagi/312x309/category_1_4_2.jpg" },
    // { id: 10, title: "Harvest", imgSrc: "/assets/img/category/category_1_5.jpg" },
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
      // style={{ backgroundImage: "url(/assets/img/imagi/1920x632/1.jpg)", backgroundRepeat: "no-repeat" }}
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
                <Link className="line-btn" href="/destination">
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
