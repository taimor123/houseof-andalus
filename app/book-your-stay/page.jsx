"use client";
import React from 'react';
import HeaderOne from '../../src/Components/Header/HeaderOne';
import FooterFour from '../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../src/Components/ScrollToTop';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';

// Placeholder retreats list (replace with dynamic data later)
const upcomingRetreats = [
  { id: 1, title: 'Couples Retreat: A Fine Romance', date: 'Mar 14-18, 2026', fee: 'From €1,250', summary: 'Reconnect hearts through guided practices, wellness, and nature.' },
  { id: 2, title: 'Writers Retreat: Return To Voice', date: 'Apr 09-14, 2026', fee: 'From €980', summary: 'Ignite creativity with mentorship, silent hours, and Andalusian trails.' },
  { id: 3, title: 'Leadership Retreat: Conscious Authority', date: 'May 20-24, 2026', fee: 'From €1,450', summary: 'Lead with taqwa and clarity in reflective circles and guided workshops.' },
];

export default function BookYourStayPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Book Your Stay" />
      <main className="space-top space-extra-bottom">
        {/* Hero / Intro */}
        <section className="about-area position-relative overflow-hidden space" id="stay-intro">
          <div className="container shape-mockup-wrap">
            <div className="row">
              <div className="col-xl-7 mb-40 mb-xl-0">
                {/* Adopt AboutFour image composition */}
                <div className="img-box3" aria-label="Retreat Atmosphere Images">
                  <div className="img1">
                    <img src="/assets/img/Book your stay/Retreat 1.png" alt="Olive Grove Morning" />
                  </div>
                  <div className="img2">
                    <img src="/assets/img/Book your stay/Retreat 2.png" alt="Courtyard Reflection" />
                  </div>
                  <div className="img3 movingX">
                    <img src="/assets/img/Book your stay/Retreat 3.png" alt="Stillness & Light" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="ps-xl-4">
                  <div className="title-area mb-20">
                    <span className="sub-title style1">Book Your Stay</span>
                    <h1 className="sec-title mb-15 heading" style={{fontSize:'46px',lineHeight:'1.15'}}>A House That Holds Your Retreat</h1>
                  </div>
                  <p className="sec-text mb-20">In the heart of Andalusia, far from hurry and habit, a house waits to hold your retreat. Here the call to prayer drifts across terraces, olive leaves shimmer in morning light, and interiors invite a slower rhythm. We curate spaces where couples rediscover tenderness, writers honour voice, leaders cultivate inner alignment, and seekers return to stillness. If it matters to your heart—faith, family, creativity, renewal—it matters here.</p>
                  <p className="sec-text mb-25">Choose from signature experiences already lovingly designed, or craft a bespoke gathering shaped around your own intention. Every retreat is woven from reflection, nature, communion and the quiet joy of remembering Allah together. Let House of Andalus answer the lingering question, “Which retreat shall we choose?”—with one that feels like it was always waiting for you.</p>
                  <div className="d-flex flex-wrap gap-3">
                    <Link href="#retreats" className="th-btn style1">House of Andalus Retreats</Link>
                    <Link href="#craft-your-own" className="th-btn style3 th-icon">Organise Your Own Retreat</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Shapes retained */}
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
        </section>

   

  {/* Couples’ Retreat (Text Focus) */}
        <section className="space" id="couples-retreat">
          <div className="container shape-mockup-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">Couples&rsquo; Retreat</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 12px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Reconnection & Soul</span>
                    </div>
                    <h2 className="box-title">A Space to Reconnect</h2>
                    <p className="blog-text mb-30">When hearts remember Allah together, they do not drift. This retreat creates intentional space for reconnection: tending to the shared garden of marriage with care, presence, rest, and a little sunlight. Your time here is unhurried—woven from quiet mornings, gentle reflection, and simple joy.</p>
                    <p className="blog-text mb-30">Beyond your room the olive trails whisper and time softens. Walk slowly. Breathe deeply. Let stillness reintroduce you to one another. The valley gives couples a sacred pause from habit—so the heart can speak and be heard.</p>
                    <h3 className="box-title">Reconnection Takes Center Stage</h3>
                    <p className="blog-text mb-30">Our wellness spaces invite the full sensory experience: steam, intentional breathing, gentle movement, dhikr, and healing therapies that restore togetherness. Each element is crafted not for performance, but for returning to a shared inner quiet.</p>
                    <p className="blog-text mb-30">Practice partner yoga beneath olive trees. Take guided dhikr walks through nature. Share reflections at dusk when the sky glows with remembrance. Leave with renewed hearts, practical tools, and memories anchored in sakinah, mawaddah, and rahmah.</p>
                    <blockquote>
                      <p>Facilitators guide heart-led moments—curated to heal, reconnect, and inspire lasting harmony. Privacy is respected. What&rsquo;s shared here, stays here.</p>
                      <cite>Facilitator Team</cite>
                    </blockquote>
                    <div className="mt-25">
                      <Link href="/book-your-stay/couple-retreat-form" className="th-btn style3 th-icon">Join the Couples&rsquo; Retreat</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Writers’ Retreat (Text Focus) */}
        <section className="space bg-smoke2" id="writers-retreat">
          <div className="container shape-mockup-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-12 mb-30">
                      <span className="page-tag mr-5">Writers&rsquo; Retreat</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 12px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Return to Voice</span>
                    </div>
                    <h2 className="box-title">Write What You Were Meant To Remember</h2>
                    <p className="blog-text mb-30">Life won&rsquo;t look the same after time at the House of Andalus. Writing here becomes a journey of rediscovery—words shaped in stillness, guided by intention. The valley offers a quiet companionship that lets language breathe again.</p>
                    <p className="blog-text mb-30">Somewhere between the call to prayer, a turning page, and a pause in your pen, you realise this isn&rsquo;t escape. It&rsquo;s a return—to clarity, to courage, to the inner voice that faith protects. Hours of silence, mentored sessions, and reflective walks help pages emerge that change not only what you write, but how you live.</p>
                    <div className="mt-10">
                      <Link href="/contact" className="th-btn style1">Join the Writers&rsquo; Retreat</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Retreat (Text Focus) */}
        <section className="space" id="leadership-retreat">
          <div className="container shape-mockup-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">Leadership Retreat</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 12px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Conscious Authority</span>
                    </div>
                    <h2 className="box-title">Lead With Light</h2>
                    <p className="blog-text mb-30">Arrive in grace to our Leadership Retreats, descending into a valley where every sunrise spills light across centuries-old olive groves and every night hums with inherited wisdom. This is a setting for inward leadership: clarity before action, sincerity before influence.</p>
                    <p className="blog-text mb-30">Here, leadership isn&rsquo;t conquest but consciousness. Rediscover what it means to steward with inner alignment, emotional maturity, and spiritual depth through reflective circles, guided workshops, and stillness that restores intention.</p>
                    <div className="mt-10">
                      <Link href="/contact" className="th-btn style3 th-icon">Apply for the Leadership Retreat</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Men&rsquo;s Retreat (Simplified) */}
        <section className="space bg-smoke" id="mens-retreat">
          <div className="container shape-mockup-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-20 d-flex align-items-center gap-2 flex-wrap">
                      <span className="page-tag mr-5">Men&rsquo;s Retreat</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 12px',border:'1px solid #d5e4dd',borderRadius:'30px',fontSize:'11px',letterSpacing:'.05em',textTransform:'uppercase'}}>Resilience & Brotherhood</span>
                    </div>
                    <h2 className="box-title">Men of Reflection</h2>
                    <p className="blog-text mb-20">A focused, quiet reset for men seeking grounded faith, steady character and sincere companionship—without noise or performance.</p>
                    <div className="mb-25 d-flex flex-wrap gap-2">
                      {['Spiritual','Mental','Social','Physical','Vocational','Environmental'].map((pill,i) => (
                        <span key={i} className="destination-subtitle" style={{display:'inline-block',padding:'3px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'10px',letterSpacing:'.05em',textTransform:'uppercase'}}>{pill}</span>
                      ))}
                    </div>
                    <h3 className="box-title">Daily Rhythm</h3>
                    <div className="checklist style2 mb-25">
                      <ul>
                        <li>Fajr & Qur&rsquo;an reflection</li>
                        <li>Mind & character learning</li>
                        <li>Movement / trail activity</li>
                        <li>Skill or stewardship block</li>
                        <li>Brotherhood circle</li>
                        <li>Evening dhikr reset</li>
                      </ul>
                    </div>
                    <div className="mt-5">
                      <Link href="/contact" className="th-btn style1" style={{padding:'6px 22px'}}>Join the Men&rsquo;s Retreat</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Women&rsquo;s Retreat */}
        <section className="space bg-smoke2" id="womens-retreat">
          <div className="container shape-mockup-wrap">
            <div className="row align-items-center">
              <div className="col-xl-5 order-2 order-xl-1">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">Women&rsquo;s Retreat</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Reflection & Renewal</span>
                    </div>
                    <h2 className="box-title">A Return To Stillness</h2>
                    <p className="blog-text mb-30">For women seeking seclusion, our Women&rsquo;s Retreat offers sanctuary. Learn to listen again—to your heart&rsquo;s whispers, your body&rsquo;s wisdom, and your soul&rsquo;s longing for Allah...</p>
                    <h3 className="box-title">Daily Activities</h3>
                    <div className="checklist style2 mb-30">
                      <ul>
                        <li>Prayer & spiritual reawakening</li>
                        <li>Conscious mind exercises (Taqwa learning)</li>
                        <li>Lectures, workshops & discussions</li>
                        <li>Participant-led reminders</li>
                        <li>Practical skill workshops</li>
                        <li>Physical activities & nature walks</li>
                        <li>Land care: farming, harvesting, planting</li>
                      </ul>
                    </div>
                    <div className="mt-10">
                      <Link href="/contact" className="th-btn style3 th-icon">View Upcoming Women&rsquo;s Retreats</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Craft Your Own Retreat */}
        <section className="space bg-title text-white" id="craft-your-own">
          <div className="container shape-mockup-wrap">
            <div className="row align-items-center">
              <div className="col-xl-7 mb-40 mb-xl-0">
                <div className="img-box3" aria-label="Craft Your Own Retreat Imagery">
                  <div className="img1">
                    <img src="/assets/img/Book your stay/Custom Retreat 1.png" alt="Custom Planning" />
                  </div>
                  <div className="img2">
                    <img src="/assets/img/Book your stay/Custom Retreat 2.png" alt="Group Gathering" />
                  </div>
                  <div className="img3 movingX">
                    <img src="/assets/img/Book your stay/Custom Retreat 3.png" alt="Quiet Preparation" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="subr-title text-white ">Custom Retreat</span>
                      {/* <span className="page-tag mr-5 text-white">Craft Your Own</span>
                      <span className="destination-subtitle text-white" style={{display:'inline-block',padding:'4px 12px',border:'1px solid #ffffff33',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase',background:'rgba(255,255,255,0.08)'}}>Your Vision. Our Space.</span> */}
                    </div>
                    <h2 className="box-title text-white">Design A Bespoke Retreat</h2>
                    <p className="blog-text mb-30 text-white">You can design your own journey, from a simple weekend of quiet companionship to a full multi-day renewal retreat. Every detail, from room selection to reflection themes, is crafted around your story.</p>
                    <p className="blog-text mb-30 text-white">Host your own gathering in the serene embrace of the Andalusian mountains. Whether for wellness, learning, or spiritual reflection, we&rsquo;ll help you create a bespoke experience.</p>
                    <blockquote>
                      <p>Purpose is not found in extravagance, but in remembrance. And here, remembrance is where life begins.</p>
                      <cite>House of Andalus Team</cite>
                    </blockquote>
                    <div className="mt-25">
                      <Link href="/contact" className="th-btn style1 th-icon hosting-btn">Enquire About Hosting</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

             {/* Section: Overview / What's Included */}
  <section className="space bg-smoke" id="retreats">
          <div className="container shape-mockup-wrap">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-single">
                  <div className="page-content d-block">
                    <div className="page-meta mt-10 mb-30">
                      <span className="page-tag mr-5">Retreats</span>
                      <span className="destination-subtitle" style={{display:'inline-block',padding:'4px 10px',border:'1px solid #e1ece8',borderRadius:'30px',fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>Included</span>
                    </div>
                    <h2 className="box-title">House of Andalus Retreats</h2>
                    <p className="blog-text mb-30">At the House of Andalus, we design retreats that the world makes us forget: intimacy, creativity, clarity, and connection. Each experience flows with reflection, community, and nature&rsquo;s rhythm.</p>
                    <h3 className="box-title">What&rsquo;s Included</h3>
                    <div className="destination-checklist mb-35">
                      <div className="checklist style2">
                        <ul>
                          <li>All workshops & materials</li>
                          <li>Premium accommodation</li>
                          <li>All meals & refreshments</li>
                          <li>Guided adventures & excursions</li>
                        </ul>
                      </div>
                      <div className="checklist style2">
                        <ul>
                          <li>Pre-retreat consultation</li>
                          <li>Wellness & reflection spaces</li>
                          <li>Community circles & dhikr</li>
                          <li>Dedicated retreat facilitators</li>
                        </ul>
                      </div>
                    </div>
                    <p className="blog-text mb-40">Join us in the mountains of Andalucia for our next retreat here: <Link href="#upcoming" className="th-btn style4 th-icon" style={{padding:'4px 14px'}}>View Upcoming</Link></p>

                    {/* Upcoming Retreats List */}
                    <h3 className="page-title mt-10 mb-25" id="upcoming">Upcoming Retreats</h3>
                    <div className="row gy-4 gx-4 mb-10">
                      {upcomingRetreats.map(r => (
                        <div key={r.id} className="col-md-6 col-lg-4">
                          <div className="destination-item th-ani" aria-label={r.title}>
                            <div className="destination-item_img global-img">
                              <img src="/assets/img/destination/destination_1_1.jpg" alt={r.title} />
                            </div>
                            <div className="destination-content">
                              <h3 className="box-title" style={{fontSize:'19px'}}>
                                <Link href="#contact">{r.title}</Link>
                              </h3>
                              <p className="destination-text mb-10" style={{minHeight:'60px'}}>{r.summary}</p>
                              <p className="destination-text mb-5" style={{fontSize:'12px',letterSpacing:'.05em',textTransform:'uppercase'}}>{r.date}</p>
                              <p className="destination-text mb-15" style={{fontWeight:600}}>{r.fee} <span style={{fontWeight:400,fontSize:'11px'}}>• 5 Days • Andalusia</span></p>
                              <Link href="#contact" className="th-btn style4 th-icon" style={{padding:'6px 18px',fontSize:'13px'}}>Book Now</Link>
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
      </main>
      <style jsx>{`
        /* Improve contrast of hosting enquiry button on dark bg */
        .hosting-btn {
          background: #fff !important;
          color: #1a2a21 !important;
          border: 1px solid #ffffff !important;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
        }
        .hosting-btn:hover {
          background: #e9f4ef !important;
          color: #0f221b !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.28);
        }
      `}</style>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
