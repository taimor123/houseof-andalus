"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import BlogPost from './BlogPost';
import posts from '../data/data-post.json';

function BlogInner() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 1;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className="th-blog-wrapper space-top space-extra-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        {currentPosts.map((data) => (
                            <BlogPost
                                key={data.id}
                                blogID={data.id}
                                blogImage={data.image}
                                blogTitle={data.title}
                            />
                        ))}
                        <div className="th-pagination">
                            <ul>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i}>
                                        <a
                                            className={currentPage === i + 1 ? 'active' : ''}
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}
                                        >
                                            {i + 1}
                                        </a>
                                    </li>
                                ))}
                                {currentPage < totalPages && (
                                    <li>
                                        <a className="next-page" href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}>
                                            Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
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
                                            <img src="assets/img/theme-img/map.svg" alt="" />
                                            City Tour
                                        </Link>
                                        <span>(8)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="assets/img/theme-img/map.svg" alt="" />
                                            Beach Tours
                                        </Link>
                                        <span>(6)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="assets/img/theme-img/map.svg" alt="" />
                                            Wildlife Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="assets/img/theme-img/map.svg" alt="" />
                                            News &amp; Tips
                                        </Link>
                                        <span>(7)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="assets/img/theme-img/map.svg" alt="" />
                                            Adventure Tours
                                        </Link>
                                        <span>(9)</span>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <img src="assets/img/theme-img/map.svg" alt="" />
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
                                                <img
                                                    src="assets/img/blog/recent-post-1-1.jpg"
                                                    alt="Blog Image"
                                                />
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
                                                <img
                                                    src="assets/img/blog/recent-post-1-2.jpg"
                                                    alt="Blog Image"
                                                />
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
                                                <img
                                                    src="assets/img/blog/recent-post-1-3.jpg"
                                                    alt="Blog Image"
                                                />
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
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogInner;
