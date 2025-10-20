"use client";
import React from 'react'
import Link from 'next/link'

function TourguideCard(props) {
    const { guideID, guideThumb, guideImage, guideTitle } = props;
    return (
        <div className="th-team team-grid">
            <div className="team-img">
                <img src={`/assets/img/team/${guideThumb}`} alt="Team" />
            </div>
            <div className="team-img2">
                <img src= {`/assets/img/team/${guideImage}`} alt="Team" />
            </div>
            <div className="team-content">
                <div className="media-body">
                    <h3 className="box-title">
                        <Link href={`/tour-guide/${guideID}`}>{guideTitle ? guideTitle : 'Michel Smith'}</Link>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                        <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                            <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a target="_blank" href="https://youtube.com/" rel="noopener noreferrer">
                            <i className="fab fa-youtube" />
                        </a>
                        <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourguideCard
