"use client";
import React, { useEffect } from 'react';
import HeaderOne from '../../src/Components/Header/HeaderOne';
import FooterFour from '../../src/Components/Footer/FooterFour';
import ScrollToTop from '../../src/Components/ScrollToTop';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';

// REPLACED placeholder upcomingRetreats with structured 2026 data
const events2026 = [
  {
    month: 'March',
    icon: '🌸',
    items: [
      {
        title: 'New Blossom – Spring Writer’s Retreat',
        description: 'Nurture creativity and peace among the olive groves. Write, reflect, and rediscover inspiration.',
        dates: 'March (exact dates to be announced)',
        register: true
      }
    ]
  },
  {
    month: 'April',
    icon: '🌿',
    items: [
      {
        title: 'Alchemy of Leadership Programme',
        description: 'Transform your understanding of leadership with a soulful, purpose-driven framework.',
        dates: '23–27 April',
        viewDetails: true,
        register: true
      }
    ]
  },
  {
    month: 'May',
    icon: '❀',
    items: [
      {
        title: 'Muslim Women Leadership Retreat',
        description: 'A sacred space for women to grow, connect, and empower each other through spiritual and personal development.',
        dates: '14–17 May',
        register: true
      }
    ]
  },
  {
    month: 'June',
    icon: '♥︎',
    items: [
      {
        title: 'Connecting Couples Retreat',
        description: 'Reignite love, improve communication, and renew your relationship in a serene Andalusian setting.',
        dates: 'June (exact dates to be announced)',
        register: true
      }
    ]
  },
  {
    month: 'July & August',
    icon: '☀️',
    items: [
      {
        title: 'Family & Friends Open Retreats',
        description: 'Spend precious days with loved ones. Reconnect through laughter, food, and shared memories.',
        dates: 'July–August (flexible bookings)',
        register: true
      }
    ]
  },
  {
    month: 'September',
    icon: '🍁',
    items: [
      {
        title: 'Women’s Retreat with Asma Ahmad',
        description: 'A rejuvenating retreat to restore balance, strength, and inner peace.',
        dates: '24–28 September',
        register: true
      },
      {
        title: 'Couples Retreat',
        description: 'A nurturing space to reconnect hearts and heal together through guided reflection.',
        dates: 'September (exact dates to be announced)',
        register: true
      },
      {
        title: 'Alchemy of Leadership (Encore)',
        description: 'An extended opportunity for those who missed the April programme.',
        dates: 'September (TBC)',
        viewDetails: true,
        register: true
      }
    ]
  },
  {
    month: 'October',
    icon: '🫒',
    items: [
      {
        title: 'Writer’s Retreat',
        description: 'Find your muse in the Andalusian calm. A peaceful space to write, think, and grow.',
        dates: 'October (exact dates to be announced)',
        register: true
      },
      {
        title: 'Olive Harvest Retreat',
        description: 'Experience the sacred tradition of olive harvesting — reconnecting body, earth, and spirit.',
        dates: 'October (exact dates to be announced)',
        register: true
      }
    ]
  }
];
// ADD: helper for Register Interest button destination
const getInterestHref = (title = '') => {
  const lower = title.toLowerCase();
  if (lower.includes('couples')) return '/book-your-stay/couple-retreat-form';
  if (lower.includes('custom')) return '/book-your-stay/organize-your-own-retreat';
  return '/book-your-stay/booking-form';
};

