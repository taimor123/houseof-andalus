"use client";
import React, { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link'

function GalleryInner() {
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
        <div className="overflow-hidden space" id="gallery-sec">
            <div className="container-fuild">
                <div className="title-area mb-30 text-center">
                    <span className="sub-title">Explore Us</span>
                    <h2 className="sec-title">A truly exceptional experience</h2>
                </div>
                <div className="row gy-4 gallery-row4">
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 1.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 1.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 1.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 2.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 2.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 2.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 3.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 3.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 3.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 4.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 4.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 4.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 5.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 5.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 5.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 6.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 6.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 6.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 7.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 7.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 7.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="gallery-box style5">
                            <div className="gallery-img global-img">
                                <img src="/assets/img/Gallery2/Gallery 8.png" alt="gallery" />
                                <a
                                    href="/assets/img/Gallery2/Gallery 8.png"
                                    className="icon-btn popup-image"
                                    onClick={(e) => openModal('/assets/img/Gallery2/Gallery 8.png', e)}
                                >
                                    <i className="fal fa-magnifying-glass-plus" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>

    )
}

export default GalleryInner
