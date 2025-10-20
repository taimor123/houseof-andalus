"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Posts from '../data/data-shop.json';
import RelatedProduct from './RelatedProduct';

function ShopDetailsMain({ id }) {
    const [activeTab, setActiveTab] = useState('tab-desc'); // Default active tab
    const numericId = parseInt(id, 10);
    const shopPost = Posts.find(post => post.id === numericId);

    if (!shopPost) {
        return <div>Post not found!</div>;
    }

    return (
        <section className="product-details space-top space-extra-bottom">
            <div className="container">
                <div className="row gx-60">
                    <div className="col-lg-6">
                        <div className="product-big-img">
                            <div className="img">
                                <img
                                    src={`/assets/img/product/${shopPost.bannerImg}`}
                                    alt="Product"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="product-about">
                            <p className="price">{shopPost.price}</p>
                            <h2 className="product-title">{shopPost.title}</h2>
                            <div className="product-rating">
                                <div
                                    className="star-rating"
                                    role="img"
                                    aria-label="Rated 5.00 out of 5"
                                >
                                    <span style={{ width: "100%" }}>
                                        Rated <strong className="rating">5.00</strong> out of 5 based on{" "}
                                        <span className="rating">1</span> customer rating
                                    </span>
                                </div>
                                <Link href="/shop-details" className="woocommerce-review-link">
                                    (<span className="count">4</span> customer reviews)
                                </Link>
                            </div>
                            <p className="text">
                                Bluetooth headphones are a popular choice for many people due to
                                their convenience and wireless capabilities. They allow users to
                                listen to music, podcasts, or make calls without being tethered to
                                their device.
                            </p>
                            <div className="mt-2 link-inherit">
                                <p>
                                    <strong className="text-title me-3">Availability:</strong>
                                    <span className="stock in-stock">
                                        <i className="far fa-check-square me-2 ms-1" />
                                        In Stock
                                    </span>
                                </p>
                            </div>
                            <div className="actions">
                                <div className="quantity">
                                    <input
                                        type="number"
                                        className="qty-input"
                                        step={1}
                                        min={1}
                                        max={100}
                                        name="quantity"
                                        defaultValue={1}
                                        title="Qty"
                                    />
                                    <button className="quantity-plus qty-btn">
                                        <i className="far fa-chevron-up" />
                                    </button>
                                    <button className="quantity-minus qty-btn">
                                        <i className="far fa-chevron-down" />
                                    </button>
                                </div>
                                <button className="th-btn">Add to Cart</button>
                                <Link href="/wishlist" className="icon-btn">
                                    <i className="far fa-heart" />
                                </Link>
                            </div>
                            <div className="product_meta">
                                <span className="sku_wrapper">
                                    SKU: <span className="sku">BH-1001-BT</span>
                                </span>
                                <span className="posted_in">
                                    Category: <Link href="/shop">sports, gaming, music listening</Link>
                                </span>
                                <span>
                                    Tags: <Link href="/shop">Wireless</Link>
                                    <Link href="/shop">Sports</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <ul className="nav product-tab-style2" id="productTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            id="description-tab"
                            data-bs-toggle="tab"
                            href="#description"
                            role="tab"
                            aria-controls="description"
                            aria-selected={activeTab === 'tab-desc' ? 'true' : 'false'}
                            className={`nav-link ${activeTab === 'tab-desc' ? 'active' : ''}`}
                            type="button"
                            onClick={() => setActiveTab('tab-desc')}
                        >
                            Description
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'tab-additional' ? 'active' : ''}`}
                            id="additional-tab"
                            href="#additional"
                            role="tab"
                            aria-controls="additional"
                            aria-selected={activeTab === 'tab-additional' ? 'true' : 'false'}
                            onClick={() => setActiveTab('tab-additional')}
                        >
                            Additional Information
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'tab-reviews' ? 'active' : ''}`}
                            id="reviews-tab"
                            href="#reviews"
                            role="tab"
                            aria-controls="reviews"
                            aria-selected={activeTab === 'tab-reviews' ? 'true' : 'false'}
                            onClick={() => setActiveTab('tab-reviews')}
                        >
                            Customer Reviews
                        </a>
                    </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content" id="productTabContent">
                    <div
                        className={`tab-pane fade ${activeTab === 'tab-desc' ? 'show active' : ''}`}
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                    >
                        <p>
                            Bluetooth headphones are a wireless audio accessory that connects to
                            your devices, like smartphones, tablets, or computers, via Bluetooth
                            technology. Here's a typical description Introducing our [Brand Name]
                            Bluetooth Headphones, the ultimate companion for your on-the-go audio
                            experience. Immerse yourself in high-fidelity sound without the hassle
                            of wires, thanks to the latest Bluetooth technology Featuring [insert
                            standout features such as noise cancellation, long battery life,
                            etc.], our headphones deliver crystal-clear audio while providing
                            unmatched comfort during extended listening sessions. Designed for
                            convenience and portability, our sleek and lightweight headphones fold
                            easily for storage and travel. The adjustable headband ensures a
                            secure and comfortable fit for all head shapes and sizes.
                        </p>
                    </div>

                    <div
                        className={`tab-pane fade ${activeTab === 'tab-additional' ? 'show active' : ''}`}
                        id="additional"
                        role="tabpanel"
                        aria-labelledby="additional-tab"
                    >
                        <p>
                            Advanced Bluetooth Connectivity: Our headphones utilize the latest
                            Bluetooth technology for seamless pairing with your devices and
                            reliable wireless connectivity up to 30 feet away. Long-lasting
                            Battery Life: Enjoy hours of uninterrupted music playback with our
                            long-lasting rechargeable battery. Whether you're on a long flight or
                            a marathon study session, our headphones have you covered. Immersive
                            Sound Experience: Experience rich, immersive sound with powerful bass
                            and crisp highs. Our headphones are engineered to deliver audio that's
                            true to the artist's intention, whether you're listening to music,
                            podcasts, or watching movies.
                        </p>
                    </div>

                    <div
                        className={`tab-pane fade ${activeTab === 'tab-reviews' ? 'show active' : ''}`}
                        id="reviews"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                    >
                        <div className="woocommerce-Reviews">
                            <div className="th-comments-wrap ">
                                <ul className="comment-list">
                                    <li className="review th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <img
                                                    src="/assets/img/blog/comment-author-1.jpg"
                                                    alt="Comment Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <h4 className="name">Adam Jhon</h4>
                                                <span className="commented-on">
                                                    <i className="far fa-calendar" />
                                                    22 April, 2023
                                                </span>
                                                <div
                                                    className="star-rating"
                                                    role="img"
                                                    aria-label="Rated 5.00 out of 5"
                                                >
                                                    <span style={{ width: "100%" }}>
                                                        Rated <strong className="rating">5.00</strong> out of 5
                                                        based on <span className="rating">1</span> customer
                                                        rating
                                                    </span>
                                                </div>
                                                <p className="text">
                                                    This product is very much qualityful and I love this
                                                    working system and speed.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="review th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <img
                                                    src="/assets/img/blog/comment-author-2.jpg"
                                                    alt="Comment Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <h4 className="name">Jusctin Dacon</h4>
                                                <span className="commented-on">
                                                    <i className="far fa-calendar" />
                                                    26 April, 2023
                                                </span>
                                                <div
                                                    className="star-rating"
                                                    role="img"
                                                    aria-label="Rated 5.00 out of 5"
                                                >
                                                    <span style={{ width: "100%" }}>
                                                        Rated <strong className="rating">5.00</strong> out of 5
                                                        based on <span className="rating">1</span> customer
                                                        rating
                                                    </span>
                                                </div>
                                                <p className="text">
                                                    They delivered the product in a few time. Product quality
                                                    is also very good.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="review th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <img
                                                    src="/assets/img/blog/comment-author-3.jpg"
                                                    alt="Comment Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <h4 className="name">Jacklin July</h4>
                                                <span className="commented-on">
                                                    <i className="far fa-calendar" />
                                                    26 April, 2023
                                                </span>
                                                <div
                                                    className="star-rating"
                                                    role="img"
                                                    aria-label="Rated 5.00 out of 5"
                                                >
                                                    <span style={{ width: "100%" }}>
                                                        Rated <strong className="rating">5.00</strong> out of 5
                                                        based on <span className="rating">1</span> customer
                                                        rating
                                                    </span>
                                                </div>
                                                <p className="text">
                                                    Their product and service is very satisfying. I highly
                                                    recommend their services.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="review th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <img
                                                    src="/assets/img/blog/comment-author-4.jpg"
                                                    alt="Comment Author"
                                                />
                                            </div>
                                            <div className="comment-content">
                                                <h4 className="name">Adison Smith</h4>
                                                <span className="commented-on">
                                                    <i className="far fa-calendar" />
                                                    26 April, 2023
                                                </span>
                                                <div
                                                    className="star-rating"
                                                    role="img"
                                                    aria-label="Rated 5.00 out of 5"
                                                >
                                                    <span style={{ width: "100%" }}>
                                                        Rated <strong className="rating">5.00</strong> out of 5
                                                        based on <span className="rating">1</span> customer
                                                        rating
                                                    </span>
                                                </div>
                                                <p className="text">
                                                    I am just in love with this product. Their service is also
                                                    very good you can also try.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>{" "}
                            {/* Comment Form */}
                            <div className="th-comment-form ">
                                <div className="form-title">
                                    <h3 className="blog-inner-title ">Add a review</h3>
                                </div>
                                <div className="row">
                                    <div className="form-group rating-select d-flex align-items-center">
                                        <label>Your Rating</label>
                                        <p className="stars">
                                            <span>
                                                <a className="star-1" href="#" onClick={e=>e.preventDefault()}>1</a>
                                                <a className="star-2" href="#" onClick={e=>e.preventDefault()}>2</a>
                                                <a className="star-3" href="#" onClick={e=>e.preventDefault()}>3</a>
                                                <a className="star-4" href="#" onClick={e=>e.preventDefault()}>4</a>
                                                <a className="star-5" href="#" onClick={e=>e.preventDefault()}>5</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Write a Message"
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                        <i className="text-title far fa-pencil-alt" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control"
                                        />
                                        <i className="text-title far fa-user" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email"
                                            className="form-control"
                                        />
                                        <i className="text-title far fa-envelope" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                        <label htmlFor="reviewcheck">
                                            Save my name, email, and website in this browser for the next
                                            time I comment.
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="th-btn">Post Review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProduct />
            </div>
        </section>
    );
}

export default ShopDetailsMain;
