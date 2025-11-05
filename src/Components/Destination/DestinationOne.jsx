"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Link from 'next/link';

// Updated retreat data: replaced bullet list highlights with themed narrative paragraphs (backText).
// Assumption: "Leadership Retreat" renamed to "Leadership Journeys", "Women Retreat" to "Women Only Retreat",
// and we introduce "Discovering History" using the previous "Olive Harvest Retreat" slot for a heritage-focused experience.
const destinations = [
  {
    id: 1,
    name: "Couples Retreat",
    subtitle: "June, September 2026",
    image: "/assets/img/Home/Reserve Your Retreat/1 Reserve Your Retreat 423x636.png",
    backText: "Reconnecting hearts in a quiet Andalus setting. Shared reflection, gentle rhythm, and guided intimacy moments that renew trust and tenderness. Leave with deeper harmony and a softened pace together."
  },
  {
    id: 2,
    name: "Writers Retreat",
    subtitle: "March, October 2026",
    image: "/assets/img/Home/Reserve Your Retreat/2 Reserve Your Retreat Architecture.png",
    backText: "Quiet creative mornings and heritage textures that stir the pen. Afternoon peer circles spark momentum while evenings invite contemplative craft. Shape chapters in stillness—refine voice, renew discipline."
  },
  {
    id: 3,
    name: "Leadership Journeys",
    subtitle: "23-27 April 2026",
    image: "/assets/img/Home/Reserve Your Retreat/3 Reserve Your Retreat 247x372 History.png",
    backText: "Servant leadership explored through ethics, legacy, and reflective space. Strategic pauses cultivate clarity while Andalus tradition frames responsibility. Emerge aligned—principled, purposeful, and grounded."
  },
  {
    id: 4,
    name: "Men Retreat",
    subtitle: "June 2026",
    image: "/assets/img/Home/Reserve Your Retreat/4 Reserve Your Retreat 337x506 Culture.png",
    backText: "Brotherhood, balance, and inner stillness. Outdoor challenge meets calm restoration as faith and resilience intertwine. A resetting container for strength anchored in humility and grace."
  },
  {
    id: 5,
    name: "Women Only Retreat",
    subtitle: "14-17 May, 24-28 Sept 2026",
    image: "/assets/img/Home/Reserve Your Retreat/5 Reserve Your Retreat 337x506 Artifacts.png",
    backText: "Sacred stillness and gentle creative flow. Wellness practices and heritage aesthetics nurture restoration and presence. Space to breathe, express, and return replenished and centered."
  },
  // {
  //   id: 6,
  //   name: "Custom Retreat",
  //   subtitle: "July and August 2026",
  //   image: "/assets/img/Home/Reserve Your Retreat/6 Reserve Your Retreat 423x636 Preservation.png",
  //   backText: "Design your focus: spiritual growth, creative discipline, leadership reset, or wellness immersion. Tailored facilitation with flexible pacing—build a retreat architecture that meets your season."
  // },
  {
    id: 6,
    name: "Discovering History",
    subtitle: "October 2026",
    image: "/assets/img/Home/Reserve Your Retreat/7 Reserve Your Retreat 337x506 Monastery.png",
    backText: "Hands-on heritage immersion: architecture, preservation stories, and living craftsmanship. Walk narratives of continuity while savoring farm-to-table simplicity. Recover wonder in layered cultural memory."
  }
];
 
const sliderOptions = {
    modules: [EffectCoverflow],
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "5",
    initialSlide: 0,
    grabCursor: true,
    loop: true, // Change from "true" to true
    speed: 1500,
    coverflowEffect: {
      rotate: 0,
      stretch: 95,
      depth: 212,
      modifier: 1,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    },
  };
  

