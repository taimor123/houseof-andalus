"use client";
import React from 'react'
import Link from 'next/link';

function ServiceCard(props) {
    const { serviceID, serviceImage, serviceTitle, serviceItem } = props;
    return (
            <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                    <img src={`/assets/img/destination/${serviceImage}`} alt="" />
                </div>
                <div className="destination-content">
                    <h3 className="box-title">
                        <Link href={`/service/${serviceID}`}>{serviceTitle ? serviceTitle : 'Photo Shoot'}</Link>
                    </h3>
                    <p className="destination-text">{serviceItem ? serviceItem : '20 Listing'}</p>
                    <Link href="/contact" className="th-btn style4 th-icon">
                        Book Now
                    </Link>
                </div>
            </div>
    )
}

export default ServiceCard
