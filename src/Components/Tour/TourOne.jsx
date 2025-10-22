"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import Link from 'next/link';

function TourOne() {
  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat"
      id="service-sec"
      // style={{ backgroundImage: 'url(/assets/img/imagi/1920x613/1.jpg)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <span className="sub-title">Best Place For You</span>
              <h2 className="sec-title">Most Popular Retreats</h2>
              <p className="sec-text">
            Find stillness and strength through faith, reflection, and community. At The House of Andalus, every retreat renews body, mind, and heart.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-area tour-slider">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            spaceBetween={24}
            grabCursor={true}
            className="swiper th-slider has-shadow slider-drag-wrap"
          >
<SwiperSlide key="tour1">
  <div className="tour-box th-ani gsap-cursor">
    <div className="tour-box_img global-img">
      <img
        src="/assets/img/Home/Most Popular Tour/1 Most Popular Tour Couple Retreat.png"
        alt="Couple Retreat"
      />
    </div>
    <div className="tour-content">
      <h3 className="box-title">
        <Link href="/tour-details">Couple Retreat</Link>
      </h3>
      <p className="tour-description">
       Find balance and connection in Andalusia’s serene embrace.
      </p>
      {/* <div className="tour-rating">
        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
          <span style={{ width: '100%' }}>
            Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
            <span className="rating">4.8</span> (4.8 Rating)
          </span>
        </div>
        <Link href="/tour-details" className="woocommerce-review-link">
          (<span className="count">4.8</span> Rating)
        </Link>
      </div>
      <h4 className="tour-box_price">
        <span className="currency">$980.00</span>/Person
      </h4> */}
      <div className="tour-action">
        <span>
          <i className="fa-solid fa-heart" aria-hidden="true" /> Together
        </span>
        <Link href="/contact" className="th-btn style4 th-icon">
          Book Now
        </Link>
      </div>
    </div>
  </div>
</SwiperSlide>
            <SwiperSlide key="tour2">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/Home/Most Popular Tour/2 Most Popular Tour Writer Retreat.png" alt="Writer Retreat" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link href="/tour-details">Writer Retreat</Link>
                  </h3>
                  <p className="tour-description">
                    Let inspiration awaken where silence meets the soul.
                    </p>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">$980.00</span>/Person
                  </h4> */}
                  <div className="tour-action">
                    <span>
                      <i className="fa-solid fa-feather" aria-hidden="true" /> Inspire
                    </span>
                    <Link href="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour3">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/Home/Most Popular Tour/3 Most Popular Tour Leadership Retreat.png" alt="Leadership Retreat" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link href="/tour-details">Leadership Retreat</Link>
                  </h3>
                 <p className="tour-description">
                  Lead with clarity born from stillness and reflection.
                  </p>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">$980.00</span>/Person
                  </h4> */}
                  <div className="tour-action">
                    <span>
                      <i className="fa-solid fa-chess-king" aria-hidden="true" /> Empower
                    </span>
                    <Link href="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour4">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/Home/Most Popular Tour/4 Most Popular Tour Men Retreat.png" alt="Men Retreat" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link href="/tour-details">Men Retreat</Link>
                  </h3>
                   <p className="tour-description">
                    Renew strength and spirit through brotherhood and faith.
                    </p>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">$980.00</span>/Person
                  </h4> */}
                  <div className="tour-action">
                    <span>
                      <i className="fa-solid fa-people-arrows"  /> Strength
                    </span>
                    <Link href="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour5">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/Home/Most Popular Tour/5 Most Popular Tour Women Retreat.png" alt="Women Retreat" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link href="/tour-details">Women Retreat</Link>
                  </h3>
                  <p className="tour-description">
                    Awaken inner grace through calm, care, and reflection.
                    </p>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">$980.00</span>/Person
                  </h4> */}
                  <div className="tour-action">
                    <span>
                      <i className="fa-solid fa-dove" aria-hidden="true" /> Grace
                    </span>
                    <Link href="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour6">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/Home/Most Popular Tour/6 Most Popular Tour Customer Retreat.png" alt="Custom Retreat" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link href="/tour-details">Custom Retreat</Link>
                  </h3>
                  <p className="tour-description">
                    Shape your own path to peace, purpose, and renewal.
                    </p>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">$980.00</span>/Person
                  </h4> */}
                  <div className="tour-action">
                    <span>
                      <i className="fa-solid fa-pen-nib" aria-hidden="true" /> Create
                    </span>
                    <Link href="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide key="tour7">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_3.jpg" alt="Dubai Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link href="/tour-details">Dubai Tour Package</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">$980.00</span>/Person
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock" />7 Days
                    </span>
                    <Link href="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour8">
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src="/assets/img/tour/tour_box_4.jpg" alt="Switzerland Tour" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <Link href="/tour-details">Switzerland Tour</Link>
                  </h3>
                  <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">$980.00</span>/Person
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock" />7 Days
                    </span>
                    <Link href="/contact" className="th-btn style4 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TourOne;