function DestinationOne() {
  const [cursorActive, setCursorActive] = useState(false);
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId(prev => prev === id ? null : id);
  };

  useEffect(() => {
    // Add event listeners for hover effect
    const sliderWrap = document.querySelector(".slider-drag-wrap");
    const sliderLink = document.querySelectorAll(".slider-drag-wrap a");

    const handleMouseEnter = () => setCursorActive(true);
    const handleMouseLeave = () => setCursorActive(false);
    
    if (sliderWrap) {
      sliderWrap.addEventListener("mouseenter", handleMouseEnter);
      sliderWrap.addEventListener("mouseleave", handleMouseLeave);
    }
    
    sliderLink.forEach(link => {
      link.addEventListener("mouseenter", () => setCursorActive(false));
      link.addEventListener("mouseleave", () => setCursorActive(true));
    });

    // Clean up event listeners on component unmount
    return () => {
      if (sliderWrap) {
        sliderWrap.removeEventListener("mouseenter", handleMouseEnter);
        sliderWrap.removeEventListener("mouseleave", handleMouseLeave);
      }
      
      sliderLink.forEach(link => {
        link.removeEventListener("mouseenter", () => setCursorActive(false));
        link.removeEventListener("mouseleave", () => setCursorActive(true));
      });
    };
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">The Andalus Haven</span>
          <h2 className="sec-title">Reserve Your Retreat</h2>
        </div>

        <div className={`slider-drag-wrap ${cursorActive ? 'active' : ''}`}>
          <Swiper {...sliderOptions} className="destination-slider">
            {destinations.map((dest) => {
              const isFlipped = flippedId === dest.id;
              return (
                <SwiperSlide key={dest.id}>
                  <div className={`destination-box gsap-cursor flip-card ${isFlipped ? 'flipped' : ''}`}>
                    <div className="flip-inner">
                      {/* Front Side */}
                      <div className="flip-face flip-front">
                        <div className="destination-img">
                          <img src={dest.image} alt={dest.name} />
                          <div className="destination-content">
                            <div className="media-left">
                              <h4 className="box-title">{dest.name}</h4>
                              <span className="destination-subtitle">{dest.subtitle}</span>
                            </div>
                            <div>
                              <button type="button" onClick={()=>handleFlip(dest.id)} className="th-btn style2 th-icon" aria-label={`View details for ${dest.name}`}>Details</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Back Side */}
                      <div className="flip-face flip-back">
                        <div className="flip-back-content">
                          <h5 className="box-title mb-10">{dest.name}</h5>
                          <p className="retreat-paragraph">{dest.backText}</p>
                          <button type="button" onClick={()=>handleFlip(dest.id)} className="th-btn style3 th-icon mt-15" aria-label={`Close details for ${dest.name}`}>Back</button>
                        </div>
                                    
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <style jsx>{`
          .flip-card { perspective: 1200px; position: relative; }
          /* Create consistent aspect ratio so both faces overlap perfectly */
          .flip-card .flip-inner { position: relative; width: 100%; aspect-ratio: 3/4; transform-style: preserve-3d; transition: transform .9s cubic-bezier(.68,-0.35,.27,1.35); }
          .flip-card.flipped .flip-inner { transform: rotateY(180deg); }
          .flip-face { position: absolute; inset: 0; -webkit-backface-visibility: hidden; backface-visibility: hidden; display:flex; flex-direction:column; }
          .flip-front { z-index: 2; }
          .flip-front .destination-img, .flip-back { flex:1; }
          /* Improved back color scheme: richer emerald gradient for better contrast */
          .flip-back { transform: rotateY(180deg); align-items:center; justify-content:center; padding:14px 10px; background:linear-gradient(160deg,#234237 0%, #133d48 5%, #17a9cb 100%); color:#ffffff; border-radius:12px; box-shadow:0 8px 26px -6px rgba(0,0,0,0.40); }
          .flip-back-content { text-align:center; max-width:320px; margin:0 auto; }
          .flip-back-content .box-title { font-size:22px; color:#ffffff; letter-spacing:.02em; }
          .retreat-paragraph { font-size:18px; line-height:1.55; letter-spacing:.025em; color:#f2f8f5; margin:0 0 12px; }
          .destination-box.flip-card img { display:block; width:100%; height:100%; object-fit:cover; border-radius:12px; }
          .flip-card .destination-img { border-radius:12px; overflow:hidden; height:100%; }
          /* Front overlay adjustments */
          .flip-front .destination-content .box-title { color:#ffffff; text-shadow:0 2px 8px rgba(0,0,0,0.45); }
          .flip-front .destination-content .destination-subtitle { color:#d9efe6; font-weight:500; }
          .flip-front .th-btn.style2 { background:#ffffff; color:#2e4c3f; border:none; }
          .flip-front .th-btn.style2:hover { background:#d9efe6; color:#1f392f; }
          .flip-back button.th-btn { min-width:130px; }
          // .flip-back button.th-btn { background:#ffffff; color:#275041; }
          .flip-back button.th-btn:hover { background:#d9efe6; color:#1f392f; }
          /* Accessibility focus */
          .flip-card button:focus-visible { outline:2px solid #fff; outline-offset:3px; }
          @media (max-width: 767px){ .flip-card .flip-inner { aspect-ratio: 2/3; } }
          @media (prefers-reduced-motion: reduce){ .flip-inner { transition:none; } }
        `}</style>
      </div>
    </div>
  );
}

export default DestinationOne;
