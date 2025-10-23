"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';

function useModalAccessibility() {
  useEffect(() => {
    const appElem = document.getElementById('__next') || document.body;
    if (appElem) {
      Modal.setAppElement(appElem);
    }
  }, []);
}

function RegisterInterestSection() {
  useModalAccessibility();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="space-extra2-top space-extra2-bottom"
      // Dummy background image for preview (replace with production asset later)
      style={{
        background: 'url(https://placehold.co/1920x1080?text=Andalus+Retreat+Background)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="row flex-row-reverse justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="video-box1">
              <button
                className="play-btn style2 popup-video"
                onClick={() => setModalIsOpen(true)}
                aria-label="Play Intro Video"
              >
                <i className="fa-sharp fa-solid fa-play" />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="contact-form style2 ajax-contact" onSubmit={handleSubmit}>
              <h3 className="sec-title mb-30 text-capitalize">Register Your Interest</h3>
              <p className="mb-30 sec-text">
                Simply complete the form below and register your interest. We will be in touch to discuss payment and associated details immediately.
              </p>
              <div className="row">
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                  <img src="/assets/img/icon/user.svg" alt="" />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                  <img src="/assets/img/icon/user.svg" alt="" />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <img src="/assets/img/icon/mail.svg" alt="" />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <img src="/assets/img/icon/call.svg" alt="" />
                </div>
                <div className="form-group col-12">
                  <textarea
                    name="message"
                    cols={30}
                    rows={4}
                    className="form-control"
                    placeholder="Type Here..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  <img src="/assets/img/icon/chat.svg" alt="" />
                </div>
                <div className="form-btn col-12 mt-24">
                  <button type="submit" className="th-btn style3">
                    Submit Interest
                    <img src="/assets/img/icon/plane.svg" alt="" />
                  </button>
                </div>
              </div>
              {submitted && (
                <p className="form-messages mb-0 mt-3 text-success">
                  Thank you! We'll reach out shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video Popup"
        className="video-modal"
        overlayClassName="video-modal-overlay"
      >
        <button className="close-btn" onClick={() => setModalIsOpen(false)} aria-label="Close Video">&times;</button>
        {/* Local MP4 video instead of YouTube iframe */}
        <video
          className="w-100"
          controls
          playsInline
          poster="/assets/img/blog/blog_inner_1.jpg"
          aria-label="Register Interest Intro Video"
        >
          <source src="/assets/img/House%20of%20Andalus%20video%202.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  );
}

export default RegisterInterestSection;
