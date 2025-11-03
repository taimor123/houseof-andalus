"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';

const CategoryOne = () => {
  const swiperRef = useRef(null);

  const categories = [
    {
      id: 1,
      title: "Heritage Harvest",
      imgSrc: "/assets/img/Home/Book your stay/1 Book Your Stay 312x311 (1) Current farmhouse.png",
      details: [
        "Through the Heritage Harvest, House of Andalus breathes life back into ancient olive groves restoring centuries-old trees and planting new ones with care, honouring the timeless practices of stewardship, gratitude, and renewal.",
        "Guests are invited to experience the sacred rhythm of the land, to nurture olive trees, join in the harvest, and take part in the artisanal crafting of small-batch olive oil.",
        "Each visit is a journey into the living heritage of Andalucía where farming becomes an act of faith, nature teaches resilience, and tending the earth reconnects us to purpose."
      ]
    }, 
    {
      id: 2,
      title: "Al Andalus Pathways",
      imgSrc: "/assets/img/Home/Book your stay/2 Book Your Stay 313x313 (2) Envisaged Retreat centre.png",
      details: [
        "Walking the Footsteps of Legacy — At House of Andalus, history is not a distant story, it is a living presence.",
        "Through Journey Through Al-Andalus, guests are invited to step into the landscapes, flavours, and wisdom of a civilisation where faith, knowledge, and creativity once flourished side by side.",
        "Each journey is designed not just to inform, but to awaken and reconnect us with the spirit of Al-Andalus — a world of resilience, beauty, coexistence, and extraordinary cultural achievement."
      ]
    },
    {
      id: 3,
      title: "Leadership Journeys",
      imgSrc: "/assets/img/Home/Book your stay/3 Book Your Stay 312x310 (1) Andalucian tours.png",
      details: [
        "Your leadership, cultivated with nature, flourishing in community, and building a living legacy.",
        "Leadership at House of Andalus is rooted in meaning, anchored in faith, and guided by the stewardship of a world beyond the self.",
        "The ‘Living Legacy’ Leadership Programme nurtures men and women who have already walked paths of leadership, bringing with them education, experience, and vision — yet feel called toward something deeper."
      ]
    },
    {
      id: 4,
      title: "Sacred Land",
      imgSrc: "/assets/img/Home/Book your stay/4 Book Your Stay 312x310 (2) Retreat Inside.png",
      details: [
        "Farming and agriculture is still a prominent part of the Andalucian way of life. We honour the traditions of farming, tending the land and celebrating the gifts of Andalucia by working with locals.",
        "Rooted in the principles of stewardship and Sadaqah Jariyah, a reminder that caring for the earth is an act of legacy and ongoing charity.",
        "Here you can join our Seasonal Olive Harvesting, watching Artisan Olive Oil Production and taste oils drawn from ancient groves.",
        "Our yearly Harvest Festival offers an opportunity for the whole family to reconnect with the land through olive picking, seasonal food, and shared reflection."
      ]
    },
    {
      id: 5,
      title: "The House and Its History",
      imgSrc: "/assets/img/Home/Book your stay/5 Book Your Stay 312x311 (2) Andalucian tours.png",
      details: [
        "The House of Andalus has been transformed from a 100-year old Cortijo (farmhouse) into a dignified and beautiful sanctuary that holds the spirit of our ancestors.",
        "Two separate house merged into one premium living space is a refuge for the soul.",
        "All materials used for the building and the renovation of the house are local including the real oak floor and wooden beams, and built by local workers.",
        "Even the stones were collected from the riverbed."
      ]
    }, 
    {
      id: 6,
      title: "Culture and Society",
      imgSrc: "/assets/img/Home/Book your stay/6 Book Your Stay 312x311 (3) Andalucian tours.png",
      details: [
        "Andalus was a vibrant, thriving intellectual society for 800 years. Communities lived and worked here, together creating a way of life that welcomed everyone.",
        "A world apart from the Dark Ages, Andalus was a beacon of knowledge and innovation that has long lasting impact on civilizations until today.",
        "Men and women were not only well-versed in one area but they were polymaths.",
        "Here you will get the chance to learn about the lesser known figures from andalusi history, inventors, artists, literary geniuses, architects and medical giants who changed the course of history."
      ]
    }, 
    {
      id: 7,
      title: "Art and Architecture",
      imgSrc: "/assets/img/Home/Book your stay/7 Book Your Stay 312x309 (1) Andalucian farm.png",
      details: [
        "Art and architecture of Andalus is world famous, even today. Intricate, often mind-boggling systems were created that influenced architecture in the rest of the world.",
        "The typical andalusi forms, buildings, decorations and techniques can be seen all across Spain and in particular in Andalucia.",
        "The contribution of Al- Andalus reaches beyond time and borders and here you will have the chance not only to learn about these techniques but try your hands in our craft and design workshops."
      ]
    }
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    // ✅ Start autoplay properly
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
    // ✅ Custom pagination with numbers
    if (swiperInstance.pagination) {
      swiperInstance.pagination.renderBullet = function (index, className) {
        let formattedNumber = index + 1 < 10 ? "0" + (index + 1) : index + 1;
        return `<span class="${className} number">${formattedNumber}</span>`;
      };
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
    // ✅ Custom wheel effect for category slider
    const multiplier = {
      translate: 0.1,
      rotate: 0.01,
    };

    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };

    raf();

    return () => cancelAnimationFrame(raf);
  }, []);

  const [activeCategory, setActiveCategory] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const openModal = (category) => {
    setActiveCategory(category);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveCategory(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
    if (showModal) {
      window.addEventListener('keydown', handleEsc);
    } else {
      window.removeEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showModal]);

  return (
    <section
      className="category-area bg-top-center"
      style={{ backgroundImage: "url(/assets/img/Home/Book your stay/Book Your Stay Background Pic.png)", backgroundRepeat: "no-repeat" }}
    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">The House of Andalus</span>
          <h2 className="sec-title">Book Your Stay</h2>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5 },
          }}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets"
          }} // ✅ Defined renderBullet inside pagination
          className="th-slider has-shadow categorySlider"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div
                className="category-card single"
                role="button"
                tabIndex={0}
                onClick={() => openModal(category)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(category); } }}
                aria-label={`View details for ${category.title}`}
              >
                <div className="box-img global-img">
                  <img src={category.imgSrc} alt={category.title} loading="lazy" />
                </div>
                <h3 className="box-title mb-2">{category.title}</h3>
                <span className="line-btn">See more</span>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controller w-100 justify-content-center">
            <div className="swiper-pagination" style={{maxWidth:"100%"}}></div>
          </div>
        </Swiper>

      </div>
      {showModal && activeCategory && (
        <div
          className="category-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="categoryModalTitle"
          onClick={(e) => { if (e.target === e.currentTarget) { closeModal(); } }}
        >
          <div className="category-modal">
            <button type="button" className="modal-close" aria-label="Close" onClick={closeModal}>×</button>
            <h3 id="categoryModalTitle" className="modal-title">{activeCategory.title}</h3>
            <div className="modal-body">
              {activeCategory.details.map((p,i) => <p key={i}>{p}</p>)}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .category-modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:1200; padding:1.5rem; }
        .category-modal { background:#ffffff; max-width:760px; width:100%; border-radius:18px; box-shadow:0 18px 48px -12px rgba(0,0,0,0.45); position:relative; display:flex; flex-direction:column; max-height:85vh; }
        .modal-close { position:absolute; top:12px; right:14px; background:transparent; border:none; font-size:1.75rem; line-height:1; cursor:pointer; color:#234237; }
        .modal-title { margin:0; padding:1.75rem 2rem 0 2rem; font-size:1.5rem; color:#234237; letter-spacing:.02em; }
        .modal-body { padding:1rem 2rem 1.5rem; overflow-y:auto; }
        .modal-body p { font-size:.95rem; line-height:1.6; margin:0 0 1rem; color:#2f4a3f; }
        .modal-footer { padding:0 2rem 1.5rem; display:flex; justify-content:flex-end; }
        .modal-footer .btn { min-width:120px; }
        @media (max-width: 575px){ .modal-title { font-size:1.25rem; padding:1.25rem 1.25rem 0; } .modal-body{ padding:0.75rem 1.25rem 1.25rem; } .modal-footer{ padding:0 1.25rem 1.25rem; } }
      `}</style>
    </section>
  );
};

export default CategoryOne;
