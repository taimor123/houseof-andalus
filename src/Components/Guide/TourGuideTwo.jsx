"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css'; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
function TourGuideTwo() {
  return (
    <section className="team-area3 position-relative bg-top-center space"
    style={{ backgroundImage: "url(/assets/img/bg/team_bg_2.jpg)", backgroundRepeat:"no-repeat", zIndex:"1", paddingBottom: "0" }}>
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">Meet with Guide</span>
          <h2 className="sec-title">Meet with Tour Guide</h2>
        </div>
        <div className="slider-area">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop="true"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: '.slider-prev',
              nextEl: '.slider-next',
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]} // Modules added here
            className="th-slider teamSlider3 has-shadow"
          >
            {/* Single Item */}
            <SwiperSlide>
              <div className="th-team team-grid">
                <div className="team-img">
                  <img src="/assets/img/team/team_img_1.jpg" alt="Team" />
                </div>
                <div className="team-img2">
                  <img src="/assets/img/team/team_1_1.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <Link href="/tour-guide/1">Michel Smith</Link>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a target="_blank" href="https://youtube.com/" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                      <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* More SwiperSlide items here */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="th-team team-grid">
                <div className="team-img">
                  <img src="/assets/img/team/team_img_2.jpg" alt="Team" />
                </div>
                <div className="team-img2">
                  <img src="/assets/img/team/team_1_2.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <Link href="/tour-guide/2">Michel Smith</Link>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a target="_blank" href="https://youtube.com/" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                      <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* More SwiperSlide items here */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="th-team team-grid">
                <div className="team-img">
                  <img src="/assets/img/team/team_img_3.jpg" alt="Team" />
                </div>
                <div className="team-img2">
                  <img src="/assets/img/team/team_1_3.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <Link href="/tour-guide/3">Michel Smith</Link>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a target="_blank" href="https://youtube.com/" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                      <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* More SwiperSlide items here */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="th-team team-grid">
                <div className="team-img">
                  <img src="/assets/img/team/team_img_1.jpg" alt="Team" />
                </div>
                <div className="team-img2">
                  <img src="/assets/img/team/team_1_1.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <Link href="/tour-guide/1">Michel Smith</Link>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a target="_blank" href="https://youtube.com/" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                      <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* More SwiperSlide items here */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="th-team team-grid">
                <div className="team-img">
                  <img src="/assets/img/team/team_img_2.jpg" alt="Team" />
                </div>
                <div className="team-img2">
                  <img src="/assets/img/team/team_1_2.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <Link href="/tour-guide/2">Michel Smith</Link>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a target="_blank" href="https://youtube.com/" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                      <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* More SwiperSlide items here */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="th-team team-grid">
                <div className="team-img">
                  <img src="/assets/img/team/team_img_3.jpg" alt="Team" />
                </div>
                <div className="team-img2">
                  <img src="/assets/img/team/team_1_3.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <Link href="/tour-guide/3">Michel Smith</Link>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a target="_blank" href="https://youtube.com/" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                      <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* More SwiperSlide items here */}
          </Swiper>

          {/* Slider Navigation */}
          <button className="slider-arrow slider-prev">
            <img src="/assets/img/icon/right-arrow2.svg" alt="" />
          </button>
          <button className="slider-arrow slider-next">
            <img src="/assets/img/icon/left-arrow2.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TourGuideTwo;
