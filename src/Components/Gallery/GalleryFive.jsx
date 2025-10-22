"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Modal from "./Modal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function GalleryFive() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (imageSrc, event) => {
        event.preventDefault();
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="sidebar-gallery-area space">
            <div className="container-fluid">
                <div className="slider-area">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        centeredSlides={true}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 },
                            1300: { slidesPerView: 4 },
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="th-slider has-shadow"
                    >
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 4.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 4.png', e)}
                                />
                                <a href="/assets/img/About us/About 4.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 4.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 5.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 5.png', e)}
                                />
                                <a href="/assets/img/About us/About 5.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 5.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 6.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 6.png', e)}
                                />
                                <a href="/assets/img/About us/About 6.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 6.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 7.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 7.png', e)}
                                />
                                <a href="/assets/img/About us/About 7.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 7.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 8.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 8.png', e)}
                                />
                                <a href="/assets/img/About us/About 8.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 8.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 9.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 9.png', e)}
                                />
                                <a href="/assets/img/About us/About 9.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 9.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 10.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 10.png', e)}
                                />
                                <a href="/assets/img/About us/About 10.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 10.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 11.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 11.png', e)}
                                />
                                <a href="/assets/img/About us/About 11.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 11.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 12.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 12.png', e)}
                                />
                                <a href="/assets/img/About us/About 12.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 12.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 13.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 13.png', e)}
                                />
                                <a href="/assets/img/About us/About 13.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 13.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div className="gallery-thumb style2 global-img">
                                <img
                                    src="/assets/img/About us/About 14.png"
                                    alt="Gallery"
                                    onClick={(e) => openModal('/assets/img/About us/About 14.png', e)}
                                />
                                <a href="/assets/img/About us/About 14.png"
                                    className="gallery-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/About us/About 14.png', e)}
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>
    );
}

export default GalleryFive;
