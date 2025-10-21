"use client";
import React from 'react';
import Link from 'next/link';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Posts from '../data/data-guide.json';

function TourGuiderDetailsMain({ id }) {
    const { ref, inView } = useInView({ triggerOnce: true }); // ✅ Hook moved to the top

    const guidePost = Posts.find(post => post.id === parseInt(id));

    if (!guidePost) {
        return <div>Post not found!</div>;
    }

    const counters = [
        { value: 2, suffix: "K+", title: "Total Guide" },
        { value: 65, suffix: "+", title: "Total Services" },
        { value: 79, suffix: "+", title: "Award Won" },
        { value: 120, suffix: "+", title: "Total Event" }
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="team-details">
                    <div className="row gy-5 mb-3 mb-xl-5 pb-xl-4">
                        <div className="col-xl-4">
                            <div className="th-team team-grid">
                                <div className="team-img">
                                    <img src={`/assets/img/team/${guidePost.thumb}`} alt="Team" />
                                </div>
                                <div className="team-img2">
                                    <img src={`/assets/img/team/${guidePost.bannerImg}`} alt="Team" />
                                </div>
                                <div className="team-content">
                                    <div className="media-body">
                                        <h3 className="box-title">{guidePost.title}</h3>
                                        <span className="team-desig">Tourist Guide</span>
                                        <div className="th-social">
                                            <a target="_blank" href="https://facebook.com/">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a target="_blank" href="https://twitter.com/">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a target="_blank" href="https://linkedin.com/">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                            <a target="_blank" href="https://youtube.com/">
                                                <i className="fab fa-youtube" />
                                            </a>
                                            <a target="_blank" href="https://instagram.com/">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 ps-3 ps-xl-5 pe-xl-4">
                            <div className="team-about">
                                <h2 className="team-about_title">About Me</h2>
                                <p className="team-about_text mb-25">
                                    Venenatis purus egestas lorem aenean enim bibendum. Ac pharetra
                                    egestas eget gravida turpis senectus. Sed blandit ipsum orci odio
                                    egestas egestas sed bibendum. Rhoncus est proin euismod
                                    condimentum eget a tristique integer viverra. Enim sed nunc magna
                                    consequat consectetur vestibulum odio posuere. Mattis nisl aenean
                                    auctor morbi suspendisse diam adipiscing. Tellus egestas amet
                                    tellus phasellus.
                                </p>
                                <p className="team-about_text mb-25">
                                    {" "}
                                    Ornare aliquam ac a pellentesque ante. Morbi maecenas odio integer
                                    adipiscing ridiculus mauris. Ornare in sit et tortor orci massa eu
                                    ultricies. Sit fermentum faucibu.
                                </p>
                                <h5 className="box-title">5 Years of Experiences</h5>
                                <p className="team-about_text mb-25">
                                    {" "}
                                    Venenatis purus egestas lorem aenean enim bibendum. Ac pharetra
                                    egestas eget gravida turpis senectus. Sed blandit ipsum orci odio
                                    egestas egestas sed bibendum. Rhoncus est proin euismod
                                    condimentum eget a tristique integer viverra.
                                </p>
                                <div ref={ref} className="counter-box-wrap">
                                    {counters.map((counter, index) => (
                                        <div key={index} className="counter-box">
                                            <h2 className="counter-box_number">
                                                <CountUp
                                                    start={0}
                                                    end={inView ? counter.value : 0}
                                                    duration={2}
                                                />
                                                {counter.suffix}
                                            </h2>
                                            <span className="counter-box_title">{counter.title}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <h2 className="box-title mb-30">Contact With Me</h2>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-xl-4 col-lg-6">
                            <div className="about-contact-grid style2">
                                <div className="about-contact-icon">
                                    <img src="/assets/img/icon/location-dot2.svg" alt="" />
                                </div>
                                <div className="about-contact-details">
                                    <h6 className="box-title">Our Address</h6>
                                    <p className="about-contact-details-text">
                                        Andalucia, Spain x7792 street
                                    </p>
                                    {/* <p className="about-contact-details-text">
                                        Road, New York, Canada
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="about-contact-grid">
                                <div className="about-contact-icon">
                                    <img src="/assets/img/icon/call.svg" alt="" />
                                </div>
                                <div className="about-contact-details">
                                    <h6 className="box-title">Phone Number</h6>
                                    <p className="about-contact-details-text">
                                        <a href="tel:+34 000 000 000">+34 000 000 000</a>
                                    </p>
                                    {/* <p className="about-contact-details-text">
                                        <a href="tel:01234567890">+09 876 543 210</a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="about-contact-grid">
                                <div className="about-contact-icon">
                                    <img src="/assets/img/icon/mail.svg" alt="" />
                                </div>
                                <div className="about-contact-details">
                                    <h6 className="box-title">Email Address</h6>
                                    <p className="about-contact-details-text">
                                        <a href="mailto:hello@houseofandalus.com">hello@houseofandalus.com</a>
                                    </p>
                                    {/* <p className="about-contact-details-text">
                                        <a href="mailto:support24@tourm.com">support24@tourm.com</a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TourGuiderDetailsMain
