"use client";
import React, { useState } from 'react';

const AmbassadorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inspires: '',
    ambassadorVision: '',
    importance: '',
    speakingWhere: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

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
      // Placeholder endpoint; implement /api/ambassador separately.
      const res = await fetch('/api/ambassador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        const data = await res.json().catch(()=>({message:'Submission failed.'}));
        setStatus({ type: 'error', message: data.message || 'Submission failed.' });
      } else {
        setStatus({ type: 'success', message: 'Thank you! Your ambassador application has been sent.' });
        setFormData({ name: '', phone: '', email: '', inspires: '', ambassadorVision: '', importance: '', speakingWhere: '' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="booking-form-area space" id="ambassador-form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="title-area text-center mb-40">
              <span className="sub-title style1">Ambassador Form – House of Andalus</span>
              <h2 className="sec-title">Become an Ambassador</h2>
              <p className="sec-text">Share your motivation and vision for representing House of Andalus.</p>
            </div>
            <form onSubmit={handleSubmit} className="booking-enquiry-form" noValidate>
              <div className="form-section card-plate">
                <h5 className="section-heading">Your Details</h5>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-control" placeholder="e.g. Zaynab Ali" />
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
                <h5 className="section-heading">Ambassador Questions</h5>
                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label">What inspires you about the House of Andalus?</label>
                    <textarea name="inspires" value={formData.inspires} onChange={handleChange} className="form-control" rows={4} placeholder="Share what resonates most with you." />
                  </div>
                  <div className="col-12">
                    <label className="form-label">What would it look like for you to become one of our ambassadors?</label>
                    <textarea name="ambassadorVision" value={formData.ambassadorVision} onChange={handleChange} className="form-control" rows={4} placeholder="Describe your approach and involvement." />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Why is Muslim Spain important to you?</label>
                    <textarea name="importance" value={formData.importance} onChange={handleChange} className="form-control" rows={4} placeholder="Reflect on its relevance and legacy." />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Where would you be speaking about the House of Andalus as an Ambassador?</label>
                    <textarea name="speakingWhere" value={formData.speakingWhere} onChange={handleChange} className="form-control" rows={4} placeholder="Events, communities, platforms, regions, etc." />
                  </div>
                </div>
              </div>

              <div className="text-center mt-40">
                <button type="submit" className="th-btn style1" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit Ambassador Application'}
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
        .booking-enquiry-form textarea.form-control { min-height:140px; resize:vertical; }
        .form-status { font-size:14px; }
        .form-section { margin-bottom:34px; }
        .section-heading { font-size:16px; letter-spacing:.05em; text-transform:uppercase; font-weight:600; margin-bottom:18px; color:#2a4638; }
        @media (max-width: 767px){ .booking-enquiry-form textarea.form-control { min-height:120px; } }
      `}</style>
    </section>
  );
};

export default AmbassadorForm;
