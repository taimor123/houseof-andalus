"use client";
import React, { useState } from 'react';

const collaborationOptions = [
  { value: 'land_management', label: 'Land Management' },
  { value: 'advertising_products_services', label: 'Advertising Your Own Products/Services' },
  { value: 'art_projects', label: 'Art Projects' },
  { value: 'education', label: 'Education' },
  { value: 'history_legacy', label: 'History & Legacy' },
];

const CollaboratorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    areas: [],
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const toggleArea = (value) => {
    setFormData(prev => {
      const exists = prev.areas.includes(value);
      return { ...prev, areas: exists ? prev.areas.filter(v => v !== value) : [...prev.areas, value] };
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
      // Placeholder endpoint - implement API separately if needed.
      const res = await fetch('/api/collaborator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        const data = await res.json().catch(()=>({message:'Submission failed.'}));
        setStatus({ type: 'error', message: data.message || 'Submission failed.' });
      } else {
        setStatus({ type: 'success', message: 'Thank you! Your collaboration interest has been sent.' });
        setFormData({ name: '', phone: '', email: '', areas: [] });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="booking-form-area space" id="collaborator-form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="title-area text-center mb-40">
              <span className="sub-title style1">Collaborator Form – House of Andalus</span>
              <h2 className="sec-title">Collaborate With Us</h2>
              <p className="sec-text">Share areas where you'd like to collaborate and we will reach out.</p>
            </div>
            <form onSubmit={handleSubmit} className="booking-enquiry-form" noValidate>
              <div className="form-section card-plate">
                <h5 className="section-heading">Your Details</h5>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-control" placeholder="e.g. Ahmad Idris" />
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
                <h5 className="section-heading">Areas of Collaboration</h5>
                <div className="row g-2">
                  {collaborationOptions.map(opt => (
                    <div className="col-md-6" key={opt.value}>
                      <label className={`checkbox-line ${formData.areas.includes(opt.value) ? 'active' : ''}`}>
                        <input
                          type="checkbox"
                          value={opt.value}
                          checked={formData.areas.includes(opt.value)}
                          onChange={() => toggleArea(opt.value)}
                        /> {opt.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-40">
                <button type="submit" className="th-btn style1" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit Collaboration Interest'}
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

export default CollaboratorForm;
