"use client";
import React, { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link';

function GalleryOne() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Function to open the modal with the selected image
    const openModal = (imageSrc, event) => {
        event.preventDefault(); // Prevent default link behavior
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="gallery-area">
            <div className="container th-container shape-mockup-wrap">
                <div className="title-area text-center">
                    <span className="sub-title">Make Your Tour More Pleasure</span>
                    <h2 className="sec-title">Recent Gallery</h2>
                </div>
                <div className="row gy-10 gx-10 justify-content-center align-items-center">
                    <div className="col-md-6 col-lg-2">
                        <div className="gallery-card">
                            <div className="box-img global-img">
                                <Link
                                    href="/assets/img/imagi/Gallery/742x696.png"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x696.png', e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                </Link>
                                <img
                                    src="/assets/img/imagi/Gallery/742x696.png"
                                    alt="gallery"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x696.png', e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="gallery-card">
                            <div className="box-img global-img">
                                <Link
                                    href="/assets/img/imagi/Gallery/743x575.png"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/743x575.png', e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                </Link>
                                <img
                                    src="/assets/img/imagi/Gallery/743x575.png"
                                    alt="gallery"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/743x575.png', e)}
                                />
                            </div>
                        </div>
                        <div className="gallery-card">
                            <div className="box-img global-img">
                                <Link
                                    href="/assets/img/imagi/Gallery/743x575a.png"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/743x575a.png', e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                </Link>
                                <img
                                    src="/assets/img/imagi/Gallery/743x575a.png"
                                    alt="gallery"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/743x575a.png', e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="gallery-card">
                            <div className="box-img global-img">
                                <Link
                                    href="public/assets/img/imagi/Gallery/743x1200.png"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/743x1200.png', e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                </Link>
                                <img
                                    src="/assets/img/imagi/Gallery/743x1200.png"
                                    alt="gallery"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/743x1200.png', e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="gallery-card">
                            <div className="box-img global-img">
                                <Link
                                    href="/assets/img/imagi/Gallery/742x575.png"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x575.png', e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                </Link>
                                <img
                                    src="/assets/img/imagi/Gallery/742x575.png"
                                    alt="gallery"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x575.png', e)}
                                />
                            </div>
                        </div>
                        <div className="gallery-card">
                            <div className="box-img global-img">
                                <Link
                                    href="/assets/img/imagi/Gallery/742x575a.png"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x575a.png', e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                </Link>
                                <img
                                    src="/assets/img/imagi/Gallery/742x575a.png"
                                    alt="gallery"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x575a.png', e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="gallery-card">
                            <div className="box-img global-img">
                                <Link
                                    href="public/assets/img/imagi/Gallery/742x696a.png"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x696a.png', e)}
                                >
                                    <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div>
                                </Link>
                                <img
                                    src="/assets/img/imagi/Gallery/742x696a.png"
                                    alt="gallery"
                                    onClick={(e) => openModal('/assets/img/imagi/Gallery/742x696a.png', e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-mockup d-none d-xl-block"
                    style={{
                        top: "-25%",
                        left: "0%",
                    }}
                >
                    <img src="/assets/img/shape/line.png" alt="shape" />
                </div>
                <div className="shape-mockup movingX d-none d-xl-block"
                    style={{
                        top: "30%",
                        left: "-3%",
                    }}
                >
                    <img className="gmovingX" src="/assets/img/shape/shape_4.png" alt="shape" />
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>
    );
}

export default GalleryOne;
