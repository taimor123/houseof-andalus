"use client";
import React, { useState, useEffect } from 'react';

const accommodationOptions = [
  { value: 'main_house', label: 'The Main House Only (2-person sharing)' },
  { value: 'whole_site', label: 'The Whole Site (Main House + 3 Apartments)' },
  { value: 'guided_tours', label: 'Guided Tours to Historic Sites of Andalusia' },
  { value: 'outdoor', label: 'Outdoor Activities' },
  { value: 'cultural', label: 'Cultural / Culinary Experiences' },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    country: '',
    selfCatering: '', // yes | no
    adults: '',
    childrenAges: '',
    startDate: '',
    endDate: '',
    daysCount: '',
    flexibleDates: '', // yes | no
    purpose: '',
    specialRequirements: '',
    accommodation: [],
    drivingOwnCar: '',
    needTaxi: '',
    airportTransfers: '',
    anythingElse: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const countryOptions = [
    'United Kingdom','United States','Spain','France','Germany','Canada','Saudi Arabia','United Arab Emirates','Morocco','Turkey','Malaysia','Australia','South Africa','Nigeria','Pakistan','India','Indonesia','Other'
  ];

  // Auto-calc days if start & end chosen
  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const s = new Date(formData.startDate);
      const e = new Date(formData.endDate);
      if (!isNaN(s) && !isNaN(e) && e >= s) {
        const diff = Math.round((e - s) / (1000*60*60*24)) + 1; // inclusive
        setFormData(prev => ({ ...prev, daysCount: String(diff) }));
      }
    }
  }, [formData.startDate, formData.endDate]);

  const toggleAccommodation = (value) => {
    setFormData((prev) => {
      const exists = prev.accommodation.includes(value);
      return { ...prev, accommodation: exists ? prev.accommodation.filter(v => v !== value) : [...prev.accommodation, value] };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioGroup = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.country) {
      return { ok: false, msg: 'Please fill at least Name, Email, and Country.' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return { ok: false, msg: 'Enter a valid email address.' };
    }
    return { ok: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const v = validate();
    if (!v.ok) {
      setStatus({ type: 'error', message: v.msg });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: 'error', message: data.message || 'Submission failed.' });
      } else {
        setStatus({ type: 'success', message: 'Your booking enquiry has been sent. We will respond shortly.' });
        setFormData({
          name: '', contact: '', email: '', country: '', selfCatering: '', adults: '', childrenAges: '', startDate: '', endDate: '', daysCount: '', flexibleDates: '', purpose: '', specialRequirements: '', accommodation: [], drivingOwnCar: '', needTaxi: '', airportTransfers: '', anythingElse: ''
        });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="booking-form-area space" id="booking-form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="title-area text-center mb-40">
              <span className="sub-title style1">Booking Form – House of Andalus</span>
              <h2 className="sec-title">Plan Your Stay & Experiences</h2>
              <p className="sec-text">Share a few details and we will help shape a stay aligned with your purpose, pace, and prayer.</p>
            </div>
            <form onSubmit={handleSubmit} className="booking-enquiry-form" noValidate>
              <div className="form-section card-plate">
                <h5 className="section-heading">Guest & Contact</h5>
                <div className="row g-4">
                {/* Name */}
                <div className="col-md-6">
                  <label className="form-label">Name *</label>
                  <input type="text" required aria-required="true" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="e.g. Aisha Khan" />
                </div>
                {/* Contact */}
                <div className="col-md-6">
                  <label className="form-label">Contact Details (Phone / WhatsApp)</label>
                  <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="form-control" placeholder="+44 7800 000000" />
                </div>
                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label">Email Address *</label>
                  <input type="email" required aria-required="true" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="you@example.com" />
                </div>
                {/* Country */}
                <div className="col-md-6">
                  <label className="form-label">Which Country Are You Traveling From? *</label>
                  <select name="country" required aria-required="true" value={formData.country} onChange={handleChange} className="form-control">
                    <option value="">Select Country</option>
                    {countryOptions.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                </div>
              </div>

              <div className="form-section card-plate">
                <h5 className="section-heading">Stay Preferences</h5>
                <div className="row g-4">

                {/* Self-catering */}
                <div className="col-md-6">
                  <label className="form-label d-block">Would You Like to Book a Self-Catering Stay?</label>
                  <div className="d-flex gap-3 flex-wrap">
                    {['yes','no'].map(val => (
                      <label key={val} className={`radio-pill ${formData.selfCatering===val?'active':''}`}>
                        <input type="radio" name="selfCatering" value={val} checked={formData.selfCatering === val} onChange={(e)=>handleRadioGroup('selfCatering', e.target.value)} />
                        <span className="radio-indicator" aria-hidden="true"></span>
                        <span className="label-text">{val === 'yes' ? 'Yes' : 'No'}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Guests */}
                <div className="col-md-6">
                  <label className="form-label">Number of Guests (Adults)</label>
                  <input type="number" min="1" name="adults" value={formData.adults} onChange={handleChange} className="form-control" placeholder="e.g. 2" />
                  <small className="form-hint">Children & Ages listed below</small>
                </div>
                <div className="col-12">
                  <label className="form-label">Children & Ages</label>
                  <input type="text" name="childrenAges" value={formData.childrenAges} onChange={handleChange} className="form-control" placeholder="e.g. 2 children (5 & 9)" />
                </div>
                {/* Preferred Dates */}
                <div className="col-md-4">
                  <label className="form-label">Start Date</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">End Date</label>
                  <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="form-control" min={formData.startDate || undefined} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Days (auto)</label>
                  <input type="number" name="daysCount" value={formData.daysCount} onChange={handleChange} className="form-control" placeholder="" />
                </div>

                {/* Flexible Dates */}
                <div className="col-md-6">
                  <label className="form-label d-block">Are You Flexible with Dates/Times?</label>
                  <div className="d-flex gap-3 flex-wrap">
                    {['yes','no'].map(val => (
                      <label key={val} className={`radio-pill ${formData.flexibleDates===val?'active':''}`}>
                        <input type="radio" name="flexibleDates" value={val} checked={formData.flexibleDates === val} onChange={(e)=>handleRadioGroup('flexibleDates', e.target.value)} />
                        <span className="radio-indicator" aria-hidden="true"></span>
                        <span className="label-text">{val === 'yes' ? 'Yes' : 'No'}</span>
                      </label>
                    ))}
                  </div>
                </div>
                </div>
              </div>

              <div className="form-section card-plate">
                <h5 className="section-heading">Intent & Requirements</h5>
                <div className="row g-4">
                {/* Purpose */}
                <div className="col-md-6">
                  <label className="form-label">Purpose of Your Visit</label>
                  <textarea name="purpose" value={formData.purpose} onChange={handleChange} className="form-control" rows={3} placeholder="Retreat, renewal, research, family time, etc." />
                </div>
                {/* Special Requirements */}
                <div className="col-md-6">
                  <label className="form-label">Special Requirements</label>
                  <textarea name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} className="form-control" rows={3} placeholder="Accessibility, dietary needs, prayer space, etc." />
                </div>

                {/* Accommodation & Experiences */}
                <div className="col-12">
                  <label className="form-label d-block">Accommodation & Experiences (Tick All That Apply)</label>
                  <div className="row g-2">
                    {accommodationOptions.map(opt => (
                      <div className="col-md-6" key={opt.value}>
                        <label className={`checkbox-line ${formData.accommodation.includes(opt.value) ? 'active' : ''}`}> 
                          <input
                            type="checkbox"
                            value={opt.value}
                            checked={formData.accommodation.includes(opt.value)}
                            onChange={() => toggleAccommodation(opt.value)}
                          /> {opt.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transport Details */}
                <div className="col-md-4">
                  <label className="form-label d-block">Driving Your Own Car?</label>
                  <div className="d-flex flex-wrap gap-2">
                  {['yes','no'].map(val => (
                    <label key={val} className={`radio-pill ${formData.drivingOwnCar===val?'active':''}`}>
                      <input type="radio" name="drivingOwnCar" value={val} checked={formData.drivingOwnCar === val} onChange={(e)=>handleRadioGroup('drivingOwnCar', e.target.value)} />
                      <span className="radio-indicator" aria-hidden="true"></span>
                      <span className="label-text">{val === 'yes' ? 'Yes' : 'No'}</span>
                    </label>
                  ))}
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label d-block">Need Taxi Arranged?</label>
                  <div className="d-flex flex-wrap gap-2">
                  {['yes','no'].map(val => (
                    <label key={val} className={`radio-pill ${formData.needTaxi===val?'active':''}`}>
                      <input type="radio" name="needTaxi" value={val} checked={formData.needTaxi === val} onChange={(e)=>handleRadioGroup('needTaxi', e.target.value)} />
                      <span className="radio-indicator" aria-hidden="true"></span>
                      <span className="label-text">{val === 'yes' ? 'Yes' : 'No'}</span>
                    </label>
                  ))}
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label d-block">Airport Transfers Required?</label>
                  <div className="d-flex flex-wrap gap-2">
                  {['yes','no'].map(val => (
                    <label key={val} className={`radio-pill ${formData.airportTransfers===val?'active':''}`}>
                      <input type="radio" name="airportTransfers" value={val} checked={formData.airportTransfers === val} onChange={(e)=>handleRadioGroup('airportTransfers', e.target.value)} />
                      <span className="radio-indicator" aria-hidden="true"></span>
                      <span className="label-text">{val === 'yes' ? 'Yes' : 'No'}</span>
                    </label>
                  ))}
                  </div>
                </div>
                </div>
              </div>

              <div className="form-section card-plate">
                <h5 className="section-heading">Anything Else</h5>
                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label">Anything Else You’d Like Us to Know?</label>
                    <textarea name="anythingElse" value={formData.anythingElse} onChange={handleChange} className="form-control" rows={3} placeholder="Additional needs or requests" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-40">
                <button type="submit" className="th-btn style1" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit Booking Enquiry'}
                </button>
                {status.message && (
                  <p className={`form-status mt-15 ${status.type === 'error' ? 'text-danger' : 'text-success'}`}>{status.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .booking-enquiry-form .form-label { font-weight: 600; font-size: 14px; letter-spacing: .02em; }
        .booking-enquiry-form .form-control { background:#fff; border:1px solid #d9e6e0; border-radius:8px; min-height:46px; }
        .booking-enquiry-form textarea.form-control { min-height:120px; resize:vertical; }
        .form-hint { display:block; margin-top:4px; font-size:11px; color:#5e6d65; }
        .choice-pill { font-size:13px; padding:6px 14px; border:1px solid #d9e6e0; border-radius:30px; cursor:pointer; user-select:none; background:#f9fbfa; font-weight:500; }
        .choice-pill input { margin-right:6px; }
        .choice-pill:hover { background:#eef5f1; }
        .checkbox-line { display:block; padding:10px 14px; border:1px solid #d9e6e0; border-radius:10px; font-size:13px; background:#fff; cursor:pointer; position:relative; }
        .checkbox-line input { margin-right:8px; }
        .checkbox-line.active { border-color:#4a6b5a; background:#f2f8f5; }
        .form-status { font-size:14px; }
        .form-section { margin-bottom:34px; }
        // .card-plate { background:linear-gradient(145deg,#ffffff,#f3f7f4); border:1px solid #dbe7e1; border-radius:18px; padding:28px 28px 10px; box-shadow:0 8px 22px -8px rgba(26,54,39,0.12); }
        .section-heading { font-size:16px; letter-spacing:.05em; text-transform:uppercase; font-weight:600; margin-bottom:18px; color:#2a4638; }
        select.form-control { appearance:none; background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' fill='%233c584c'%3E%3Cpath d='M4 6l4 4 4-4z'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; padding-right:34px; }
        .radio-pill { position:relative; display:inline-flex; align-items:center; gap:6px; padding:8px 18px 8px 42px; border:1px solid #cfdcd6; background:#ffffff; border-radius:40px; font-size:13px; font-weight:500; color:#2e4a3c; cursor:pointer; transition:.18s ease; min-height:42px; }
        .radio-pill:hover { background:#f1f6f3; border-color:#b9cac2; }
        .radio-pill.active { background:#e8f3ee; border-color:#4a6b5a; box-shadow:0 0 0 3px rgba(74,107,90,0.15); }
        .radio-pill input { position:absolute; inset:0; opacity:0; cursor:pointer; margin:0; }
        .radio-indicator { position:absolute; left:16px; width:18px; height:18px; border:2px solid #4a6b5a; border-radius:50%; display:flex; align-items:center; justify-content:center; background:#ffffff; transition:.22s ease; }
        .radio-pill.active .radio-indicator { background:#4a6b5a; }
        .radio-pill.active .radio-indicator::after { content:""; width:8px; height:8px; background:#ffffff; border-radius:50%; }
        .radio-pill:focus-within { outline:2px solid #2f5543; outline-offset:2px; }
        @media (prefers-reduced-motion: reduce){ .radio-pill, .radio-indicator { transition:none; } }
        @media (max-width: 767px){
          .choice-pill { padding:6px 12px; }
          .checkbox-line { font-size:12px; }
          .card-plate { padding:22px 18px 6px; }
        }
      `}</style>
    </section>
  );
};

export default BookingForm;