export default function BookYourStayPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.hoa-event-card');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);
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
                      <Link href="/book-your-stay/organize-your-own-retreat" className="th-btn style1 th-icon hosting-btn">Enquire About Hosting</Link>
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
                    <p className="blog-text mb-40">
                      Join us in the mountains of Andalucia for our next retreat here:
                      <Link href="#upcoming-2026" className="th-btn style4 th-icon" style={{padding:'4px 14px'}}>View 2026 Schedule</Link>
                    </p>

                    {/* REMOVED legacy "Upcoming Retreats" cards */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* NEW: 2026 Upcoming Retreats & Events (Redesigned) */}
        <section className="space hoa-events-2026 position-relative overflow-hidden" id="upcoming-2026" aria-labelledby="hoa-events-2026-title">
          <div className="container shape-mockup-wrap">
            {/* Decorative Shapes (reuse existing assets) */}
            <div className="shape-mockup d-none d-xl-block hoa-shape-left" style={{ top: '4%', left: '-6%' }}>
              <img src="/assets/img/shape/shape_2.png" alt="decor shape" />
            </div>
            <div className="shape-mockup d-none d-xl-block hoa-shape-right" style={{ bottom: '6%', right: '-4%' }}>
              <img src="/assets/img/shape/shape_3.png" alt="decor shape" />
            </div>

            {/* Intro */}
            <div className="row justify-content-center mb-50">
              <div className="col-xl-9">
                <div className="title-area text-center">
                  <span className="sub-title style1">2026 Schedule</span>
                  <h2 id="hoa-events-2026-title" className="sec-title mb-20 heading">House of Andalus Retreats & Events – 2026</h2>
                  <p className="sec-text mx-auto" style={{maxWidth:'760px'}}>
                    We welcome you to a year of reflection, growth, and renewal under the Andalusian sky.
                    Whether you seek peace, connection, or inspiration — there’s a retreat waiting for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Month Groups */}
            {events2026.map(group => (
              <div key={group.month} className="hoa-month-wrapper mb-60">
                <div className="hoa-month-bar">
                  <span className="hoa-month-icon" aria-hidden="true">{group.icon}</span>
                  <span className="hoa-month-label">{group.month}</span>
                  <span className="hoa-month-line" />
                </div>
                <div className="row gy-4 gx-4">
                  {group.items.map((ev, i) => (
                    <div key={i} className="col-sm-6 col-lg-4">
                      <div className="hoa-event-card destination-item th-ani" role="article" aria-label={ev.title}>
                        <div className="hoa-event-accent" />
                        <div className="hoa-event-inner">
                          <h4 className="box-title hoa-event-title">{ev.title}</h4>
                          <p className="destination-text hoa-event-desc">{ev.description}</p>
                          <p className="destination-text hoa-event-dates"><strong>Dates:</strong> {ev.dates}</p>
                          <div className="hoa-actions d-flex flex-wrap gap-2">
                            {ev.viewDetails && (
                              <Link
                                href="/book-your-stay/booking-form"
                                className="th-btn style1 th-icon"
                                aria-label={`View details for ${ev.title}`}
                              >
                                View Details
                              </Link>
                            )}
                            {ev.register && (
                              <Link
                                href={getInterestHref(ev.title)}
                                className="th-btn style3 th-icon"
                                aria-label={`Register interest for ${ev.title}`}
                              >
                                Register Interest
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
          background: #ffffffff !important;
          color: #0f221b !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.28);
        }
        /* Redesigned 2026 Events Section */
        .hoa-events-2026 {
          background:
            linear-gradient(140deg,#f9f7f3 0%, #ffffffff 55%, #eef3ef 100%);
        }
        .hoa-events-2026:before {
          content:'';
          position:absolute;
          inset:0;
          background:
            radial-gradient(circle at 12% 18%, rgba(197,161,91,0.12) 0%, transparent 55%),
            radial-gradient(circle at 88% 82%, rgba(122,139,115,0.12) 0%, transparent 60%);
          pointer-events:none;
        }
        .hoa-month-wrapper:last-of-type { margin-bottom:0; }
        .hoa-month-bar {
          display:flex;
          align-items:center;
          gap:14px;
          margin-bottom:28px;
          position:relative;
        }
        .hoa-month-icon {
          font-size:22px;
          line-height:1;
        }
        .hoa-month-label {
          font-size:18px;
          font-weight:600;
          letter-spacing:.05em;
          text-transform:uppercase;
          padding:6px 16px;
          background:#ffffff;
          border:1px solid #e1ece8;
          border-radius:30px;
          color:#2a332c;
        }
        .hoa-month-line {
          flex:1;
          height:1px;
          background:linear-gradient(90deg,#5a6d52 0%, rgba(90,109,82,0) 80%);
          opacity:.35;
        }
        .hoa-event-card {
          position:relative;
          background:#fff;
          border:1px solid #e1e8ecff;
          border-radius:18px;
          box-shadow:0 6px 20px -8px rgba(32,42,36,0.12);
          overflow:hidden;
          padding:0;
          opacity:0;
          transform:translateY(26px);
          transition:transform .45s cubic-bezier(.19,1,.22,1), box-shadow .45s ease;
        }
        .hoa-event-card.in-view {
          animation:hoaCardIn .75s ease forwards;
        }
        .hoa-event-card:hover {
          transform:translateY(-6px);
          box-shadow:0 16px 34px -14px rgba(32,42,36,0.28);
        }
        .hoa-event-accent {
          height:5px;
          background:linear-gradient(90deg,#c5a15b 0%, #d7b980 60%, #e1ece8 100%);
        }
        .hoa-event-inner {
          padding:18px 20px 22px;
        }
        .hoa-event-title {
          font-size:18px;
          margin-bottom:10px;
        }
        .hoa-event-desc {
          font-size:14px;
          line-height:1.55;
          min-height:62px;
          margin-bottom:12px;
          color:#5a6d52;
        }
        .hoa-event-dates {
          font-size:12px;
          letter-spacing:.05em;
          text-transform:uppercase;
          margin:0 0 16px;
          font-weight:500;
          color:#596b57;
        }
        .hoa-actions .hoa-register-btn {
          padding:8px 18px;
          border-radius:28px;
          font-size:13px;
          letter-spacing:.04em;
        }
        /* UPDATED: View Details button refinement */
        .hoa-details-btn {
          position:relative;
          display:inline-flex;
          align-items:center;
          gap:6px;
          font-size:12px;
          margin-top:10px;
          padding:6px 16px;
          padding-top: 10px;
          border-radius:26px;
          background:#ffffff;
          border:1px solid #c9d5ce;
          color:#4e5f49;
          font-weight:500;
          letter-spacing:.05em;
          line-height:1.2;
          transition:background .3s ease, color .3s ease, box-shadow .3s ease, border-color .3s ease, transform .3s ease;
        }
        .hoa-details-btn:hover {
          background:#f1f6f3;
          color:#2a332c;
          border-color:#5a6d52;
          box-shadow:0 6px 16px -8px rgba(74,90,69,.35);
          transform:translateY(-2px);
        }
        .hoa-details-btn:active {
          transform:translateY(0);
          box-shadow:0 3px 10px -6px rgba(74,90,69,.3);
        }
        .hoa-details-btn:focus,
        .hoa-register-btn:focus {
          outline:2px solid #c5a15b;
          outline-offset:2px;
        }
        @keyframes hoaCardIn {
          0% { opacity:0; transform:translateY(26px); }
          100% { opacity:1; transform:translateY(0); }
        }
        @media (max-width:640px) {
          .hoa-month-label { font-size:14px; padding:6px 14px; }
          .hoa-event-inner { padding:16px 18px 20px; }
          .hoa-details-btn {
            padding:6px 15px;
          }
        }
      `}</style>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
