"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Posts from '../data/data-destination.json';
import Modal from '../Gallery/Modal';

function DestinationDetailsMain({ id }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const numericId = parseInt(id, 10);
    const destinationPost = Posts.find(post => post.id === numericId);

    if (!destinationPost) {
        return <div>Post not found!</div>;
    }

    const openModal = (imageSrc, event) => {
        event.preventDefault();
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);
    return (
        <section className="space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="page-single">
                            <div className="service-img">
                                <img src={`/assets/img/destination/${destinationPost.bannerImg}`} alt="" />
                            </div>
                            <div className="page-content d-block">
                                <div className="page-meta mt-50 mb-45">
                                    <Link className="page-tag mr-5" href="/tour">Featured</Link>
                                    <span className="ratting">
                                        <i className="fa-sharp fa-solid fa-star" />
                                        <span>4.8</span>
                                    </span>
                                </div>
                                <h2 className="box-title">
                                    Explore the Beauty of Maldives and enjoy
                                </h2>
                                <p className="blog-text mb-30">
                                    voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo. Dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem. Quis autem vel eum iure reprehenderit qui in ea
                                    voluptate velit esse quam nihil molestiae consequatur, vel illum
                                    qui dolorem eum fugiat quo voluptas nulla pariatur Quis autem vel
                                    eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                    molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                    voluptas nulla pariatur
                                </p>
                                <p className="blog-text mb-35">
                                    {" "}
                                    ‍Whether you work from home or commute to a nearby office, the
                                    energy-efficient features of your home contribute to a productive
                                    and eco-conscious workday. Smart home systems allow you to monitor
                                    and control energy usage, ensuring that your environmental impact
                                    remains minimal.
                                </p>
                                <h2 className="box-title">Basic Information</h2>
                                <p className="blog-text mb-35">
                                    voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo. Dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci.
                                </p>
                                <div className="destination-checklist">
                                    <div className="checklist style2">
                                        <ul>
                                            <li>Destination</li>
                                            <li>Visa Requirements</li>
                                            <li>Language</li>
                                            <li>Currency Used</li>
                                            <li>Area (km2)</li>
                                            <li>Destination</li>
                                            <li>Per Person</li>
                                        </ul>
                                    </div>
                                    <div className="checklist style2">
                                        <ul>
                                            <li>Netherlands</li>
                                            <li>On Arrival Visa</li>
                                            <li>English</li>
                                            <li>Euro</li>
                                            <li>25,859km2</li>
                                            <li>25 Tour Places</li>
                                            <li>{destinationPost.price}</li>
                                        </ul>
                                    </div>
                                </div>
                                <blockquote>
                                    <p>
                                        Join your neighbors for an eco-friendly social gathering as the
                                        day comes to a conclusion. Savor refreshments made with
                                        sustainable ingredients and have discussions on sustainable
                                        life. By fostering a sense of community.
                                    </p>
                                    <cite>Michel Clarck</cite>
                                </blockquote>
                                <p className="blog-text mb-35">
                                    Dinning: Prepare a dinner using fresh ingredients from your own
                                    garden or the local CSA program. The energy-efficient appliances
                                    in your kitchen make cooking a breeze while minimizing your
                                    overall energy consumption. Share a meal with neighbors, The quiet
                                    night offers a peaceful ambiance, reinforcing the community's
                                    commitment to a sustainable, low-impact lifestyle.
                                </p>
                                <p className="blog-text mb-35">
                                    Living sustainably at Realar Residence is more than a choice; it's
                                    an immersive experience that shapes every moment of your day. From
                                    the moment you wake up in your solar-powered home to the evening
                                    gatherings with like-minded neighbors
                                </p>
                                <h3 className="">
                                    The sustainable traveller These 6 hotels epitomise ethical luxury
                                </h3>
                                <p className="mb-35">
                                    {" "}
                                    ‍Whether you work from home or commute to a nearby office, the
                                    energy-efficient features of your home contribute to a productive
                                    and eco-conscious workday. Smart home systems allow you to monitor
                                    and control energy usage, ensuring that your environmental impact
                                    remains minimal.
                                </p>
                                <div className="service-inner-img mb-40">
                                    <img
                                        src="/assets/img/destination/destination-inner-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <h2 className="box-title">Highlights</h2>
                                <div className="checklist">
                                    <ul>
                                        <li>Visit most popular location of Maldives</li>
                                        <li>Buffet Breakfast for all traveler with good quality.</li>
                                        <li>Expert guide always guide you and give informations.</li>
                                        <li>Best Hotel for all also great food.</li>
                                        <li>Helping all traveler for Money Exchange.</li>
                                        <li>Buffet Breakfast for all traveler with good quality..</li>
                                        <li>Buffet Breakfast for all traveler with good quality.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="destination-gallery-wrapper">
                                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                                <div className="row gy-4 gallery-row filter-active">
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_1.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_1.jpg', e)}
                                                />
                                                <a
                                                    href="/assets/img/gallery/gallery_6_1.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_1.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_2.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_2.jpg', e)}
                                                />
                                                <a
                                                    href="/assets/img/gallery/gallery_6_2.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_2.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_3.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_3.jpg', e)}
                                                />
                                                <a
                                                    href="/assets/img/gallery/gallery_6_3.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_3.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_4.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_4.jpg', e)}
                                                />
                                                <a
                                                    href="/assets/img/gallery/gallery_6_4.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_4.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="th-comments-wrap style2 ">
                                <h2 className="blog-inner-title h4">Reviews (3)</h2>
                                <ul className="comment-list">
                                    <li className="th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <img
                                                    src="/assets/img/blog/comment-author-1.jpg"
                                                    alt="Comment Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <h3 className="name">Adam Jhon</h3>
                                                <div className="commented-wrapp">
                                                    <span className="commented-on">20 Jun, 2024</span>
                                                    <span className="commented-time">08:56pm </span>
                                                    <span className="comment-review">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                    </span>
                                                </div>
                                                <p className="text">
                                                    Credibly pontificate transparent quality vectors with
                                                    quality mindshare. Efficiently architect worldwide
                                                    strategic theme areas after user.
                                                </p>
                                                <div className="reply_and_edit">
                                                    <i className="fa-solid fa-thumbs-up" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="children">
                                            <li className="th-comment-item">
                                                <div className="th-post-comment">
                                                    <div className="comment-avater">
                                                        <img
                                                            src="/assets/img/blog/comment-author-4.jpg"
                                                            alt="Comment Author"
                                                        />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="">
                                                            <h3 className="name">Maria Willson</h3>
                                                            <div className="commented-wrapp">
                                                                <span className="commented-on">23 Jun, 2024</span>
                                                                <span className="commented-time">08:56pm </span>
                                                                <span className="comment-review">
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p className="text">
                                                            It is different from airport transfer or port
                                                            transfer, which are services that pick you up
                                                        </p>
                                                        <div className="reply_and_edit">
                                                            <i className="fa-solid fa-thumbs-up" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <img
                                                    src="/assets/img/blog/comment-author-5.jpg"
                                                    alt="Comment Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <div className="">
                                                    <h3 className="name">Michel Edwards</h3>
                                                    <div className="commented-wrapp">
                                                        <span className="commented-on">27 Jun, 2024</span>
                                                        <span className="commented-time">08:56pm </span>
                                                        <span className="comment-review">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text">
                                                    Credibly pontificate transparent quality vectors with
                                                    quality mindshare. Efficiently architect worldwide
                                                    strategic theme areas after user.
                                                </p>
                                                <div className="reply_and_edit">
                                                    <i className="fa-solid fa-thumbs-up" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>{" "}
                            {/* Comment end */} {/* Comment Form */}
                            <div className="th-comment-form ">
                                <div className="row">
                                    <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                                    <p className="mb-25">
                                        Your email address will not be published. Required fields are
                                        marked
                                    </p>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Full Name*"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-user" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email*"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-envelope" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input
                                            type="text"
                                            placeholder="Website"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-globe" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Comment*"
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                        <i className="far fa-pencil" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html">
                                            Save my name, email, and website in this browser for the next
                                            time I comment.
                                        </label>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="th-btn">
                                            Send Message
                                            <img src="/assets/img/icon/plane2.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area style3">
                            <div className="widget widget_search  ">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="far fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Categories</h3>
                                <ul>
                                    <li>
                                        <Link href="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            City Tour
                                        </Link>
                                        <span>(8)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Beach Tours
                                        </Link>
                                        <span>(6)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Wildlife Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            News &amp; Tips
                                        </Link>
                                        <span>(7)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Adventure Tours
                                        </Link>
                                        <span>(9)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Mountain Tours
                                        </Link>
                                        <span>(10)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link href="/blog/1">
                                                <img src="/assets/img/blog/recent-post-1-1.jpg" alt="Blog" />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" href="/blog/1">
                                                    Exploring The Green Spaces Of the island maldives
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link href="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    22/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link href="/blog/1">
                                                <img src="/assets/img/blog/recent-post-1-2.jpg" alt="Blog" />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" href="/blog/1">
                                                    Harmony With Nature Of Belgium Tour and travle
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link href="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    25/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link href="/blog/1">
                                                <img src="/assets/img/blog/recent-post-1-3.jpg" alt="Blog" />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" href="/blog/1">
                                                    Exploring The Green Spaces Of Realar Residence
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link href="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    27/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link href="/blog">Tour</Link>
                                    <Link href="/blog">Adventure</Link>
                                    <Link href="/blog">Rent</Link>
                                    <Link href="/blog">Innovate</Link>
                                    <Link href="/blog">Hotel</Link>
                                    <Link href="/blog">Modern</Link>
                                    <Link href="/blog">Luxury</Link>
                                    <Link href="/blog">Travel</Link>
                                </div>
                            </div>
                            <div
                                className="widget widget_offer" style={{ background: 'url(/assets/img/bg/widget_bg_1.jpg)', backgroundRepeat: "no-repeat", backgroundSize:"cover" }}
                            >
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="Tourm" />
                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">You Get Online support</h6>
                                            <a className="offter-num" href="tel:+256214203215">+256 214 203 215</a>
                                        </div>
                                        <Link href="/contact" className="th-btn style2 th-icon">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </section>
    )
}

export default DestinationDetailsMain
