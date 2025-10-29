"use client";
import React, { useEffect } from 'react';
import HeaderOne from '../../src/Components/Header/HeaderOne';
import FooterFour from '../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../src/Components/ScrollToTop';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';

// Simple room data placeholder; replace with real data source later
const rooms = [
  { id: 1, name: 'Ibn Rushd', image: '/assets/img/the-house/Room 1.png' },
  { id: 2, name: 'Ibn Arabi', image: '/assets/img/the-house/Room 2.png' },
  { id: 3, name: 'Ibn Hazm', image: '/assets/img/the-house/Room 3.png' },
  { id: 4, name: 'Ziryab', image: '/assets/img/the-house/Room 4.png' },
  { id: 5, name: 'Wallada', image: '/assets/img/the-house/Room 5.png' },
  { id: 6, name: 'Ibn Tufayl', image: '/assets/img/the-house/Room 6.png' },
];

export default function TheHousePage() {
  // Auto-play / pause any video with data-autoplay-scroll when it enters/leaves viewport
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll('video[data-autoplay-scroll]'));
    if (!videos.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const vid = entry.target;
          if (entry.isIntersecting) {
            const p = vid.play();
            if (p && typeof p.then === 'function') {
              p.catch(() => { vid.muted = true; vid.play().catch(()=>{}); });
            }
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
    videos.forEach(v => observer.observe(v));
    return () => { videos.forEach(v => observer.unobserve(v)); observer.disconnect(); };
  }, []);

  return (
    <>
      <HeaderOne />
      <Breadcrumb title="House of Andalus" />
      <main className="space-top space-extra-bottom">
        {/* Section 1: Intro */}

        <div className="about-area position-relative overflow-hidden space" id="the-house-intro">

          <div className="container shape-mockup-wrap">
            <div className="row">
              <div className="col-xl-6 mb-40 mb-xl-0">
                <div className="img-box1">
                  <div className="img1">
                    <img src="/assets/img/the-house/Olive 1.png" alt="The House" />
                  </div>
                  <div className="img2">
                    <img src="/assets/img/the-house/Olive 2.png" alt="The House" />
                  </div>
                  <div className="img3">
                    <img src="/assets/img/the-house/Olive 3.png" alt="The House" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="ps-xl-4 ms-xl-2">
                  <div className="title-area mb-20 pe-xl-5 me-xl-5">
                    <span className="sub-title style1">The Olive Garden of Andalus</span>
                    <h1 className="sec-title mb-2 pe-xl-5 me-xl-5 heading">Why the Olive Tree</h1>
                  </div>
                <p className="sec-text mb-2">
                  In the timeless valleys of Andalusia—where endless olive trees reach toward heaven—the spirit of legacy whispers through every grove. Here, The House of Andalus stands as a living monument to serenity, sincerity, and sacred connection, born from a longing to restore what modern life has taken away. It envisions an Olive Garden of Renewal—a sanctuary of learning and giving that revives the art and spirituality of olive cultivation, the ancient symbol of peace, faith, and sustenance.
                </p>
                <p className="sec-text mb-2">
                  Each tree planted nourishes both land and soul, carrying forward the mission of wellness, knowledge, and community—the same values upon which Andalusia was built. Experience the extraordinary, restore the balance, and let your roots grow here in the Garden of Andalus—where faith meets earth, and giving becomes eternal.
                </p>
                <div className="mt-30 d-flex flex-wrap align-items-center" style={{ gap: '16px' }}>
                  <Link href="/contact" className="th-btn style3 th-icon" aria-label="Donate for a tree">
                    Donate For A Tree
                  </Link>
                  <Link href="/contact" className="th-btn style1 th-icon" aria-label="Plant a tree">
                    Plant A Tree
                  </Link>
                </div>
                </div>
              </div>
            </div>
                  <div className="row gy-4 space-top ">
                  <div className="col-12">
                    <div className="blog-img">
                      <video
                        className="w-100"
                        controls
                        loop
                        playsInline
                        data-autoplay-scroll
                        aria-label="House of Andalus Intro Video"
                      >
                        <source src="/assets/img/homev.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      </div>
                      </div>
                      </div>
            {/* Shapes similar to AboutOne */}
            <div className="shape-mockup shape1 d-none d-xl-block" style={{ top: '12%', left: '-16%' }}>
              <img src="/assets/img/shape/shape_1.png" alt="shape" />
            </div>
            <div className="shape-mockup shape2 d-none d-xl-block" style={{ top: '20%', left: '-16%' }}>
              <img src="/assets/img/shape/shape_2.png" alt="shape" />
            </div>
            <div className="shape-mockup shape3 d-none d-xl-block" style={{ top: '14%', left: '-10%' }}>
              <img src="/assets/img/shape/shape_3.png" alt="shape" />
            </div>
          </div>
        </div>
        {/* Section 2: Vision (Destination-style layout) */}
        <section className="" id="the-house-vision">
          <div className="container shape-mockup-wrap">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">Our Vision</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Reconnecting Community</span>
                    </div>
                    <h2 className="box-title">Reconnecting The Ummah</h2>
                    <p className="blog-text mb-30">The House of Al-Andalus was born with a whole lot of questions. What if we could take people beyond history, restore it with reverence, stone by stone, to preserve the soul of its past? What if we reawaken their senses so they can disconnect yet be reconnected… to themselves, their family, and the ummah?</p>
                    <p className="blog-text mb-35">Our vision breathes through everything, from the way we designed our rooms to the way we prepare our food and treat our guests and hosts. Rooted in reverence and simplicity, it guided us from a single room to a growing tapestry of spaces in this farmhouse, each echoing the same essence of stillness, beauty, and belonging. It has pushed our DNA beyond our olive trees, to how our guests and hosts rest, reflect and reconnect long after they leave. We want everyone to leave us in a better place than when they arrived, lighter, clearer, and more whole.</p>
                    <h3 className="box-title">A passion for heritage, harmony, and heartfelt smiles</h3>
                    <p className="blog-text mb-30">From the moment our guests step onto 14 hectares of natural land and an olive grove of 400 trees for their welcome ritual, through the programming they experience while they’re with us, until the sad time they wave farewell, we do everything we can to ensure they feel the long-lasting and uplifting impact of emotional hospitality. This is wrapped up in meaningful, out-of-the-ordinary moments, whether that means fresh air, waking up to birdsong, pioneering wellness, or a chance to interact with the community around you in a way that feels genuine and authentic.</p>
                    <p className="blog-text mb-30">Over time, we keep enhancing the way we do this, for example, working with scientists, engineers, and specialists in sacred geometry to offer you healing spaces, whether consciously through our rooms named after famous Andalusi historic figures or unconsciously through the energy of the natural environment itself.</p>
                    <blockquote>
                      <p>Although we never joke around when it comes to preserving our Andalusian heritage, nurturing land, and serving with ihsan, there’s always been plenty of time for fun. You’ll find laughter in the courtyard, stories shared under olive trees, and that unmistakable feeling of being home.</p>
                      <cite>The House Team</cite>
                    </blockquote>
                  </div>
                </div>
                   <div className="row gy-4">
                                    <div className="col-12">
                                        <div className="blog-img">
                      <video
                        className="w-100"
                        controls
                        loop
                        playsInline
                        data-autoplay-scroll
                        aria-label="House of Andalus Intro Video"
                      >
                        <source src="/assets/img/House%20of%20Andalus%20video%203.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      </div>
                      </div>
                      </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Values (Destination-style checklist) */}
        <section className="space" id="the-house-values">
          <div className="container shape-mockup-wrap">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mb-20">
                      <span className="sub-title">Our Values</span>
                    </div>
                    <h2 className="box-title mb-20">Rooted In Reverence</h2>
                    <p className="blog-text mb-40">This is our how: the way we live our name and reawaken your senses with offerings and experiences that are quietly transformative, gently restorative, and intentionally out of the ordinary.</p>
                    <div className="row gy-4 gx-4 mb-10">
                      {[
                        {title:'Ihsan with Heart',desc:'Intention guides design & stillness.',image:'/assets/img/the-house/Ihsan with Heart.png'},
                        {title:'Local Integrity, Global Vision',desc:'Roots Andalusian, reach the world.',image:'/assets/img/the-house/Local Integrity.png'},
                        {title:'Sustainability as Spirituality',desc:'Land care as gratitude to the Maker.',image:'/assets/img/the-house/Sustainability.png'},
                        {title:'Emotional Hospitality',desc:'Adab in service: humility, grace, love.',image:'/assets/img/the-house/Emotional.png'}
                      ].map((v,i)=>(
                        <div key={v.title} className="col-md-6 col-lg-3">
                          <div className="destination-item th-ani" aria-label={v.title}>
                            <div className="destination-item_img global-img">
                              <img src={v.image} alt={v.title} />
                            </div>
                            <div className="destination-content">
                              <h6 className="destination-subtitle mb-10"><span>{v.title}</span></h6>
                              <p className="destination-text">{v.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="row gy-4 gx-4 mb-40">
                      {[
                        {title:'Legacy of Light',desc:'Guided by light, grounded in faith.',image:'/assets/img/the-house/Legacy.png'},
                        {title:'Andalusian Roots',desc:'Heritage kept, resonance extended.',image:'/assets/img/the-house/Andalusian.png'},
                        {title:'Gratitude in Care',desc:'Olive trees tended with reverence.',image:'/assets/img/the-house/Gratitude.png'},
                        {title:'A History Archive',desc:'Manners visible in every moment.',image:'/assets/img/the-house/Adab.png'}
                      ].map((v,i)=>(
                        <div key={v.title} className="col-md-6 col-lg-3">
                          <div className="destination-item th-ani" aria-label={v.title}>
                            <div className="destination-item_img global-img">
                              <img src={v.image} alt={v.title} />
                            </div>
                            <div className="destination-content">
                              <h6 className="destination-subtitle mb-10"><span>{v.title}</span></h6>
                              <p className="destination-text">{v.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Rooms (Destination-style gallery/grid) */}
        <section className="" id="the-house-rooms">
          <div className="container shape-mockup-wrap">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">The Rooms</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Heritage Alive</span>
                    </div>
                    <h2 className="box-title">House of Andalus by different Season</h2>
                    <p className="blog-text mb-35">Each room is named after a historic Andalusi figure, chosen for their unique character, achievements, leadership styles, and the legacy they left behind. Every fabric, tile, and scent was chosen to honour heritage and harmony. The interiors blend local Andalusian craft with modern restraint, resulting in a space that feels both timeless and intimate.</p>
                    <p className="blog-text mb-35">Each olive tree, each archway carries the memory of Al-Andalus, where scholars once wrote, artists once painted, and hearts once worshipped in beauty. This is a house that holds stories. And now, it holds yours too.</p>
                    {/* <h3 className="page-title mt-10 mb-25">Room Showcase</h3> */}
                    <div className="row g-4">
                      {rooms.map(room => (
                        <div key={room.id} className="col-md-6 col-lg-4">
                          <div className="destination-box th-ani" aria-label={`Room: ${room.name}`}>
                            <div className="destination-img position-relative" style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                              <img src={room.image} alt={room.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease' }} />
                              <div className="img-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.65) 100%)' }} />
                              <div className="room-name-overlay" style={{ position: 'absolute', left: '0', right: '0', bottom: '12px', padding: '0 16px', textAlign: 'left' }}>
                                <h5 style={{ color: '#fff', margin: 0, fontSize: '18px', fontWeight: 600 }}>{room.name}</h5>
                              </div>
                              <div className="hover-actions d-flex align-items-center justify-content-center" style={{ position: 'absolute', inset: 0, opacity: 0, transition: 'opacity .4s ease' }}>
                                <Link href="/rooms" className="th-btn style3 th-icon" aria-label={`View details for ${room.name}`}>View</Link>
                              </div>
                            </div>
                            <div className="destination-content pt-15">
                              <h5 className="box-title mb-5">{room.name}</h5>
                              <div className="destination-subtitle mb-10">Heritage & Harmony</div>
                              <p className="mb-15" style={{ fontSize: '14px' }}>A tranquil space inspired by the legacy of {room.name}, blending Andalusian craft with restorative simplicity.</p>
                              <Link href="/rooms" className="th-btn style1" aria-label={`Navigate to all rooms`}>Explore</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <style jsx>{`
                      #the-house-rooms .destination-box:hover img { transform: scale(1.08); }
                      #the-house-rooms .destination-box:hover .hover-actions { opacity: 1; }
                      #the-house-rooms .destination-box .destination-content { background: #fff; border: 1px solid #eee; border-top: none; padding: 18px 20px; }
                      @media (prefers-reduced-motion: reduce) {
                        #the-house-rooms .destination-box:hover img { transform: none; }
                      }
                    `}</style>
                    {/* <div className="text-center mt-40">
                      <Link href="/rooms" className="th-btn style3 th-icon">View All Rooms</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
