"use client";
import React from 'react'
import Link from 'next/link'

function BlogThree() {
    return (
        <section className="bg-smoke overflow-hidden space">
            <div className="container shape-mockup-wrap">
                <div className="row justify-content-lg-between justify-content-center align-items-end">
                    <div className="col-lg">
                        <div className="title-area text-center text-lg-start">
                            <span className="sub-title">Blog and Article</span>
                            <h2 className="sec-title">Blog &amp; Articles From Tourm</h2>
                        </div>
                    </div>
                    <div className="col-lg-auto d-none d-lg-block">
                        <div className="sec-btn">
                            <Link href="/blog" className="th-btn style4 th-icon">
                                See More Articles
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row gx-24 gy-30">
                    <div className="col-xl-5">
                        <div className="blog-grid th-ani">
                            <div className="blog-img global-img">
                                <img src="/assets/img/blog/blog_3_1.jpg" alt="blog" />
                            </div>
                            <div className="blog-grid_content">
                                <div className="blog-meta">
                                    <Link className="author" href="/blog">
                                        July 05, 2024
                                    </Link>
                                    <Link href="/blog">6 min read</Link>
                                </div>
                                <h3 className="box-title">
                                    <Link href="/blog/1">
                                        Travel agency for those who want to explore the world and try to
                                        make adventure
                                    </Link>
                                </h3>
                                <Link href="/blog/1" className="th-btn style4 th-icon">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="blog-grid style2 th-ani">
                            <div className="blog-img global-img">
                                <img src="/assets/img/blog/blog_3_2.jpg" alt="blog" />
                            </div>
                            <div className="blog-grid_content">
                                <div className="blog-meta">
                                    <Link className="author" href="/blog">
                                        July 07, 2024
                                    </Link>
                                    <Link href="/blog">7 min read</Link>
                                </div>
                                <h3 className="box-title">
                                    <Link href="/blog/1">
                                        The best time to visit japan &amp; enjoy the cherry blossoms
                                    </Link>
                                </h3>
                                <Link href="/blog/1" className="th-btn style4 th-icon">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="blog-grid th-ani style2 mt-24">
                            <div className="blog-img global-img">
                                <img src="/assets/img/blog/blog_3_3.jpg" alt="blog" />
                            </div>
                            <div className="blog-grid_content">
                                <div className="blog-meta">
                                    <Link className="author" href="/blog">
                                        July 10, 2024
                                    </Link>
                                    <Link href="/blog">8 min read</Link>
                                </div>
                                <h3 className="box-title">
                                    <Link href="/blog/1">
                                        Hiden history of Japan in the world and try to make adventure
                                    </Link>
                                </h3>
                                <Link href="/blog/1" className="th-btn style4 th-icon">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xxl-block"
                    style={{
                        top: "14%",
                        right: "-13%",
                    }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{
                        top: "25%",
                        right: "-12%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xxl-block"
                    style={{
                        top: "20%",
                        right: "-18%",
                    }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup movingX d-none d-xxl-block"
                    style={{
                        bottom: "-15%",
                        right: "10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_9.png" alt="shape" />
                </div>
            </div>
        </section>

    )
}

export default BlogThree
