"use client";
import React, { useState } from 'react';

const volunteerOptions = [
  { value: 'olive_harvest', label: 'Olive Harvest' },
  { value: 'landscaping', label: 'Landscaping' },
  { value: 'organizing_events', label: 'Organizing Events' },
  { value: 'art_culture', label: 'Art & Culture Coordinator' },
  { value: 'educational_materials', label: 'Creating Educational Materials' },
  { value: 'social_media', label: 'Social Media' },
  { value: 'marketing_branding', label: 'Marketing & Branding' },
  { value: 'fundraising', label: 'Fundraising' },
];

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interests: [],
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const toggleInterest = (value) => {
    setFormData(prev => {
      const exists = prev.interests.includes(value);
      return { ...prev, interests: exists ? prev.interests.filter(v => v !== value) : [...prev.interests, value] };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name || !formData.email) {
      return { ok: false, msg: 'Please fill Name and Email.' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return { ok: false, msg: 'Enter a valid email address.' };
    }
    return { ok: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) { setStatus({ type: 'error', message: v.msg }); return; }
    setSubmitting(true);
    try {
      // Placeholder API endpoint; implement separately.
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        const data = await res.json().catch(()=>({message:'Submission failed.'}));
        setStatus({ type: 'error', message: data.message || 'Submission failed.' });
      } else {
        setStatus({ type: 'success', message: 'Thank you! Your volunteer interest has been sent.' });
        setFormData({ name: '', phone: '', email: '', interests: [] });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="booking-form-area space" id="volunteer-form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="title-area text-center mb-40">
              <span className="sub-title style1">Volunteer Form – House of Andalus</span>
              <h2 className="sec-title">Become a Volunteer</h2>
              <p className="sec-text">Share how you'd like to contribute. We will be in touch.</p>
            </div>
            <form onSubmit={handleSubmit} className="booking-enquiry-form" noValidate>
              <div className="form-section card-plate">
                <h5 className="section-heading">Your Details</h5>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-control" placeholder="e.g. Fatima Noor" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="+34 600 000 000" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-control" placeholder="you@example.com" />
                  </div>
                </div>
              </div>

              <div className="form-section card-plate">
                <h5 className="section-heading">Volunteer Interests</h5>
                <div className="row g-2">
                  {volunteerOptions.map(opt => (
                    <div className="col-md-6" key={opt.value}>
                      <label className={`checkbox-line ${formData.interests.includes(opt.value) ? 'active' : ''}`}>
                        <input
                          type="checkbox"
                          value={opt.value}
                          checked={formData.interests.includes(opt.value)}
                          onChange={() => toggleInterest(opt.value)}
                        /> {opt.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-40">
                <button type="submit" className="th-btn style1" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit Volunteer Interest'}
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
        .booking-enquiry-form .form-label { font-weight:600; font-size:14px; letter-spacing:.02em; }
        .booking-enquiry-form .form-control { background:#fff; border:1px solid #d9e6e0; border-radius:8px; min-height:46px; }
        .checkbox-line { display:block; padding:10px 14px; border:1px solid #d9e6e0; border-radius:10px; font-size:13px; background:#fff; cursor:pointer; }
        .checkbox-line input { margin-right:8px; }
        .checkbox-line.active { border-color:#4a6b5a; background:#f2f8f5; }
        .form-status { font-size:14px; }
        .form-section { margin-bottom:34px; }
        .section-heading { font-size:16px; letter-spacing:.05em; text-transform:uppercase; font-weight:600; margin-bottom:18px; color:#2a4638; }
        @media (max-width: 767px){ .checkbox-line { font-size:12px; } }
      `}</style>
    </section>
  );
};

export default VolunteerForm;
