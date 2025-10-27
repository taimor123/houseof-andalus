"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amina Rahman",
    designation: "Retreat Guest",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "A place that beautifully unites spirituality with comfort — until I arrived at House of Andalus. From the first moment, I felt peace in every corner. The devotion to mindful, soulful living is truly inspiring.",
  },
  {
    name: "Omar Khalid",
    designation: "Traveller",
    image: "/assets/img/testimonial/testi_1_2.jpg",
    text: "The house features warm, Andalusian architecture with natural light flowing through calm spaces. Every detail, from the olive wood to the quiet courtyards, reflects harmony and thoughtful design.",
  },
  {
    name: "Layla Hassan",
    designation: "Retreat Participant",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "Olive groves surround the estate, nurturing both heart and mind. The stillness of this place restores the spirit while reminding you of the sacred bond between land, faith, and human connection.",
  },
  {
    name: "Yusuf Ali",
    designation: "Guest",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "A place that beautifully unites spirituality with comfort — until I arrived at House of Andalus. From the first moment, I felt peace in every corner. The devotion to mindful, soulful living is truly inspiring.",
  },
  {
    name: "Fatima Noor",
    designation: "Retreat Guest",
    image: "/assets/img/testimonial/testi_1_2.jpg",
    text: "The house features warm, Andalusian architecture with natural light flowing through calm spaces. Every detail, from the olive wood to the quiet courtyards, reflects harmony and thoughtful design.",
  },
  {
    name: "Ibrahim Khan",
    designation: "Retreat Participant",
    image: "/assets/img/testimonial/testi_1_1.jpg",
    text: "Olive groves surround the estate, nurturing both heart and mind. The stillness of this place restores the spirit while reminding you of the sacred bond between land, faith, and human connection.",
  },
];

function TestimonialOne() {
  return (
    <section className="testi-area overflow-hidden space shape-mockup-wrap" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Clients Say About Us</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            slidesPerGroup={1}
            speed={1200}
            breakpoints={{
              0: { slidesPerView: 1},
              767: { slidesPerView: 2},
              992: { slidesPerView: 2},
              1200: { slidesPerView: 2},
              1400: { slidesPerView: 3},
            }}
            className="testiSlider1 has-shadow"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={item.image} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{item.name}</h3>
                        <span className="testi-card_desig">{item.designation}</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star" />
                      ))}
                    </div>
                  </div>
                  <p className="testi-card_text">{item.text}</p>
                  <div className="testi-card-quote">
                    <img src="/assets/img/icon/testi-quote.svg" alt="img" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-pagination" />
        </div>
      </div>
      <div className="shape-mockup d-none d-xl-block" style={{bottom:"-2%", right:"0%"}}>
        <img src="/assets/img/shape/line2.png" alt="shape" />
      </div>
      <div className="shape-mockup movingX d-none d-xl-block" style={{top:"30%", left:"5%"}}>
        <img src="/assets/img/shape/shape_7.png" alt="shape" />
      </div>
    </section>
  );
}

export default TestimonialOne;
