"use client";
import React from 'react'
import Link from 'next/link'

function Breadcrumb({ title, description, bgImage }) {
    return (
        <>
            <div
                className="breadcumb-wrapper "
                style={{ backgroundImage: `url(${bgImage || '/assets/img/1920x401.jpg'})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
            >
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">{title}</h1>
                        <ul className="breadcumb-menu">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Breadcrumb
